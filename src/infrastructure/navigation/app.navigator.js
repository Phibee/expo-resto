import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { HomeScreen } from '../../features/main/screens/home.screen';
import { MenuScreen } from '../../features/main/screens/menu.screen';
import { OrderScreen } from '../../features/main/screens/order.screen';
import { BrancheScreen } from '../../features/main/screens/branches.screen';

import { Header } from '../../components/header.component';

import { colors } from '../../infrastructure/theme/colors';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
	Home: 'md-home-outline',
	Menu: 'md-restaurant-outline',
	Order: 'md-fast-food-outline',
	Branches: 'md-map-outline',
};

const createScreenOptions = ({ route }) => {
	const iconName = TAB_ICON[route.name];
	return {
		tabBarIcon: ({ size, color }) => (
			<Ionicons name={iconName} size={size} color={color} />
		),
		headerShown: false,
	};
};

export const AppNavigator = () => (
	<>
		<Header />
		<Tab.Navigator
			screenOptions={createScreenOptions}
			tabBarOptions={{
				activeTintColor: '#FFA928',
				inactiveTintColor: 'gray',
			}}>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Menu" component={MenuScreen} />
			<Tab.Screen name="Order" component={OrderScreen} />
			<Tab.Screen name="Branches" component={BrancheScreen} />
		</Tab.Navigator>
	</>
);
