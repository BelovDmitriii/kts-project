import Cardlist from '../../components/Cardlist';
import FilterForm from '../../components/FilterForm';
import Overview from '../../components/Overview';
import Pagination from '../../components/Pagination';
import SearchForm from '../../components/SearchForm/SearchForm';
import styles from './MainPage.module.scss';

const MainPage = () => {
  
  return(
    <section className={styles.mainpage_wrapper}>
      <Overview />
      <SearchForm />
      <FilterForm />
      <Cardlist amount={9} title='Total Product' />
      <Pagination />
    </section>
  );
}

export default MainPage;