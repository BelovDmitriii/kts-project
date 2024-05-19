import React from 'react';
import { useLocalObservable } from 'mobx-react-lite';
import { createContext, ReactNode } from 'react';
import ProductsStore from 'store/ProductsStore';

export const ProductsStoreContext = createContext<ProductsStore>(null!);

const ProductsStoreProvider = ({ children, limit }: {children: ReactNode, limit: number}) => {

  const productsStore: ProductsStore = useLocalObservable(() => {
    const url = new URL(window.location.href);

    return new ProductsStore({
      title: url.searchParams.get('title') || undefined,
      categoryId: url.searchParams.get('categoryId') || undefined,
      page: Number(url.searchParams.get('page')) || undefined,
      limit,
    });
  });

  return(
    <ProductsStoreContext.Provider value={productsStore}>
      {children}
    </ProductsStoreContext.Provider>
  );
};

export default ProductsStoreProvider;
