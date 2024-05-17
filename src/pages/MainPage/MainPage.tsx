import ProductsStoreProvider from './ProductsStoreProvider';
import Cardlist from 'components/Cardlist';
import Overview from 'components/Overview';
import Pagination from 'components/Pagination';
import SearchForm from 'components/SearchForm';
import FilterForm from 'components/FilterForm';
import styles from './MainPage.module.scss';

const MainPage = () => {
  return(
    <ProductsStoreProvider limit={9}>
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
