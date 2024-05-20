import { action, computed, makeObservable, observable } from 'mobx';
import { ILocalStore } from 'utils/useLocalStore';

type PrivateFields = '_searchText';

export default class SearchStore implements ILocalStore {
  private _searchText: string;

  constructor(searchText: string = '') {
    makeObservable<SearchStore, PrivateFields>(this, {
      _searchText: observable,
      searchText: computed,
      setSearchText: action
    });

    this._searchText = searchText;
  }

  setSearchText(text: string){
    this._searchText = text || '';
  }

  get searchText() {
    return this._searchText;
  }

  destroy(): void {
    //
  }
}
