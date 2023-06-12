import call from 'react-native-phone-call';

export async function makeCall(number: string) {
  await call({
    number,
    prompt: false,
    skipCanOpen: true,
  });
}
