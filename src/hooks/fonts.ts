import fonts from '@data/fonts';
import { useFonts } from 'expo-font';

export const useLoadFont = () => {
  return useFonts(fonts);
};
