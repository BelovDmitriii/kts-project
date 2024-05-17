import { useLocalObservable } from 'mobx-react-lite';
import { createContext, ReactNode } from 'react';
import ProductsStore from 'store/ProductsStore';


export const ProductsStoreContext = createContext<ProductsStore>(null!);

const ProductsStoreProvider = ({ children, limit }: {children: ReactNode, limit: number}) => {

  const productsStore: ProductsStore = useLocalObservable(() => {
    const url = new URL(window.location.href);

    return new ProductsStore({
      title: url.searchParams.get('title'),
      categoryId: url.searchParams.get('categoryId'),
      page: url.searchParams.get('page'),
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
