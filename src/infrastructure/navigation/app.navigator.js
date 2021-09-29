import React, { useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { HomeScreen } from "../../features/main/screens/home.screen";
import { MenuScreen } from "../../features/main/screens/menu.screen";
import { OrderScreen } from "../../features/main/screens/order.screen";
import { BranchScreen } from "../../features/main/screens/branches.screen";

import { Header } from "../../components/header.component";

import { TouchableOpacity, View, Animated } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
const Tab = createBottomTabNavigator();

const TAB_ICON = {
      Home: "md-home-outline",
      Menu: "md-restaurant-outline",
      Order: "md-fast-food-outline",
      Branches: "md-map-outline",
};

const createScreenOptions = ({ route }) => {
      const iconName = TAB_ICON[route.name];
      return {
            tabBarIcon: ({ size, color }) => (
                  <Ionicons name={iconName} size={size} color={color} />
            ),
            tabBarButton: ({ ...props }) => {
                  return <TabBarButtonCustom {...props} />;
            },
            tabBarLabel: () => null,
            headerShown: false,
      };
};

const TabBarButtonCustom = ({
      children,
      onPress,
      accessibilityState,
      style,
      ...props
}) => {
      const translation = useRef(new Animated.Value(0)).current;

      const focusedContainerStyle = {};

      const defaultButtonStyle = {
            width: 50,
            height: 50,
      };

      const focusedButtonStyle = {
            borderRadius: 25,
            borderWidth: 3,
            borderColor: "white",
      };

      const moveSelectedTabButton = () => {
            Animated.timing(translation, {
                  toValue: -10,
                  duration: 300,
                  useNativeDriver: true,
            }).start();
      };

      return (
            <TouchableOpacity
                  {...props}
                  style={
                        accessibilityState?.selected
                              ? [style, focusedContainerStyle]
                              : style
                  }
                  onPress={(e) => {
                        onPress(e);
                        moveSelectedTabButton();
                  }}
            >
                  <Animated.View
                        style={
                              accessibilityState?.selected
                                    ? {
                                            borderRadius: 45,
                                            borderWidth: 8,
                                            borderColor: "#F4F7F8",
                                            transform: [
                                                  { translateY: translation },
                                            ],
                                      }
                                    : {}
                        }
                  >
                        {accessibilityState?.selected ? (
                              <LinearGradient
                                    colors={["#FFA928", "#EAAE14"]}
                                    start={{ x: -1, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={
                                          accessibilityState?.selected
                                                ? [
                                                        defaultButtonStyle,
                                                        focusedButtonStyle,
                                                  ]
                                                : defaultButtonStyle
                                    }
                              >
                                    {children}
                              </LinearGradient>
                        ) : (
                              <View>{children}</View>
                        )}
                  </Animated.View>
            </TouchableOpacity>
      );
};

export const AppNavigator = () => (
      <>
            <Header />
            <Tab.Navigator
                  screenOptions={createScreenOptions}
                  tabBarOptions={{
                        activeTintColor: "white",
                        inactiveTintColor: "gray",
                        tabStyle: [{ backgroundColor: "#F4F7F8" }],
                  }}
            >
                  <Tab.Screen name="Home" component={HomeScreen} />
                  <Tab.Screen name="Menu" component={MenuScreen} />
                  <Tab.Screen name="Order" component={OrderScreen} />
                  <Tab.Screen name="Branches" component={BranchScreen} />
            </Tab.Navigator>
      </>
);
