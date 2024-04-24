import React from 'react';
import SpinnerIcon from '../icons/SpinnerIcon';
import classNames from 'classnames';
import styles from './Loader.module.scss';

export type LoaderProps = {
    size?: 's' | 'm' | 'l';
    className?: string;
    fill?: 'primary' | 'secondary' | 'accent' | 'disabled';
};

const Loader: React.FC<LoaderProps> = ({size = 'l', className, fill}) => {
  return(
    <SpinnerIcon
      className={classNames(className, styles.loader, styles[`loader_size_${size}`])}
      color={fill}
    />
  );
}

export default Loader;
