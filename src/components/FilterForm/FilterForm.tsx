import Input from '../Input';
import ArrowDownIcon from '../icons/ArrowDownIcon';
import styles from './FilterForm.module.scss';

const FilterForm = () => {
  return (
    <section className={styles.filter_container}>
      <Input
      value='Filter'
      onChange={(value: string) => console.log(value)}
      afterSlot={<ArrowDownIcon className='test'/>}
    />
    </section>
  )
}

export default FilterForm