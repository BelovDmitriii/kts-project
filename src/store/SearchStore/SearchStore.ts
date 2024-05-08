import { action, computed, makeObservable, observable } from 'mobx';
import { ILocalStore } from 'utils/useLocalStore';
import productsStore from 'store/ProductsStore';

type PrivateFields = '_searchText';

export default class SearchStore implements ILocalStore {
  private _searchText: string = '';

  constructor() {
    makeObservable<SearchStore, PrivateFields>(this, {
      _searchText: observable,
      searchText: computed,
      setSearchText: action,
      getSearchText: computed,
    });
  }

  get searchText(): string {
    return this._searchText;
  }

  setSearchText(text: string) {
    this._searchText = text;
  }

  get getSearchText() {
    return this.searchText;
  }

  async handleSearch() {
    this.setSearchText(this.searchText);
    await productsStore.fetchProducts(this.getSearchText);
  }

  destroy(): void {
    // пока пусто
  }
}
