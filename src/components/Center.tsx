import React from 'react';
import { View, ViewProps } from 'react-native';

const Center: React.FC<ViewProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <View
      {...props}
      className={`flex-1 items-center justify-center ${className}`}
    >
      {children}
    </View>
  );
};

export { Center };
