import React from 'react';
import Input from '../Input';
import Text from '../Text';
import ArrowDownIcon from '../icons/ArrowDownIcon';
import classNames from 'classnames';
import { Option, MultiDropdownProps } from './types';
import styles from './MultiDropdown.module.scss';

const MultiDropdown: React.FC<MultiDropdownProps> = ({className, options, value, onChange, disabled, getTitle}) => {

  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const ref = React.useRef<HTMLInputElement>(null);
  const [filter, setFilter] = React.useState('');
  const [isOpened, setIsOpened] = React.useState(false);

  const open = () => {
    setIsOpened(true);
  };

  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as HTMLElement)) {
        setIsOpened(false);
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  React.useEffect(() => {
    if (isOpened) {
      setFilter('');
    }
  },[isOpened]);

  const title = React.useMemo(() => getTitle(value), [getTitle, value]);

  const isEmpty = value.length === 0;

  const filteredOptions = React.useMemo(() => {
    const str = filter.toLocaleLowerCase();

    return options.filter(
      (o) => o.value.toLocaleLowerCase().indexOf(str) === 0
    );
  }, [filter, options]);

  const selectedKeysSet = React.useMemo<Set<Option['key']>>(
    () => new Set(value.map(({ key }) => key)),
    [value]
  );

  const onSelect = React.useCallback((option: Option) => {
    if(disabled) {
      return;
    }
    if (selectedKeysSet.has(option.key)) {
      onChange([...value].filter(({ key }) => key !== option.key));
    } else {
      onChange([...value, option]);
    }

    ref.current?.focus();
  }, [disabled, onChange, value, selectedKeysSet]);

  const opened = isOpened && !disabled;

  return (
    <div
      className={classNames(className && styles[className], styles.multi_dropdown)}
      ref={wrapperRef}
    >
      <Input
        className='multi_dropdown_field'
        onClick={open}
        disabled={disabled}
        placeholder='Filter'
        value={opened ? filter : isEmpty ? '' : title}
        onChange={setFilter}
        afterSlot={<ArrowDownIcon color='secondary' />}
        ref={ref}
      />
      {opened && (
        <div className={styles.multi_dropdown__options}>
          {filteredOptions.map((option) => (
            <button
              className={classNames(
                styles.multi_dropdown__option,
                selectedKeysSet.has(option.key) && styles.multi_dropdown__option__selected
              )}
              key={option.key}
              onClick={() => onSelect(option)}
            >
              <Text view='p-16'>{option.value}</Text>
              </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiDropdown;
