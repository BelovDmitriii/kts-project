import React from 'react';
import Text from '../Text';
import styles from './Card.module.scss';
import classNames from 'classnames';

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

const Card: React.FC<CardProps> = ({className, image, captionSlot, title, subtitle, contentSlot, onClick, actionSlot}) => {

  return (
    <div className={classNames(styles.card_container, className)} onClick={onClick}>
        <img className={styles.card_image} src={image} alt="Product" />
      <div className={styles.card_content}>
        {captionSlot && (
          <div className={styles.card_caption}>
            {captionSlot}
          </div>)
        }
        <div className={styles.card_title}>
          <Text view="p-20" maxLines={2}>{title}</Text>
        </div>
        <div className={styles.card_description}>
          <Text view="p-16" maxLines={3}>{subtitle}</Text>
        </div>
        <div className={styles.card_footer}>
          {contentSlot ? <div className={styles.card_content_slot}>{contentSlot}</div> : <div></div>}
          {actionSlot && <div>{actionSlot}</div>}
        </div>
      </div>
    </div>
  );
}

export default Card;
