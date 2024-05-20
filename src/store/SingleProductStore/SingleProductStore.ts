import axios from 'axios';
import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import { ILocalStore } from 'utils/useLocalStore';
import { ENDPOINTS } from 'config/endpoints';
import { ProductType } from 'types/types';
import MetaStore from 'store/MetaStore';

type PrivateFields = "_product";

export default class SingleProductStore implements ILocalStore {

  private _product: ProductType | null = null;
  readonly meta: MetaStore;

  constructor() {
    makeObservable<SingleProductStore, PrivateFields>(this, {
      _product: observable,
      product: computed,
      fetchProduct: action,
    });

    this.meta = new MetaStore();
  }

  get product(): ProductType | null {
    return this._product;
  }

  async fetchProduct(productId: string) {
    this.meta.setLoading();
    try {
      const response = await axios.get(ENDPOINTS.oneProduct(productId));
      runInAction(() => {
        this.meta.setSuccess();
        this._product = response.data;
      });
    } catch (error) {
      runInAction(() => {
        this.meta.setError();
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
