import axios from 'axios';
import { ENDPOINTS } from 'config/endpoints';
import { action, computed, makeObservable, observable, reaction, runInAction } from 'mobx';
import { ProductType } from 'types/types';
import filterStore from 'store/FilterStore';

export const PRODUCTS_COUNT = 9;

class ProductsStore {
  allProducts: ProductType[] = [];
  selectedProduct: ProductType | null = null;
  isLoading: boolean = false;
  isLoadingOne: boolean = false;

  currentPage = 1;

  constructor() {
    makeObservable(this, {
      allProducts: observable,
      selectedProduct: observable,
      isLoading: observable,
      isLoadingOne: observable,
      currentPage: observable,
      setLoading: action,
      setLoadingOne: action,
      setAllProducts: action,
      setPrevCurrentPage: action,
      setCurrentPage: action,
      setNextCurrentPage: action,
      productsFiltered: computed,
      productsCount: computed,
      products: computed,
      fetchProducts: action,
      fetchSingleProduct: action,
      clearSingleProduct: action,
    });
    this.fetchProducts().then();

    reaction(
      () => ({ searchText: filterStore.searchText, filterByCategories: filterStore.filterByCategories }),
      () => {
        this.setCurrentPage(1);
      },
    )
  }

  setLoading = (flag: boolean) => {
    this.isLoading = flag;
  }

  setLoadingOne = (flag: boolean) => {
    this.isLoadingOne = flag;
  }


  setAllProducts = (allProducts: ProductType[] = []) => {
    this.allProducts = allProducts;
  }


  setPrevCurrentPage = () => {
    this.currentPage = Math.max(this.currentPage - 1, 1);
  }

  setCurrentPage = (page: number) => {
    this.currentPage = page;
  }

  setNextCurrentPage = () => {
    this.currentPage = Math.min(this.currentPage + 1, this.productsCount);
  }


  get productsFiltered() {
    return this.allProducts.filter((product) => {

      const searchIsOk = product.title.toLowerCase().includes(filterStore.searchText.toLowerCase());

      const filterByCategoriesIDs = filterStore.filterByCategories.map((cat) => Number(cat.key));
      const categoriesIsOk = filterByCategoriesIDs.length === 0 || filterByCategoriesIDs.includes(product.category.id)

      return searchIsOk && categoriesIsOk;
    });
  }

  get productsCount() {
    return this.productsFiltered.length;
  }

  get products() {
    const lastProductIndex = this.currentPage * PRODUCTS_COUNT;
    const firstProductIndex = lastProductIndex - PRODUCTS_COUNT;

    return this.productsFiltered.slice(firstProductIndex, lastProductIndex);
  }

  async fetchProducts() {
    this.setLoading(true);
    try {
      const response = await axios.get(ENDPOINTS.products);
      this.setAllProducts(response.data);
    } catch (error) {
      console.error('Ошибка при загрузке данных Products: ', error);
    } finally {
      this.setLoading(false);
    }
  }

  async fetchSingleProduct(id: string) {
    this.setLoadingOne(true);
    try {
      const response = await axios.get(`${ENDPOINTS.products}/${id}`);
      runInAction(() => {
        this.selectedProduct = response.data;
        return;
      })
    } catch (error) {
      console.error('Ошибка при загрузке продукта: ', error);
    } finally {
      this.setLoadingOne(false);
    }
  }

  clearSingleProduct = () => {
    this.selectedProduct = null;
  }

}

const productsStore = new ProductsStore();

export default productsStore;
