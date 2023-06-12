import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ExtraStackParamList } from '@navigation/app/home/extra/types';
import { Center } from '@components/Center';
import { Header } from '@components/Header';
import { ScreenContentLayout } from '@layouts/ScreenContentLayout';
import { useHideBottomTab } from '@hooks/navigation';

const Profile: React.FC<
  NativeStackScreenProps<ExtraStackParamList, 'Extra/Profile'>
> = ({ navigation, route }) => {
  useHideBottomTab();

  return (
    <View className="flex-1">
      <Header
        title="Profile"
        showBackIcon
        onNavigateBack={() => navigation.navigate('Extra/Main')}
      />

      <ScreenContentLayout>
        <Center>
          <Text>{route.name}</Text>
        </Center>
      </ScreenContentLayout>
    </View>
  );
};

export { Profile };
