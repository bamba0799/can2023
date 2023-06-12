import React from 'react';
import { Text, TouchableOpacityProps } from 'react-native';
import { Button } from './Button';

interface BadgeProps extends TouchableOpacityProps {
  title: string;
  isSelected?: boolean;
}

const Badge: React.FC<BadgeProps> = ({
  title,
  isSelected = false,
  ...props
}) => {
  return (
    <Button
      className={`rounded-full border border-primary px-3 py-[6px] ${
        isSelected ? 'bg-primary' : 'bg-transparent'
      }`}
      {...props}
    >
      <Text
        className={`font-[medium] ${
          isSelected ? 'text-white' : 'text-primary'
        }`}
      >
        {title}
      </Text>
    </Button>
  );
};

export { Badge };
