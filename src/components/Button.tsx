import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

const Button: React.FC<TouchableOpacityProps> = ({ children, ...props }) => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.7}
    >
      {children}
    </TouchableOpacity>
  );
};

export { Button };
