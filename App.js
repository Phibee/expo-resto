import React from 'react';

import Navigation from './src/infrastructure/navigation';
import {SafeAreaView, StatusBar} from 'react-native';
import {StatusBar as ExpoStatusBar} from 'expo-status-bar';
import {useFonts} from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    PoppinsRegular: require('./assets/fonts/Poppins-Regular.ttf'),
    PoppinsLight: require('./assets/fonts/Poppins-Light.ttf'),
    PoppinsMedium: require('./assets/fonts/Poppins-Medium.ttf'),
    PoppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsBlack: require('./assets/fonts/Poppins-Black.ttf'),
    PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
    PoppinsExtraBold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: StatusBar.currentHeight,
          backgroundColor: 'white',
        }}>
        <Navigation />
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}
