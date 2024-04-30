import React from 'react';
import Icon, { IconProps } from 'components/icons/Icon';

const withIconWrapper = (WrappedComponent: React.FC<IconProps>) => {
  const WithIconWrapper: React.FC<IconProps> = (props) => {
    return(
      <Icon {...props}>
        <WrappedComponent {...props} />
      </Icon>
    );
  };
  return WithIconWrapper;
};

export default withIconWrapper;
