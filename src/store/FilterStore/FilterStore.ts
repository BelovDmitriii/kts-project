import axios from 'axios';
import { action, computed, makeObservable, observable } from 'mobx';
import { ENDPOINTS } from 'config/endpoints';
import { Option } from 'components/MultiDropdown';
import { ILocalStore } from 'utils/useLocalStore';
import { Meta } from 'utils/meta';

type PrivateFields = "_meta" | "_category";

export default class FilterStore implements ILocalStore {

  private _category: string = '';
  private _meta: Meta = Meta.initial;

  isLoading: boolean = false;

  searchText: string = '';

  allCategories: Option[] = [];
  filterByCategories: Option[] = [];

  constructor() {
    makeObservable<FilterStore, PrivateFields>(this, {
      _meta: observable,
      _category: observable,
      meta: computed,
      category: computed,
      allCategories: observable,
      filterByCategories: observable,
      setFilterByCategory: action,
      setCategory: action,
      fetchCategories: action,
    });
  }

  get meta(): Meta {
    return this._meta;
  }

  get category(): string {
    return this._category;
  }

  setFilterByCategory = (category: Option[] = []) => {
    this.filterByCategories = category;
  }

  setCategory = (category: Option[] = []) => {
    this.allCategories = category;
  }

  destroy(): void {
    //nothing to do
  }

  async fetchCategories(){
    this._meta = Meta.loading;
    try {
      const response = await axios.get(ENDPOINTS.categories);
      const category = response.data.map((category: { id: number, name: string }) => ({
        key: category.id,
        value: category.name,
      }));
      this.setCategory(category);
    } catch(error) {
      this._meta = Meta.error;
      this._category = '';
    }
  }
}