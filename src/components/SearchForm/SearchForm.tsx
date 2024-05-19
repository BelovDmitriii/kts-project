import React from 'react';
import { observer } from 'mobx-react-lite';
import { ProductsStoreContext } from 'pages/MainPage/ProductsStoreProvider';
import Button from 'components/Button';
import Input from 'components/Input';
import styles from './SearchForm.module.scss';

const SearchForm: React.FC = () => {

  const productsStore = React.useContext(ProductsStoreContext);

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
