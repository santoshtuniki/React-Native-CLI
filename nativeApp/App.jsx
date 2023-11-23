import React from 'react';
import {
	Text,
	View,
	Button,
	StyleSheet,
	Image,
	ImageBackground,
	Alert,
	TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
	header: {
		fontSize: 30,
		fontWeight: 'bold',
		marginBottom: 20,
		backgroundColor: 'green',
		textAlign: 'center'
	},
	para: {
		fontSize: 20
	},
	slant: {
		fontStyle: 'italic'
	},
	icon: {
		width: 200,
		height: 200,
		marginTop: 20,
		marginLeft: 5
	},
	container: {
		flexDirection: 'row',
	}
});

const App = () => {
	const handlePress = (title) => {
		Alert.alert(`${title} clicked.`)
	}

	return (
		<View>
			<View>
				<Text style={styles.header}>
					Hello React Native
				</Text>

				<Text style={styles.para}>
					Like
				</Text>
				<Button title="Like" />

				<Text style={[styles.para, { fontWeight: 800, textDecorationLine: 'underline', }]}>
					Share
				</Text>
				<Button title="Share" color="#841584" />

				<Text style={[styles.para, styles.slant]}>
					Subscribe
				</Text>
				<Button title="Subscribe" />
			</View>

			<View style={styles.container}>
				<Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
					style={styles.icon} />

				<Image source={require('./images/roar.jpg')}
					style={styles.icon} />
			</View>
		</View>
	);
};

export default App;
