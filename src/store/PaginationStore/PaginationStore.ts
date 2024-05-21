import { action, makeObservable, observable } from 'mobx';
import { ILocalStore } from 'utils/useLocalStore';

export default class PaginationStore implements ILocalStore {
  currentPage = 1;
  itemsPerPage = 9;

  constructor() {
    makeObservable(this, {
      currentPage: observable,
      itemsPerPage: observable,
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
    this.currentPage = Math.min(this.currentPage + 1, this.itemsPerPage);
  }

  setItemsPerPage = (count: number) => {
    this.itemsPerPage = count;
  }

  destroy(): void {
      //
  }
}
