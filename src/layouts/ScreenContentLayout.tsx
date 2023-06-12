import React from 'react';
import { ScrollView, ScrollViewProps } from 'react-native';

interface ScreenContentLayoutProps extends ScrollViewProps {
  children: React.ReactNode;
}

const ScreenContentLayout: React.FC<ScreenContentLayoutProps> = ({
  children,
  ...props
}) => {
  return (
    <ScrollView
      contentContainerStyle={{
        padding: 16,
        flex: 1,
      }}
      {...props}
    >
      {children}
    </ScrollView>
  );
};

export { ScreenContentLayout };
