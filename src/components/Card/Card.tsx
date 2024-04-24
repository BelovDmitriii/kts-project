import React from 'react';
import Text from '../Text';
import classNames from 'classnames';
import styles from './Card.module.scss';

export type CardProps = {
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
    /** Слот для действия */
    actionSlot?: React.ReactNode;
};

const CardCpmponent: React.FC<CardProps> = ({className, image, captionSlot, title, subtitle, contentSlot, onClick, actionSlot}) => {

  return (
    <div className={classNames(styles.card__container, className)} onClick={onClick}>
        <img className={styles.card__image} src={image} alt="Product" />
      <div className={styles.card__content}>
        {captionSlot && (
          <div className={styles.card__caption}>
            <Text weight='medium' view='p-14'>{captionSlot}</Text>
          </div>)
        }
        <div className={styles.card__title}>
          <Text view="p-20" weight='medium' maxLines={2}>{title}</Text>
        </div>
        <div className={styles.card__description}>
          <Text view="p-16" maxLines={3}>{subtitle}</Text>
        </div>
        <div className={styles.card__footer}>
          {contentSlot && <div className={styles.card__content_slot}>
            <Text view='p-18'  weight='bold'>{contentSlot}</Text>
          </div>}
          {actionSlot && <div>{actionSlot}</div>}
        </div>
      </div>
    </div>
  );
}

const Card = React.memo(CardCpmponent);

export default Card;
