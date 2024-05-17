import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import axios from 'axios';
import { Option } from 'components/MultiDropdown';
import { ILocalStore } from 'utils/useLocalStore';
import MetaStore from 'store/MetaStore';
import { ENDPOINTS } from 'config/endpoints';

type PrivateFields = "_categories" | "_selectedCategoryKey";
type Category = {
  id: number;
  name: string;
}

export default class FilterStore implements ILocalStore {

  private _categories: Option[] = [];
  private _selectedCategoryKey: string | null = null;
  private _metaStore: MetaStore = new MetaStore();

  constructor(categoryId: string | null) {
    makeObservable<FilterStore, PrivateFields>(this, {
      _categories: observable,
      _selectedCategoryKey: observable,
      categories: computed,
      selectedCategory: computed,
      setSelectedCategory: action,
    });

    this._selectedCategoryKey = categoryId || null;
  }

  get categories(): Option[] {
    return this._categories;
  }

  get selectedCategoryKey(): string | null {
    return this._selectedCategoryKey;
  }

  get selectedCategory(): Option[] {
    const option = this._categories.find(
      (category) => category.key === this._selectedCategoryKey
    );
    return option ? [option] : [];
  }

  setSelectedCategory(categoryKey: string | null): void {
    this._selectedCategoryKey = categoryKey;
  }

  destroy(): void {
  }

  async fetchAllCategories(): Promise<void> {
    this._metaStore.setLoading();
    this._categories = [];

    try {
      const response = await axios.get<Category[]>(ENDPOINTS.categories);
      runInAction(() => {
        this._metaStore.setSuccess();
        this._categories = response.data.map((category) => ({
          key: String(category.id),
          value: category.name,
        }));
      })
    } catch (error) {
      this._metaStore.setError();
      this._categories = [];
    }
  }
}
