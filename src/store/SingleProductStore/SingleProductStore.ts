import axios from 'axios';
import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import { ILocalStore } from 'utils/useLocalStore';
import { ENDPOINTS } from 'config/endpoints';
import { ProductType } from 'types/types';
import MetaStore from 'store/MetaStore';

type PrivateFields = "_product";

export default class SingleProductStore implements ILocalStore {

  private _product: ProductType | null = null;
  private _metaStore: MetaStore = new MetaStore();

  constructor() {
    makeObservable<SingleProductStore, PrivateFields>(this, {
      _product: observable,
      product: computed,
      fetchProduct: action,
    });
  }

  get product(): ProductType | null {
    return this._product;
  }

  get meta(): MetaStore {
    return this._metaStore;
  }

  async fetchProduct(productId: string) {
    this._metaStore.setLoading();
    try {
      const response = await axios.get(ENDPOINTS.oneProduct(productId));
      runInAction(() => {
        this._metaStore.setSuccess();
        this._product = response.data;
      });
    } catch (error) {
      runInAction(() => {
        this._metaStore.setError();
        this._product = null;
      });
    }
  }

  clearSingleProduct = () => {
    this._product = null;
  }

  destroy(): void {
    this.clearSingleProduct();
  }
}
