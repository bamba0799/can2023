import openMap from 'react-native-open-maps';

export function launchMap(location: string) {
  const [latitude, longitude] = location.split(', ');
  openMap({
    latitude: parseFloat(latitude),
    longitude: parseFloat(longitude),
    zoom: 50,
    waypoints: [],
  });
}
