import { ILocalStore } from 'utils/useLocalStore';
import { action, computed, makeObservable, observable } from 'mobx';
import { Meta } from 'utils/meta';

type PrivateFields = "_meta";

export default class MetaStore implements ILocalStore {
  private _meta: Meta = Meta.initial;

  constructor() {
    makeObservable<MetaStore, PrivateFields>(this, {
      _meta: observable,
      meta: computed,
      isLoading: computed,
      isError: computed,
      isSuccess: computed,
      setLoading: action,
      setError: action,
      setSuccess: action,
    });
  }

  get meta(): Meta {
    return this._meta;
  }

  get isLoading(): boolean {
    return this._meta === Meta.loading;
  }

  get isError(): boolean {
    return this._meta === Meta.error;
  }

  get isSuccess(): boolean {
    return this._meta === Meta.success;
  }

  setLoading(): void {
    this._meta = Meta.loading;
  }

  setError(): void {
    this._meta = Meta.error;
  }

  setSuccess(): void {
    this._meta = Meta.success;
  }

  destroy(): void {
      //
  }
}