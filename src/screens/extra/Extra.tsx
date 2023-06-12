import { ExtraStack } from '@navigation/app/home/extra';
import { HomeTabsParamList } from '@navigation/app/home/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const Extra: React.FC<
  NativeStackScreenProps<HomeTabsParamList, 'Home/Extra'>
> = () => {
  return <ExtraStack />;
};

export default Extra;
