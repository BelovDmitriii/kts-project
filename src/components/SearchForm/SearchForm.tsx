import { useState } from 'react';
import filterStore from 'store/FilterStore';
import Button from 'components/Button';
import Input from 'components/Input';
import styles from './SearchForm.module.scss';


const SearchForm: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    filterStore.setSearchText(searchValue);
  }

  return (
    <section className={styles.search_form}>
      <Input
        placeholder="Search product"
        value={searchValue}
        onChange={(value: string) => setSearchValue(value)}
        afterSlot={<Button onClick={handleSearch}>Find now</Button>}
      />
    </section>
  )
}

export default SearchForm;
