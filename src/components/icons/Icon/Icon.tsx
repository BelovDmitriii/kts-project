import * as React from 'react';
import styles from './Icon.module.scss';

export type IconProps = React.SVGAttributes<SVGElement> & {
    className?: string;
    color?: 'primary' | 'secondary' | 'accent' | 'disabled';
};

const Icon: React.FC<React.PropsWithChildren<IconProps>> = ({children, className, color}) => {

  return (
    <div className={`${className ? styles[className] : ''}`} color={color}>
      {children}
    </div>
  );
}

export default Icon;
