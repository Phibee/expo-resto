import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppNavigator } from "./app.navigator";
import { OnBoardNavigator } from "./onboard.navigator";

export const Navigation = () => {
      return (
            <NavigationContainer>
                  <OnBoardNavigator />
            </NavigationContainer>
      );
};

export default Navigation;
