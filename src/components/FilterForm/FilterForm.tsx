import MultiDropdown from '../MultiDropdown';
import styles from './FilterForm.module.scss';
import { Option } from '../MultiDropdown';

const FilterForm = () => {
  return (
    <section className={styles.filter_container}>
      <MultiDropdown
        options={[
          { key: 'first', value: 'First Filter' },
          { key: 'second', value: 'Second Filter' },
          { key: 'third', value: 'Third Filter' }
        ]}
        value={[{ key: 'first', value: 'First Filter' }]}
        onChange={(value: Option[]) => console.log('Выбрано:', value)}
        getTitle={() => ''}
      />
    </section>
  )
}

export default FilterForm