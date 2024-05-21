import Text from 'components/Text';
import styles from '../Cardlist.module.scss';

type CardlistProps = {
  count?: number;
  textContent: string;
}

const CardlistTitle: React.FC<CardlistProps> = ({count, textContent}) => {
  const isShowText = (textContent === 'Total Product') && count;

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
        children={count}
        color="accent"
      />}
    </section>
  )
}

export default CardlistTitle;