import React from 'react';
import { observer } from 'mobx-react-lite';
import MultiDropdown, { Option } from 'components/MultiDropdown';
import styles from './FilterForm.module.scss';
import { useProductsStore } from 'store/ProductsStore';

const FilterForm = () => {
  const productsStore = useProductsStore();

  const handleChange = (selectedOptions: Option[]) => {
    productsStore.filterCategory.setSelectedCategory(selectedOptions?.[0]?.key || null);
  }

  React.useEffect(() => {
    productsStore.filterCategory.fetchAllCategories();
  },[productsStore.filterCategory]);

  const options = productsStore.filterCategory.categories;
  const value = productsStore.filterCategory.selectedCategory;

  return (
    <section className={styles.filter_container}>
      <MultiDropdown
        options={options}
        value={value}
        onChange={handleChange}
        getTitle={(values: Option[]) => {
          if (values.length === 0) {
            return "";
          }
          return `Category selected: ${values[0].value}`;
        }}
      />
    </section>
  )
};

export default observer(FilterForm);
