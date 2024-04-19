import React from 'react';
import styles from './Input.module.scss';

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
> & {
  /** Значение поля */
  value: string;
  /** Callback, вызываемый при вводе данных в поле */
  onChange: (value: string) => void;
  /** Слот для иконки справа */
  afterSlot?: React.ReactNode;
  className?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const{ value, onChange, afterSlot, className, ...rest} = props;

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onChange(evt.target.value);
  };

    return (
      <div className={`${styles.input_container} ${className ? styles[className] : ''}`}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className={styles.input_field}
          ref={ref}
          {...rest}
        />
        {afterSlot && <div className={styles.input_icon}>{afterSlot}</div>}
      </div>
  );
});

export default Input;
