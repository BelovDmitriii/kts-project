import axios from 'axios';
import { ENDPOINTS } from 'config/endpoints';
import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import { ProductType } from 'types/types';
import { ILocalStore } from 'utils/useLocalStore';
import { Meta } from 'utils/meta';

type PrivateFields = "_products" | "_meta" | "_selectedProduct";

class ProductsStore implements ILocalStore {

  private _products: ProductType[] = [];
  private _meta: Meta = Meta.initial;
  private _selectedProduct: ProductType | null = null;
  // pageNumber = 1;
  // pageSize = 3;

  constructor() {
    makeObservable<ProductsStore, PrivateFields>(this, {
      _products: observable.ref,
      _meta: observable,
      _selectedProduct: observable,
      products: computed,
      meta: computed,
      fetchProducts: action,
      fetchSingleProduct: action,
      clearSingleProduct: action,
      selectedProduct: computed,
      // pageSize: observable,
      // pageNumber: observable
    });
  }

  get meta(): Meta {
    return this._meta;
  }

  get products(): ProductType[] {
    return this._products;
  }

  get selectedProduct(): ProductType | null {
    return this._selectedProduct;
  }

  clearSingleProduct = () => {
    this._selectedProduct = null;
  }

  destroy(): void {
    this.clearSingleProduct();
  }

  async fetchProducts( title?: string, categoryId?: string): Promise<void> {
    // const offset = (pageNumber - 1) * pageSize;
    this._meta = Meta.loading;
    this._products = [];
    try {
      // let url = `${ENDPOINTS.products}?offset=${offset}&limit=${pageSize}`;
      let url = `${ENDPOINTS.products}`;
      if (title) {
        url += `/?title=${encodeURIComponent(title)}`;
      }
      if (categoryId) {
        url += `&categoryId=${encodeURIComponent(categoryId)}`;
      }
      const response = await axios.get(url);
      runInAction(() => {
        this._meta = Meta.success;
        this._products = response.data;
      })
    } catch (error) {
      this._meta = Meta.error;
      this._products = [];
    }
  }

  async fetchSingleProduct(id: string) {
    this._meta = Meta.loading;
    try {
      const response = await axios.get(ENDPOINTS.oneProduct(id));
      runInAction(() => {
        this._meta = Meta.success;
        this._selectedProduct = response.data;
      })
    } catch (error) {
      this._meta = Meta.error;
      this._selectedProduct = null;
    }
  }
}

const productsStore = new ProductsStore();

export default productsStore;