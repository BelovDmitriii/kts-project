export { default } from './ProductsStore';
import ProductsStore from 'store/ProductsStore';
import { createContextLocalStore } from 'utils/createContextLocalStore';

const { Provider, useStore } = createContextLocalStore(ProductsStore);

export { Provider as ProductsStoreProvider, useStore as useProductsStore };
