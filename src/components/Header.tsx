import { Text, View, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Button } from './Button';

type HeaderProps = {
  title: string | React.FC;
  showBackIcon?: boolean;
  showProfile?: boolean;
  className?: string;
  onNavigateBack?: () => void;
  onNavigateToProfile?: () => void;
};

const Header = ({
  className,
  showProfile = true,
  onNavigateBack,
  onNavigateToProfile,
  ...props
}: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const navigateToProfile = () => {
    navigation.navigate('Extra/Profile' as never);
  };

  return (
    <View
      className={`z-[999999] flex-row items-center justify-between gap-x-4 bg-white px-4 pb-3 ${className}`}
      style={{
        paddingTop: insets.top + 12,
        shadowOpacity: 1,
        shadowColor: '#d1d5db', // bg-gray-300
        shadowOffset: {
          width: 0,
          height: 0.1,
        },
      }}
    >
      {props.showBackIcon ? (
        <Button
          onPress={onNavigateBack ?? navigation.goBack}
          className="rounded-full bg-gray-300/50 p-1.5"
        >
          <Ionicons
            name="ios-arrow-back"
            size={16}
          />
        </Button>
      ) : null}

      {typeof props.title === 'string' ? (
        <Text
          className="shrink font-[extraBold] text-lg"
          numberOfLines={1}
        >
          {props.title}
        </Text>
      ) : (
        <props.title />
      )}

      {showProfile ? (
        <Button
          onPress={onNavigateToProfile ?? navigateToProfile}
          className="h-7 w-7 items-center justify-center rounded-full"
        >
          <Image
            // TODO: Display user's profile picture when authed
            source={require('@assets/images/user.png')}
            className="h-full w-full"
            resizeMode="contain"
          />
        </Button>
      ) : null}
    </View>
  );
};

export { Header };
