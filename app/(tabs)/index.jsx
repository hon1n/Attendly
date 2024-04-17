import { View, Text, StyleSheet } from 'react-native'
import { Link } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

const HomePage = () => {
  const [fontsLoaded, fontError] = useFonts({
    'SF-Black': require('../../assets/fonts/SF-Black.otf'),
    'SF-Bold': require('../../assets/fonts/SF-Bold.otf'),
    'SF-Heavy': require('../../assets/fonts/SF-Heavy.otf'),
    'SF-Light': require('../../assets/fonts/SF-Light.otf'),
    'SF-Medium': require('../../assets/fonts/SF-Medium.otf'),
    'SF-Regular': require('../../assets/fonts/SF-Regular.otf'),
    'SF-Semibold': require('../../assets/fonts/SF-Semibold.otf'),
    'SF-Thin': require('../../assets/fonts/SF-Thin.otf'),
    'SF-Ultralight': require('../../assets/fonts/SF-Ultralight.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Link href="(tabs)/profile/" style={{ fontFamily: "SF-Medium", fontSize: 30, color: "#2469FF" }}>перейти в профиль</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF"
  },
})

export default HomePage