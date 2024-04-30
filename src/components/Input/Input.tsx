import React from 'react';
import classNames from 'classnames';
import styles from './Input.module.scss';

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
> & {
  /** Значение поля */
  value?: string;
  /** Callback, вызываемый при вводе данных в поле */
  onChange: (value: string) => void;
  /** Слот для иконки справа */
  afterSlot?: React.ReactNode;
  className?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const{ value, onChange, afterSlot, className, disabled, ...rest} = props;

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      onChange(event.target.value);
    }, [onChange]
  );

    return (
      <label className={classNames(styles.input, className && styles[className], disabled && 'input_disabled')}>
        <input
          className={styles.input_field}
          type="text"
          value={value}
          onChange={handleChange}
          disabled={disabled}
          ref={ref}
          {...rest}
        />
        {afterSlot && <div className={styles.input_after}>{afterSlot}</div>}
      </label>
  );
});

export default Input;
