import Button from 'components/Button';
import Input from 'components/Input';
import styles from './SearchForm.module.scss';
import SearchStore from 'store/SearchStore';
import { useLocalStore } from 'utils/useLocalStore';
import { observer } from 'mobx-react-lite';

const SearchForm: React.FC = () => {
  const searchStore = useLocalStore(() => new SearchStore());

  return (
    <section className={styles.search_form}>
      <Input
        placeholder="Search product"
        value={searchStore.searchText}
        onChange={(value: string) => searchStore.setSearchText(value)}
        afterSlot={<Button onClick={() => searchStore.handleSearch()}>Find now</Button>}
      />
    </section>
  )
};

export default observer(SearchForm);
