import { ProductType } from 'types/types';
import Text from 'components/Text';
import styles from '../Cardlist.module.scss';

type CardlistProps = {
  products?: ProductType[];
  textContent: string;
}

const CardlistTitle: React.FC<CardlistProps> = ({products, textContent}) => {
  const isShowText = (textContent === 'Total Product') && products;

  return (
    <section className={styles.cardlist__wrapper}>
      <Text
        view="p-32"
        weight="bold"
        children={textContent}
        color="primary"
      />
      {isShowText && <Text
        view="p-20"
        weight="bold"
        children={products.length}
        color="accent"
      />}
    </section>
  )
}

export default CardlistTitle;