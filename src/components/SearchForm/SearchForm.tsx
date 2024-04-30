import Button from '../Button';
import Input from '../Input';
import styles from './SearchForm.module.scss';

const SearchForm = () => {
  return (
    <section className={styles.search_form}>
      <Input
        placeholder="Search product"
        onChange={(value: string) => console.log(value)}
        afterSlot={<Button>Find now</Button>}
      />
    </section>
  )
}

export default SearchForm;