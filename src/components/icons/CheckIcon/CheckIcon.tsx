import * as React from 'react'
import Icon, { IconProps} from '../Icon';

const CheckIcon: React.FC<IconProps> = ({color, width=24, height=24, className, ...rest}) => {
  let colorCss = 'var(--icon-color-primary)';

  switch(color) {
    case 'primary': {
      colorCss = 'var(--icon-color-primary)';
      break;
    }
    case 'secondary': {
      colorCss = 'var(--icon-color-secondary)';
      break;
    }
    case 'accent': {
      colorCss = 'var(--icon-color-accent)';
      break;
    }
    case 'disabled': {
      colorCss = 'var(--input-text-disabled)'
    }
  }
  return(
    <Icon color={color} className={className}>
      <svg className={className} width={width} height={height} {...rest} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 11.6129L9.87755 18L20 7" stroke={colorCss} strokeWidth="2" />
      </svg>
    </Icon>
  );
}

export default CheckIcon;
