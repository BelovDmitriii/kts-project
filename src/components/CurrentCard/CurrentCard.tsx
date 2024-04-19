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
        <img className={styles.currentcard_image} src={image} alt="Product" />
        <div className={`${styles.arrow} ${styles.arrow_left}`}>
          <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.043 25.6126L10.9561 17.5258C10.0011 16.5708 10.0011 15.008 10.9561 14.0529L19.043 5.96613" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className={`${styles.arrow} ${styles.arrow_right}`}>
          <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.957 25.6126L20.0439 17.5258C20.9989 16.5708 20.9989 15.008 20.0439 14.0529L11.957 5.96613" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
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