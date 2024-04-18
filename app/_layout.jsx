import { Stack } from "expo-router"
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, fontError] = useFonts({
    'SF-Black': require('../assets/fonts/SF-Black.otf'),
    'SF-Bold': require('../assets/fonts/SF-Bold.otf'),
    'SF-Heavy': require('../assets/fonts/SF-Heavy.otf'),
    'SF-Light': require('../assets/fonts/SF-Light.otf'),
    'SF-Medium': require('../assets/fonts/SF-Medium.otf'),
    'SF-Regular': require('../assets/fonts/SF-Regular.otf'),
    'SF-Semibold': require('../assets/fonts/SF-Semibold.otf'),
    'SF-Thin': require('../assets/fonts/SF-Thin.otf'),
    'SF-Ultralight': require('../assets/fonts/SF-Ultralight.otf'),
  });

  useEffect(() => {
    if (fontError) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
      {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }}/> */}
    </Stack>
  )
}

export default RootLayout