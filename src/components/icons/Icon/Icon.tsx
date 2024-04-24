import * as React from 'react';
import classNames from 'classnames';
import styles from './Icon.module.scss';

export type IconProps = React.SVGAttributes<SVGElement> & {
    className?: string;
    color?: 'primary' | 'secondary' | 'accent' | 'white' | 'disabled';
};

const Icon: React.FC<React.PropsWithChildren<IconProps>> = ({
  children,
  className,
  color,
  width = 24,
  height = 24,
  ...props
}) => {

  return (
    <svg
      className={classNames(styles.icon, className, (color && styles[`icon_color_${color}`]))}
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      preserveAspectRatio='xMidYMid meet'
      fill='none'
      {...props}
    >
      {children}
      </svg>

  );
}

export default Icon;
