import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/Home';
import AboutScreen from './components/About';
import PictureScreen from './components/Pictures';
import BgScreen from './components/background';

/*
	createNativeStackNavigator is a function that returns an object containing 2 properties: 
		1.	Screen 
		2.	Navigator.
*/
const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="About" component={AboutScreen} />
				<Stack.Screen name="Pictures" component={PictureScreen} />
				<Stack.Screen name="BackgroundImg" component={BgScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
};

export default App;

/*
	NavigationContainer:

		1.	A component which manages our navigation tree and contains the navigation state.

		2.	In a typical React Native app, the NavigationContainer should be only used once in your app at the root.
*/
