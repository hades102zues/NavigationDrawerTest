import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Feed = () => (
	<View style={styles.FeedView}>
		<Text> Feed </Text>
	</View>
);	

const styles = StyleSheet.create({
	FeedView : {
		flex : 1
	},
});


export default Feed;