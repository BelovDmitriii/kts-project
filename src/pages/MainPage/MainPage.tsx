import Cardlist from 'components/Cardlist';
import FilterForm from 'components/FilterForm';
import Overview from 'components/Overview';
import Pagination from 'components/Pagination';
import SearchForm from 'components/SearchForm/SearchForm';
import styles from './MainPage.module.scss';

const PRODUCTS_COUNT = 9;

const MainPage = () => {

  return(
    <section className={styles.mainpage__wrapper}>
      <Overview />
      <SearchForm />
      <FilterForm />
      <Cardlist amount={PRODUCTS_COUNT} title="Total Product" />
      <Pagination />
    </section>
  );
}

export default MainPage;