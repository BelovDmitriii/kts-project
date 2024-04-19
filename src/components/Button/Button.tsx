import React from 'react';
import Loader from '../Loader';
import classNames from 'classnames';
import styles from './Button.module.scss';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({children, loading, className, ...rest}) => {
  return(
    <button
      className={classNames(className && styles[className], styles.button, {[styles.button_loading]: loading} )}
      onClick={() => console.log('Письмо отправлено')}
      disabled={loading}
      {...rest}
    >
      {loading && <Loader size='s' fill='var(--button-primary-text)' className={styles.button_loader}/>}
      <span>{children}</span>
    </button>
  )
}

export default Button;
