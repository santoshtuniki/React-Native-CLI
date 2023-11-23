import React from 'react';
import {
    ImageBackground,
    Text,
    View,
    Button,
} from 'react-native';
import { styles } from './styles';

const { home } = styles;

const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };

const HomeScreen = ({ navigation }) => (
    <View style={home.container}>
        <ImageBackground source={image} resizeMode="cover" style={home.image}>
            <Text style={home.text}>
                WELCOME
            </Text>
        </ImageBackground>

        <View style={{ marginBottom: 40 }}>
            <Button
                title='Next'
                onPress={() => navigation.navigate('About')}
            />
        </View>
    </View>
);

export default HomeScreen;
