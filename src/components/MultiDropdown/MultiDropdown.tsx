import React, { useEffect } from 'react';
import './MultiDropdown.css';
import Input from '../Input';
import ArrowDownIcon from '../icons/ArrowDownIcon';

export type Option = {
  /** Ключ варианта, используется для отправки на бек/использования в коде */
  key: string;
  /** Значение варианта, отображается пользователю */
  value: string;
};

/** Пропсы, которые принимает компонент Dropdown */
export type MultiDropdownProps = {
  className?: string;
  /** Массив возможных вариантов для выбора */
  options: Option[];
  /** Текущие выбранные значения поля, может быть пустым */
  value: Option[];
  /** Callback, вызываемый при выборе варианта */
  onChange: (value: Option[]) => void;
  /** Заблокирован ли дропдаун */
  disabled?: boolean;
  /** Возвращает строку которая будет выводится в инпуте. В случае если опции не выбраны, строка должна отображаться как placeholder. */
  getTitle: (value: Option[]) => string;
};

const MultiDropdown: React.FC<MultiDropdownProps> = ({className, options, value, onChange, disabled=false, getTitle}) => {

  const[inputText, setInputText] = React.useState('');
  const[isOpen, setIsOpen] = React.useState(false);
  const dropDown = React.useRef<HTMLDivElement>(null);
  const inputElement = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log('setInputText 1', getTitle(value));
    if (!isOpen && value.length > 0) setInputText(getTitle(value));
  }, [value, getTitle,isOpen])

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if(isOpen && dropDown.current && !dropDown.current.contains(event.target as Node)) {
        setIsOpen(false);
        setInputText(getTitle(value));
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  },[isOpen, value, getTitle]);

  React.useEffect(() => {
    if (disabled) {
      setIsOpen(false);
    }
  }, [disabled]);

  const handleInputChange = (inputValue: string) => {

    const regex = new RegExp(getTitle(value));

    setInputText(inputValue.replace(regex, ''))
  };

  const openDropdown = () => {
    if(!disabled && !isOpen) {
      setInputText('');
      setIsOpen(true);
    }
  }

  const handleOptionClick = (option: Option) => {

    const index = value.findIndex(item => item.key === option.key);
    if(index === -1){
      onChange([...value, option]);
    } else {
      const updatedValue = [...value];
      updatedValue.splice(index, 1);
      onChange(updatedValue);
    }
    inputElement.current && inputElement.current.focus()
  };

  const filteredOptions = options.filter(option => option.value.toLowerCase().includes(inputText.toLowerCase()));

  return(
    <div
      ref={dropDown}
      className={`dropdown-container ${className}`}
    >
      <Input
        ref={inputElement}
        className='dropdown-input'
        value={inputText}
        onChange={handleInputChange}
        disabled={disabled}
        afterSlot={<ArrowDownIcon className="input-icon" color='secondary'/>}
        placeholder={getTitle(value)}
        onClick={(event) => {
          event.preventDefault();
          openDropdown()
        }}
       />
      {isOpen && (
        <ul className="dropdown-menu">
        {filteredOptions.map((option) => (
          <li
            className='dropdown-menu-element'
            key={option.key}
            style={{ cursor: 'pointer'}}
            onClick={() => handleOptionClick(option)}
          >
            <div className='dropdown-menu-input' style={{ color: value.some(item => item.key === option.key) ? 'var(--loader-bg)': undefined }}>
              <span className='dropdown-menu-item'>{option.value}</span>
            </div>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
};

export default MultiDropdown;
