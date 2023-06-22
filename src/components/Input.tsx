import React from 'react';
import {
  View,
  Text,
  TextInput,
  ViewProps,
  TextProps,
  TextInputProps,
} from 'react-native';

type InputProps = {
  label?: string;
  containerProps?: ViewProps;
  labelProps?: TextProps;
  textInputProps?: TextInputProps;
  editable?: boolean;
};

const Input: React.FC<InputProps> = ({
  label,
  containerProps,
  labelProps,
  textInputProps,
  editable = true,
}) => {
  return (
    <View
      className="flex-1 space-y-1"
      {...containerProps}
    >
      {label ? (
        <Text
          className="text-xs"
          {...labelProps}
        >
          {label}
        </Text>
      ) : null}
      <TextInput
        placeholder=""
        className={`rounded-lg border border-gray-300 p-2.5 text-sm leading-[18px] text-gray-800 ${
          editable ? 'bg-white' : 'bg-gray-200'
        } ${textInputProps?.className}`}
        autoCapitalize="none"
        numberOfLines={1}
        editable={editable}
        {...textInputProps}
      />
    </View>
  );
};

export { Input };
