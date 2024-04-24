import * as React from 'react'
import classNames from 'classnames';
import styles from './Text.module.scss';

export type TextProps = React.PropsWithChildren<{
    /** Дополнительный класс */
    className?: string;
    /** Стиль отображения */
    view?: 'title' | 'button' | 'p-32' | 'p-20' | 'p-18' | 'p-16' | 'p-14';
    /** Html-тег */
    tag?:  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p' | 'span';
    /** Начертание шрифта */
    weight?: 'normal' | 'medium' | 'bold';
    /** Контент */
    children: React.ReactNode;
    /** Цвет */
    color?: 'primary' | 'secondary' | 'accent';
    /** Максимальное кол-во строк */
    maxLines?: number;
}>;

const Text: React.FC<TextProps> = ({className, view='p-14', tag: Tag='p', weight, children, color, maxLines}) => {

  return (
    <Tag className={classNames(
      styles[`text_view_${view}`],
      weight && styles[`text_weight_${weight}`],
      color && styles[`text_color_${color}`],
      !!maxLines && styles.text_clamp,
      className
    )}  style={{ '--lines-count': maxLines } as React.CSSProperties}>
      {children}
    </Tag>
  )
}

export default Text;
