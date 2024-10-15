import { useCallback, useRef } from 'react';
import { StatusBar, StyleSheet, View, Animated } from 'react-native';
import { useFonts } from '@expo-google-fonts/inter';
import ToastManager from 'toastify-react-native';
import * as SplashScreen from 'expo-splash-screen';
import { Home } from './src/screens';
import { theme } from './src/theme';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, error] = useFonts({
    Inter_Regular: require('./assets/fonts/Inter_18pt-Regular.ttf'),
    Inter_Bold: require('./assets/fonts/Inter_18pt-Bold.ttf'),
  });

  const fadeAnim = useRef(new Animated.Value(1)).current;

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || error) {
      await SplashScreen.hideAsync();

      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <View
      style={styles.container}
      onLayout={onLayoutRootView}
    >
      <StatusBar barStyle="light-content" translucent />

      <Animated.View style={[styles.splashContainer, { opacity: fadeAnim }]} />

      <ToastManager
        showProgressBar={false}
        showCloseIcon={false}
        animationOut="slideOutRight"
        duration={3000}
        style={{
          width: '100%',
          borderRadius: theme.BORDER.SM,
        }}
        textStyle={{
          fontSize: theme.FONT_SIZE.MD,
          fontFamily: theme.FONT_FAMILY.BOLD,
        }}
      />

      {fontsLoaded && <Home />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.GRAY_700,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.COLORS.GRAY_700,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
