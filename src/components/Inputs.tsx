import React, { useState } from "react";
import { View, TextInput, Pressable, TextInputProps } from "react-native";
import { HideIcon, ShowIcon } from "./Icons";

interface PasswordInputProps extends TextInputProps {
  showPassword?: boolean;
}

const RegularInput: React.FC<TextInputProps> = ({
  placeholder = "...",
  placeholderTextColor = "#8F8F8F",
  className = "",
  ...props
}) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View
      className={`flex-row items-center rounded-lg border p-3 ${
        isFocus ? "border-primary" : "border-gray-400"
      }`}
    >
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        className={`flex-1 text-base leading-[18px] ${className}`}
        autoCapitalize="none"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        {...props}
      />
    </View>
  );
};

const PasswordInput: React.FC<PasswordInputProps> = ({
  placeholder = "Minimun 8 caractères",
  placeholderTextColor = "#8F8F8F",
  className = "",
  ...props
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  function toggleShowIcon() {
    setPasswordVisible(!passwordVisible);
  }

  return (
    <View
      className={`flex-row items-center rounded-lg border p-3 ${
        isFocus ? "border-sky-600" : "border-primary-gray-light"
      }`}
    >
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        className={`flex-1 text-base leading-[18px] ${className}`}
        secureTextEntry={!passwordVisible}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        {...props}
      />

      <Pressable onPress={toggleShowIcon}>
        {passwordVisible ? (
          <HideIcon
            width={18}
            height={18}
            fill={isFocus ? "rgb(2 132 199)" : "#595959"}
          />
        ) : (
          <ShowIcon
            width={18}
            height={18}
            fill={isFocus ? "rgb(2 132 199)" : "#595959"}
          />
        )}
      </Pressable>
    </View>
  );
};

export { RegularInput, PasswordInput };
