import React from "react";
import { GestureResponderEvent, TouchableOpacity } from "react-native";

type RegularButtonProps = {
  px?: number;
  py?: number;
  gap?: number;
  background?: string;
  rounded?: boolean;
  children: React.ReactNode;
  onPress?(e: GestureResponderEvent): void | null | undefined | Promise<void>;
};

const RegularButton: React.FC<RegularButtonProps> = ({
  px = 16,
  py = 12,
  gap = 4,
  background = "bg-primary-orange",
  rounded = false,
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`flex-row items-center justify-center ${background}`}
      style={{
        columnGap: gap,
        paddingHorizontal: px,
        paddingVertical: py,
        borderRadius: rounded ? 9999 : 8,
      }}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

export { RegularButton };
