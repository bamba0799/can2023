import { GoodDealsStack } from '../../navigation/app/home/goodDeals';
import { HomeTabsParamList } from '@navigation/app/home/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const GoodDeals: React.FC<
  NativeStackScreenProps<HomeTabsParamList, 'Home/GoodDeals'>
> = () => {
  return <GoodDealsStack />;
};

export default GoodDeals;
