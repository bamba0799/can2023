import { ScrollView, ScrollViewProps } from 'react-native';

interface ScreenContentLayoutProps extends ScrollViewProps {
  children: React.ReactNode;
}

export const ScreenContentLayout: React.FC<ScreenContentLayoutProps> = ({
  children,
  ...props
}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingTop: 12,
        paddingBottom: 32,
      }}
      {...props}
    >
      {children}
    </ScrollView>
  );
};


