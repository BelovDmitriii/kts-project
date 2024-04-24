import Button from '../Button';
import Text from '../Text';
import classNames from 'classnames';
import ArrowLeftIcon from 'components/icons/ArrowLeftIcon';
import ArrowRightIcon from 'components/icons/ArrowRightIcon';
import styles from './CurrentCard.module.scss';

export type CurrentCardProps = {
  className?: string,
  image: string;
  captionSlot?: React.ReactNode;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  contentSlot?: React.ReactNode;
  onClick?: React.MouseEventHandler;
};

const CurrentCard: React.FC<CurrentCardProps> = (props) => {

  const {className, image, captionSlot, title, subtitle, contentSlot, onClick} = props;

  return (
    <div className={classNames(styles.currentcard__container, className && styles[className])} onClick={onClick}>
      <div className={styles.currentcard__header}>
        <img className={styles.currentcard__image} src={image} alt="Product" />
        <div className={`${styles.arrow} ${styles.arrow__left}`}>
          <ArrowLeftIcon width={31} height={31} color='white' />
        </div>
        <div className={`${styles.arrow} ${styles.arrow__right}`}>
          <ArrowRightIcon width={31} height={31} color='white' />
        </div>
      </div>
      <div className={styles.currentcard__content}>
        {captionSlot && (
          <Text
            className={styles.currentcard__caption}
            view='p-14'
            weight='medium'
            color='secondary'
          >
            {captionSlot}
          </Text>
        )}
        <div className={styles.currentcard__title}>
          <Text view="title" weight='bold' maxLines={2}>
            {title}
          </Text>
        </div>
        <Text
          className={styles.currentcard__description}
          view="p-16"
          maxLines={3}
          color='secondary'
        >
          {subtitle}
        </Text>
        <div className={styles.currentcard__footer}>
          {contentSlot && (
            <Text
              className={styles.currentcard__content_slot}
              view='title'
              weight='bold'
              color='primary'
            >
              {contentSlot}
            </Text>
            )}
            <div className={styles.currentcard__actions}>
              <Button children='Byu Now'/>
              <Button children='Add to Cart' className={styles.add_to_cart_button} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentCard;