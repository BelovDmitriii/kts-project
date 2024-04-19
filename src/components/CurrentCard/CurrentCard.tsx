import Button from '../Button';
import Text from '../Text';
import styles from './CurrentCard.module.scss';
import classNames from 'classnames';

export type CurrentCardProps = {
  className?: string,
  image: string;
  captionSlot?: React.ReactNode;
  title: React.ReactNode;
  /** Описание карточки */
  subtitle: React.ReactNode;
  /** Содержимое карточки (футер/боковая часть), может быть пустым */
  contentSlot?: React.ReactNode;
  /** Клик на карточку */
  onClick?: React.MouseEventHandler;
};

const CurrentCard: React.FC<CurrentCardProps> = (props) => {

  const {className, image, captionSlot, title, subtitle, contentSlot, onClick} = props;

  return (
    <div className={classNames(styles.currentcard_container, className && styles[className])} onClick={onClick}>
      <div className={styles.currentcard_header}>
        <img className={styles.currentcard_image} src={image} alt="картиночка" />
      </div>
      <div className={styles.currentcard_content}>
        {captionSlot && (
          <Text
            className={styles.currentcard_caption}
            view='p-14'
            weight='medium'
            color='secondary'
          >
            {captionSlot}
          </Text>
        )}
        <div className={styles.currentcard_title}>
          <Text view="title" maxLines={2}>
            {title}
          </Text>
        </div>
        <Text
          className={styles.currentcard_description}
          view="p-16"
          maxLines={3}
          color='secondary'
        >
          {subtitle}
        </Text>
        <div className={styles.currentcard_footer}>
          {contentSlot && (
            <Text
              className={styles.currentcard_content_slot}
              view='p-18'
              weight='bold'
              color='primary'
            >
              {contentSlot}
            </Text>
            )}
            <div className={styles.currentcard_actions}>
              <Button children='Byu Now'/>
              <Button children='Add to Cart' className='add_to_cart_button' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentCard;