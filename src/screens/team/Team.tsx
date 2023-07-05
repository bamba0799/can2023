import { ScreenContentLayout } from '@layouts/ScreenContentLayout';
import { useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { Header } from '@components/Header';

export default function Team() {
  const { params: team } = useRoute();
  const {
    name: team_name,
    code: team_code,
    flag: team_flag,
    group: team_group,
    players: team_players,
  } = team as any;

  return (
    <View className="flex-1">
      <Header
        title={team_name}
        showProfile={false}
        showBackIcon
      />
      <ScreenContentLayout>
        <Text>TODO...</Text>
      </ScreenContentLayout>
    </View>
  );
}
