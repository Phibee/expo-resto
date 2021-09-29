import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Screen1 } from "../../features/onboarding/screens/screen1.screen";
import { Screen2 } from "../../features/onboarding/screens/screen2.screen";
import { Screen3 } from "../../features/onboarding/screens/screen3.screen";
import { Screen4 } from "../../features/onboarding/screens/screen4.screen";

const Stack = createStackNavigator();

export const OnBoardNavigator = () => (
      <Stack.Navigator
            screenOptions={{
                  headerShown: false,
            }}
      >
            <Stack.Screen name="Screen 1" component={Screen1} />
            <Stack.Screen name="Screen 2" component={Screen2} />
            <Stack.Screen name="Screen 3" component={Screen3} />
            <Stack.Screen name="Screen 4" component={Screen4} />
      </Stack.Navigator>
);
