import AsyncStorage from '@react-native-async-storage/async-storage';

export async function persistData(key: string, value: any) {
  const valueAsString = JSON.stringify(value);
  await AsyncStorage.setItem(key, valueAsString);
}
