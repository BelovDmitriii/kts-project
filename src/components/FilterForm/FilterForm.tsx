import { observer } from 'mobx-react-lite';
import filterStore from 'store/FilterStore';
import MultiDropdown, { Option } from 'components/MultiDropdown';
import styles from './FilterForm.module.scss';


const FilterForm = observer(() => {

  const handleChange = (values: Option[]) => {
    filterStore.setFilterByCategories(values)
  }

  const options = filterStore.categories;
  const values = filterStore.filterByCategories;

  return (
    <section className={styles.filter_container}>
      <MultiDropdown
        options={options}
        value={values}
        onChange={handleChange}
        getTitle={(values: Option[]) => `Сategories selected: ${values.length}`}
      />
    </section>
  )
});

export default FilterForm;
