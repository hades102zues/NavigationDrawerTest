import { 
	createStackNavigator,
	createDrawerNavigator,
	createAppContainer 
} from 'react-navigation';

import HomeScreen from './Home';
import FeedScreen from './Feed';
import SettingsScreen from './Settings';
import WhatScreen from './What';

import { View, Text } from 'react-native';
import React from 'react';


const HomeStack = createStackNavigator({
	Home : {
		screen: HomeScreen
	},
	Feed : {
		screen: FeedScreen
	},
	What : {
		screen: WhatScreen
	},
});

const SettingsStack = createStackNavigator({
	Settings : {
		screen: SettingsScreen
	},
	What : {
		screen: WhatScreen
	},
});

const SideDrawer = createDrawerNavigator({
	Home: HomeStack,
	Settings : SettingsStack,
});


const NavigationApp = createAppContainer(SideDrawer);


export default NavigationApp;