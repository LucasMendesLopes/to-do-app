
import 'react-native-reanimated'
import 'react-native-gesture-handler'

import { useFonts, Inter_700Bold, Inter_400Regular } from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { theme } from './src/theme';
import { Home } from './src/screens';
import ToastManager from 'toastify-react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent />

      <ToastManager
        showProgressBar={false}
        showCloseIcon={false}
        animationOut="slideOutRight"
        duration={3000}
        style={{
          width: "100%",
          borderRadius: theme.BORDER.SM,
        }}
        textStyle={{
          fontSize: theme.FONT_SIZE.MD,
          fontFamily: theme.FONT_FAMILY.BOLD
        }}
      />

      {fontsLoaded ? <Home /> :
        <ActivityIndicator
          size={35}
          color={theme.COLORS.BLUE}
        />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.GRAY_700,
    justifyContent: "center",
    alignItems: "center"
  },
});
