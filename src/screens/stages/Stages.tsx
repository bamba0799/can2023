import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeTabsParamList } from '@navigation/app/home/types';
import { StagesStack } from '@navigation/app/home/stages';

const Stages: React.FC<
  NativeStackScreenProps<HomeTabsParamList, 'Home/Stages'>
> = () => {
  return <StagesStack />;
};

export default Stages;
