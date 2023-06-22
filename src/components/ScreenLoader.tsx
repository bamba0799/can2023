import { ActivityIndicator, View } from 'react-native';


const ScreenLoader = () => {
  return (
    <View className="absolute left-0 top-0 z-[999] h-screen w-full items-center justify-center bg-white">
      <ActivityIndicator />
    </View>
  );
};

export { ScreenLoader };
