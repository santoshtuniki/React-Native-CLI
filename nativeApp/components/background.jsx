import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };

const BgScreen = ({ navigation }) => (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Text style={styles.text}>Inside</Text>
        </ImageBackground>
        <View style={{ marginBottom: 40 }}>
            <Button
                title='Return Home'
                onPress={() => navigation.popToTop()}
            />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
})

export default BgScreen;

//  navigation.popToTop()   -->     to return to "first screen" at the top of the stack.
