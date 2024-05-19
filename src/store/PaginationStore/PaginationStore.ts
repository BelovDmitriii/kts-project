import { action, makeObservable, observable } from 'mobx';
import { ILocalStore } from 'utils/useLocalStore';

export default class PaginationStore implements ILocalStore {
  currentPage = 1;
  productsCount = 9;

  constructor(productsCount = 9, currentPage = 1) {
    makeObservable(this, {
      currentPage: observable,
      productsCount: observable,
      setPrevCurrentPage: action,
      setCurrentPage: action,
      setNextCurrentPage: action,
    });

    this.currentPage = currentPage || 1;
    this.productsCount = productsCount;
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
