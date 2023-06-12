import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeTabsParamList } from '@navigation/app/home/types';
import { HomeStack } from '@navigation/app/home/home';

const Home: React.FC<
  NativeStackScreenProps<HomeTabsParamList, 'Home/Home'>
> = ({ navigation, route }) => {
  return <HomeStack />;
};

export default Home;
