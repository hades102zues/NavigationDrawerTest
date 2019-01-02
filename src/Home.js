import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class Home extends Component {

	static navigationOptions = {
		title : 'Home'
	};
	render(){
		return (
			<View style={styles.HomeView}>
				<Button title="drawer" onPress={()=>this.props.navigation.openDrawer()}/>
			</View>
		);	
	}
}

const styles = StyleSheet.create({
	HomeView : {
		flex : 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});


export default Home;