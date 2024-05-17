import axios from 'axios';
import debounce from 'lodash/debounce';
import { ILocalStore } from 'utils/useLocalStore';
import SearchStore from 'store/SearchStore';
import FilterStore from 'store/FilterStore';
import PaginationStore from 'store/PaginationStore';
import MetaStore from 'store/MetaStore';
import { ENDPOINTS } from 'config/endpoints';
import { action, computed, makeObservable, observable, reaction, runInAction } from 'mobx';
import { ProductType } from 'types/types';
import { updateURLQueryParam } from 'utils/helper';

type PrivateFields = "_products" | "_totalProductsCount";

export default class ProductsStore implements ILocalStore {

  private _products: ProductType[] = [];
  private _totalProductsCount: number = 0;
  private _metaStore: MetaStore = new MetaStore();
  private _searchStore: SearchStore;
  private _filterStore: FilterStore;
  private _paginationStore: PaginationStore;
  private _filterReactionDisposer;

  constructor({
                title,
                categoryId,
                limit,
                page,
  }: {
    title?: string,
    categoryId?: string,
    limit?: number,
    page?: number,
  }) {
    makeObservable<ProductsStore, PrivateFields>(this, {
      _products: observable.ref,
      _totalProductsCount: observable,
      products: computed,
      totalProducts: computed,
      fetchProducts: action,
    });

    this._searchStore = new SearchStore(title || null);
    this._filterStore = new FilterStore(categoryId || null);
    this._paginationStore = new PaginationStore(limit, page);


    this._filterReactionDisposer = reaction(
      () => ({
          search: this._searchStore.searchText,
          filter: this._filterStore.selectedCategoryKey,
          page: this._paginationStore.currentPage,
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
    return this._products;
  }

  get paginationStore(): PaginationStore {
    return this._paginationStore;
  }

  get totalProducts(): number {
    return this._totalProductsCount;
  }

  get search(): SearchStore {
    return this._searchStore;
  }

  get meta(): MetaStore {
    return this._metaStore;
  }

  get filterCategory(): FilterStore {
    return this._filterStore;
  }

  getProducts(): ProductType[] {
    return this._products;
  }

  destroy(): void {
    this._filterReactionDisposer();
    this._searchStore.destroy();
  }

  async fetchProducts(): Promise<void> {
    this._metaStore.setLoading();
    this._products = [];

    const title = this._searchStore.searchText || undefined;
    const categoryId = this._filterStore.selectedCategoryKey || undefined;

    const currentPage = this._paginationStore.currentPage;
    const productsCount = this._paginationStore.productsCount;

    const offset = (currentPage - 1) * productsCount;
    const limit = productsCount;

    const params = {
      title,
      categoryId,
      offset,
      limit,
    };

    try {
      const response = await axios.get(ENDPOINTS.products, { params });
      runInAction(() => {
        this._metaStore.setSuccess();
        this._products = response.data;
      })
    } catch (error) {
      this._metaStore.setError();
      this._products = [];
    }
  }

  async fetchTotalProducts() {
    const title = this._searchStore.searchText || undefined;
    const categoryId = this._filterStore.selectedCategoryKey || undefined;

    const params = {
      title,
      categoryId,
    };

    const response = await axios.get(ENDPOINTS.products, { params });
    this._totalProductsCount = response.data.length;
  }
}
