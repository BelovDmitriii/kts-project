import React from 'react';
import { observer } from 'mobx-react-lite';
import Button from 'components/Button';
import Input from 'components/Input';
import styles from './SearchForm.module.scss';
import { useProductsStore } from 'store/ProductsStore';

const SearchForm: React.FC = () => {

  const productsStore = useProductsStore();

  return (
    <section className={styles.search_form}>
      <Input
        placeholder="Search product"
        value={productsStore.search.searchText}
        onChange={(value: string) => productsStore.search.setSearchText(value)}
        afterSlot={<Button loading={productsStore.meta.isLoading}>Find now</Button>}
      />
    </section>
  )
};

export default observer(SearchForm);
