import { action, makeObservable, observable } from 'mobx';
import { ILocalStore } from 'utils/useLocalStore';

export default class ProductsStore implements ILocalStore {
  currentPage = 1;
  productsCount = 9;

  constructor() {
    makeObservable(this, {
      currentPage: observable,
      productsCount: observable,
      setPrevCurrentPage: action,
      setCurrentPage: action,
      setNextCurrentPage: action,
    });
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

  destroy(): void {
      //sss
  }
}
