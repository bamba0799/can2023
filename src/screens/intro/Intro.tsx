import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppIntroSlider from 'react-native-app-intro-slider';
import slides from './data';

type IntroProps = {
  onHide: () => void;
};

const Intro = ({ onHide }: IntroProps) => {
  return (
    <View className="flex-1">
      <AppIntroSlider
        data={slides}
        keyExtractor={(item) => item.id}
        activeDotStyle={styles.active_dot}
        onDone={onHide}
        renderNextButton={() => (
          <View className=" rounded-full bg-primary p-2">
            <View className="h-[27px] w-[27px] items-center justify-center">
              <Ionicons
                name="ios-arrow-forward-outline"
                size={24}
                color="white"
              />
            </View>
          </View>
        )}
        renderDoneButton={() => (
          <View className="rounded-full bg-black px-4 py-2">
            <Text className="text-center font-[bold] text-sm leading-[27px] text-white">
              Démarrer
            </Text>
          </View>
        )}
        renderItem={({ item }) => {
          return (
            <View className="flex-1">
              <ImageBackground
                className="flex-1 items-center justify-center"
                source={require('@assets/images/intro/ellipse.png')}
                imageStyle={{ top: -32 }}
              >
                <Image
                  source={item.image}
                  className="aspect-square h-[85%]"
                />
              </ImageBackground>

              <View className="mt-12 flex-1 px-4">
                <View className="items-center">
                  <Text className="text-center font-[extraBold] text-3xl">
                    {item.id === '1' ? (
                      <Text>
                        Bienvenue sur <Text className="text-primary">Fan</Text>
                        <Text>Xp</Text>
                      </Text>
                    ) : (
                      item.title
                    )}
                  </Text>
                </View>

                <View className="mt-6">
                  <Text className="text-center text-base">{item.details}</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  active_dot: {
    backgroundColor: '#ff7900',
  },
  text_primary: {
    color: '#ff7900',
  },
});

export default Intro;
