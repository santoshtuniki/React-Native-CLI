import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button
} from 'react-native';

const styles = StyleSheet.create({
	header: {
		fontSize: 30
	},
	para: {
		fontSize: 20
	},
});

const App = ()=>{
	return (
		<View>
			<Text style={styles.header}>Hello React Native</Text>
			<Text style={styles.para}>Like</Text>
			<Button title="Like" />
			<Text style={styles.para}>Share</Text>
			<Button title="Share" />
			<Text style={styles.para}>Subscribe</Text>
			<Button title="Subscribe" />
		</View>
	);
};

export default App;
