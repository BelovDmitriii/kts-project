import React from 'react';
import './CheckBox.css';
import CheckIcon from '../icons/CheckIcon';


export type CheckBoxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  onChange: (checked: boolean) => void;
};

const CheckBox: React.FC<CheckBoxProps> = ({onChange, className, disabled, checked, ...rest}) => {


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;

    onChange(checked);
  }

  return (
    <label className={`checkbox-wrapper ${className} ${disabled ? 'disabled' : ''}`}>
      <input
        type="checkbox"
        onChange={handleChange}
        checked={checked}
        className="checkbox-element"
        disabled={disabled}
        {...rest}
      />
      {checked && <CheckIcon className="checkbox-icon" color={disabled ? 'disabled' : 'accent'}/>}
    </label>
  );
};

export default CheckBox;
