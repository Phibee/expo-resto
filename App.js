import React from 'react';
import {
	useFonts,
	Poppins_100Thin,
	Poppins_500Medium,
	Poppins_600SemiBold,
	Poppins_700Bold,
	Poppins_800ExtraBold,
} from '@expo-google-fonts/poppins';

import Navigation from './src/infrastructure/navigation';
import { SafeAreaView, StatusBar } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

export default function App() {
	useFonts({
		Poppins_100Thin,
		Poppins_500Medium,
		Poppins_600SemiBold,
		Poppins_700Bold,
		Poppins_800ExtraBold,
	});

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
