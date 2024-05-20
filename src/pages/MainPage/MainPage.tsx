import ProductsStore, { ProductsStoreProvider } from 'store/ProductsStore';
import Cardlist from 'components/Cardlist';
import Overview from 'components/Overview';
import Pagination from 'components/Pagination';
import SearchForm from 'components/SearchForm';
import FilterForm from 'components/FilterForm';
import styles from './MainPage.module.scss';
import React from 'react';
import { ParamsType } from 'store/ProductsStore/ProductsStore';

const MainPage = () => {
  const productsStore = React.useMemo(() => new ProductsStore(), []);

  React.useEffect(() => {
    const defaultParams: ParamsType = {
      title: '',
      categoryId: '',
      page: 1,
    };
    productsStore.init(defaultParams);
  }, [productsStore]);

  return(
    <ProductsStoreProvider store={productsStore}>
      <section className={styles.mainpage__wrapper}>
        <Overview />
        <SearchForm/>
        <FilterForm/>
        <Cardlist title="Total Product" />
        <Pagination/>
      </section>
    </ProductsStoreProvider>
  );
};

export default MainPage;
