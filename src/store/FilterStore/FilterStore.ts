import axios from 'axios';
import { action, computed, makeObservable, observable } from 'mobx';
import { ENDPOINTS } from 'config/endpoints';
import { Option } from 'components/MultiDropdown';


class FilterStore {
  isLoading: boolean = false;

  searchText: string = '';

  allCategories: Option[] = [];
  filterByCategories: Option[] = [];

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      searchText: observable,
      allCategories: observable,
      filterByCategories: observable,
      setLoading: action,
      setSearchText: action,
      setFilterByCategories: action,
      setCategories: action,
      categories: computed,
      fetchCategories: action,
    });
    this.fetchCategories().then();
  }

  setLoading = (flag: boolean) => {
    this.isLoading = flag;
  }

  setSearchText = (filter: string) => {
    this.searchText = filter;
  }

  setFilterByCategories = (categories: Option[] = []) => {
    this.filterByCategories = categories;
  }

  setCategories = (categories: Option[] = []) => {
    this.allCategories = categories;
  }

  get categories() {
    return this.allCategories;
  }



  async fetchCategories(){
    this.setLoading(true);
    try {
      const response = await axios.get(ENDPOINTS.categories);
      const categories = response.data.map((category: { id: number, name: string }) => ({
        key: category.id,
        value: category.name,
      }));
      this.setCategories(categories);
    } catch(error) {
      console.error('Ошибка при загрузке данных: Categories', error);
    } finally {
      this.setLoading(false);
    }
  }
}

const filterStore = new FilterStore();

export default filterStore;
