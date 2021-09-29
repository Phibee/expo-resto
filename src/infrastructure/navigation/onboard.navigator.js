import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {OnboardingScreen} from '../../features/onboarding/screens/onboarding.screen';

import {AppNavigator} from '../navigation/app.navigator';

const Stack = createStackNavigator();

export const OnBoardNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Screen 1" component={OnboardingScreen} />
    <Stack.Screen name="AppNavigator" component={AppNavigator} />
  </Stack.Navigator>
);
