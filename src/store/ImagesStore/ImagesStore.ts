import { action, computed, makeObservable, observable } from 'mobx';
import { ILocalStore } from 'utils/useLocalStore';

type PrivateFields = "_images" | "_activeImage";

export default class ImagesStore implements ILocalStore {
  private _images: string[] = [];
  private _activeImage: number = 0;

  constructor() {
    makeObservable<ImagesStore, PrivateFields>(this, {
      _images: observable,
      _activeImage: observable,
      images: computed,
      activeImage: computed,
      setActiveImage: action,
      nextImage: action,
      prevImage: action,
    });
  }

  get images(): string[] {
    return this._images;
  }

  get activeImage(): number {
    return this._activeImage;
  }

  setActiveImage(index: number) {
    this._activeImage = index;
  }

  nextImage(imagesLength: number) {
    this.setActiveImage(this.activeImage === imagesLength - 1 ? 0 : this.activeImage + 1);
  }

  prevImage(imagesLength: number) {
    this.setActiveImage(this.activeImage === 0 ? imagesLength : this.activeImage - 1);
  }

  destroy(): void {
    //
  }
}