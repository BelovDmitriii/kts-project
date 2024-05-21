import axios from 'axios';
import { IReactionDisposer, action, computed, makeObservable, observable, reaction, runInAction } from 'mobx';
import debounce from 'lodash/debounce';
import { ILocalStore } from 'utils/useLocalStore';
import SearchStore from 'store/SearchStore';
import FilterStore from 'store/FilterStore';
import PaginationStore from 'store/PaginationStore';
import MetaStore from 'store/MetaStore';
import { ENDPOINTS } from 'config/endpoints';
import { ProductType } from 'types/types';
import { updateURLQueryParam } from 'utils/helper';

// const ITEMS_PER_PAGE = 9;
// const currentPage = this.paginationStore.currentPage;

// const currentProducts = this.products.slice(
//   (currentPage - 1) * ITEMS_PER_PAGE,
//   currentPage * ITEMS_PER_PAGE
// );
type PrivateFields = "_products" | "_totalProductsCount";
export type ParamsType = {
  title?: string;
  categoryId?: string;
  page?: number;
};

export default class ProductsStore implements ILocalStore {
  private _products: ProductType[] = [];
  private _totalProductsCount: number = 0;
  private _filterReactionDisposer?: IReactionDisposer;

  readonly search: SearchStore;
  readonly meta: MetaStore;
  readonly paginationStore: PaginationStore;
  readonly filterCategory: FilterStore;

  constructor() {
    makeObservable<ProductsStore, PrivateFields>(this, {
      _products: observable.ref,
      _totalProductsCount: observable,
      products: computed,
      totalProducts: computed,
      fetchProducts: action,
    });

    this.search = new SearchStore('');
    this.filterCategory = new FilterStore(null);
    this.paginationStore = new PaginationStore();
    this.meta = new MetaStore();
  }

  init({title, categoryId, page}: ParamsType) {
    this.search.setSearchText(title || '');
    this.filterCategory.setSelectedCategory(categoryId || null);
    this.paginationStore.setCurrentPage(page || 1);

    this._filterReactionDisposer = reaction(
      () => ({
        search: this.search.searchText,
        filter: this.filterCategory.selectedCategoryKey,
        page: this.paginationStore.currentPage,
      }),
      debounce(({ search, filter, page }) => {
        updateURLQueryParam('title', search || null);
        updateURLQueryParam('categoryId', filter);
        updateURLQueryParam('page', page > 1 ? page : null);

        this.fetchProducts();
        this.fetchTotalProducts();
      }, 300),
    );
  }

  get products(): ProductType[] {
    const { currentPage, itemsPerPage } = this.paginationStore;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return this._products.slice(startIndex, endIndex);
  }

  get totalProducts(): number {
    return this._totalProductsCount;
  }

  getProducts(amount: number): ProductType[] {
    return this._products.slice(0, amount);
  }

  destroy(): void {
    if (this._filterReactionDisposer) {
      this._filterReactionDisposer();
    }
    this.search.destroy();
  }

  async fetchProducts(): Promise<void> {
    this.meta.setLoading();
    this._products = [];

    const title = this.search.searchText || undefined;
    const categoryId = this.filterCategory.selectedCategoryKey || undefined;

    const params = {
      title,
      categoryId,
    };

    try {
      const response = await axios.get(ENDPOINTS.products, { params });
      runInAction(() => {
        this.meta.setSuccess();
        this._products = response.data;
      });
    } catch (error) {
      this.meta.setError();
      this._products = [];
    }
  }

  async fetchTotalProducts() {
    const title = this.search.searchText || undefined;
    const categoryId = this.filterCategory.selectedCategoryKey || undefined;

    const params = {
      title,
      categoryId,
    };

    try {
      const response = await axios.get(ENDPOINTS.products, { params });
      runInAction(() => {
        this._totalProductsCount = response.data.length;
      });
    } catch (error) {
      runInAction(() => {
        this._totalProductsCount = 0;
      });
    }
  }
}
