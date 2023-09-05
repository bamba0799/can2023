import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export function useHideBottomTab() {
  const navigation = useNavigation();

  const hideParentBottomTab = () => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
  };

  const restoreBottomTab = () => {
    navigation.getParent()?.setOptions({
      tabBarStyle: undefined,
    });
  };

  useEffect(() => {
    hideParentBottomTab();
    return () => restoreBottomTab();
  }, [navigation]);
}
