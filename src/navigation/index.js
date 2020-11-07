import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import HomeScreen from 'screens/home';
import SplashScreen from 'screens/splash';
import SerieDetailsScreen from 'screens/serieDetails';
import FavoritesScreen from 'screens/favorites';

const Stack = createStackNavigator();

const screenVertical = {
	gestureEnabled: false,
	gestureDirection: 'vertical',
	cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
};

const screenHorizontal = {
	gestureEnabled: true,
	gestureDirection: 'horizontal',
	cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
};

const TabsMain = (props) => {
	return (
		<NavigationContainer
			ref={(navigatorRef) => {
				// Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
				// NavigationService.setTopLevelNavigator(navigatorRef);
			}}
		>
			<Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
				<Stack.Screen name="HomeScreen" component={HomeScreen} options={screenHorizontal} />
				<Stack.Screen name="SplashScreen" component={SplashScreen} options={screenVertical} />
				<Stack.Screen name="SerieDetailsScreen" component={SerieDetailsScreen} options={screenVertical} />
				<Stack.Screen name="FavoritesScreen" component={FavoritesScreen} options={screenVertical} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default TabsMain;
