// FilterForm.tsx
import { observer } from 'mobx-react-lite';
import { useLocalStore } from 'mobx-react-lite';
import FilterStore from 'store/FilterStore';
// import productsStore from 'store/ProductsStore';
import MultiDropdown, { Option } from 'components/MultiDropdown';
import styles from './FilterForm.module.scss';
import React from 'react';

const FilterForm = observer(() => {
  const filterStore = useLocalStore(() => new FilterStore());

  React.useEffect(() => {
    filterStore.fetchCategories();
  },[filterStore]);

  const handleChange = (values: Option[]) => {
    filterStore.setFilterByCategory(values)
  }

  const options = filterStore.setFilterByCategory;
  const values = filterStore.filterByCategories;

  return (
    <section className={styles.filter_container}>
      <MultiDropdown
        options={options}
        value={values}
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
});

export default FilterForm;
