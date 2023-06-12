import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export const useAsyncStorage = (key: string) => {
  const [data, setData] = useState<string | null>(null);

  const getAsyncStorageData = async () => {
    let value = await AsyncStorage.getItem(key);
    if (value) value = JSON.parse(value);
    setData(value);
  };

  useEffect(() => {
    getAsyncStorageData();
  }, [key]);

  return [data];
};
