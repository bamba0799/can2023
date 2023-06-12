import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenContentLayout } from '@layouts/ScreenContentLayout';
import { ExtraStackParamList } from '@navigation/app/home/extra/types';
import { Header } from '@components/Header';

const Stadiums: React.FC<
  NativeStackScreenProps<ExtraStackParamList, 'Extra/Stadiums'>
> = ({ navigation, route }) => {
  return (
    <View className="flex-1">
      <Header
        title="Stades"
        showBackIcon
        onNavigateBack={navigation.goBack}
      />

      <ScreenContentLayout
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 24 }}
      >
        <Text>{route.name}</Text>
      </ScreenContentLayout>
    </View>
  );
};

export { Stadiums };
