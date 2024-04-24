import { options } from './config';
import MultiDropdown from '../MultiDropdown';
import { Option } from '../MultiDropdown';

import styles from './FilterForm.module.scss';

const FilterForm = () => {
  return (
    <section className={styles.filter_container}>
      <MultiDropdown
        options={options}
        value={[{ key: 'first', value: 'First Filter' }]}
        onChange={(value: Option[]) => console.log('Выбрано:', value)}
        getTitle={() => ''}
      />
    </section>
  )
}

export default FilterForm