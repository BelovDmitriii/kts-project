import React from 'react';
import Loader from '../Loader';
import Text from 'components/Text';
import classNames from 'classnames';
import styles from './Button.module.scss';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
React.PropsWithChildren<{
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
}>;

const Button: React.FC<ButtonProps> = ({ className, children, loading, disabled=false, ...props}) => {
  return(
    <button
      className={classNames( styles.button, disabled && styles.button__disabled, className )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader className={styles.button__loader} size='s' />}
      <Text tag='span' view='button'>{children}</Text>
    </button>
  )
}

export default Button;
