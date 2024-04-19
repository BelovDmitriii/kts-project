import { ProductType } from '../../../types/types';
import Text from '../../Text';
import styles from '../Cardlist.module.scss';

type CardlistProps = {
  products?: ProductType[];
  textContent: string;
}

const CardlistTitle: React.FC<CardlistProps> = ({products, textContent}) => {
  return (
    <section className={styles.cardlist_wrapper}>
      <Text
        view='p-32'
        weight='bold'
        children={textContent}
        color='primary'
      />
      {(textContent === 'Total Product') && products && <Text
        view='p-20'
        weight='bold'
        children={products.length}
        color='accent'
      />}
    </section>
  )
}

export default CardlistTitle