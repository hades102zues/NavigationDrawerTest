import { 
	createStackNavigator,
	createDrawerNavigator,
	createAppContainer 
} from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';
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
	Home: {
		screen: HomeStack,
		navigationOptions : {
			drawerIcon : (props)=> ( <Icon name="ios-home" size={24} /> )
		},
		
	},
	Settings : {
		screen : SettingsStack,
		navigationOptions : {
			drawerIcon : (props)=> ( <Icon name="ios-home" size={24} /> )
		},
	},
});


const NavigationApp = createAppContainer(SideDrawer);


export default NavigationApp;