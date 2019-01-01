import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Home = () => (
	<View style={styles.HomeView}>
		<Text> Home </Text>
	</View>
);	

const styles = StyleSheet.create({
	HomeView : {
		flex : 1
	},
});


export default Home;