import * as React from 'react'
import Icon, { IconProps } from '../Icon';

const ArrowDownIcon: React.FC<IconProps> = ({color, width=24, height=24, className, ...rest}) => {
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
  }

  return(
    <Icon color={color} className={className}>
      <svg className={className} width={width} height={height} {...rest} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M2.33563 8.74741L3.66436 7.25259L12 14.662L20.3356 7.25259L21.6644 8.74741L12 17.338L2.33563 8.74741Z" fill={colorCss} />
      </svg>
    </Icon>
  )
}

export default ArrowDownIcon;
