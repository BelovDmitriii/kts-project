import React from 'react';
import Loader from '../Loader';
import classNames from 'classnames';
import styles from './Button.module.scss';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ className, children, loading, disabled=false, ...props}) => {
  return(
    <button
      className={classNames( styles.button, className && styles[className], disabled && styles.button_disabled )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader className={styles.button__loader} size='s' />}
      <span>{children}</span>
    </button>
  )
}

export default Button;
