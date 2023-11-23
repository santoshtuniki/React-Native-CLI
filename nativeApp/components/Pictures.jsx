import React from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    Alert,
    TouchableHighlight,
    Button,
} from 'react-native';
import { styles } from './styles';

const PictureScreen = ({ navigation }) => {
    const onPressButton = () => {
        Alert.alert('GURRR....')
    }

    return (
        <View>
            <View style={styles.container}>
                {/* For Network Images */}
                <Image
                    source={{ uri: 'https://reactjs.org/logo-og.png' }}
                    style={styles.icon}
                />

                {/* For Local Images */}
                <TouchableHighlight
                    onPress={() => onPressButton()}
                    underlayColor="white"
                >
                    <Image
                        source={require('../images/roar.jpg')}
                        style={styles.icon}
                    />
                </TouchableHighlight>
            </View>

            <ImageBackground
                source={require('../images/1.jpeg')}
                style={styles.bg}
            >
                <Text style={[styles.para, { color: 'red', textAlign: 'center' }]}>
                    NATIONAL ANIMAL
                </Text>
            </ImageBackground>

            <View style={{ marginTop: 40 }}>
                <Button
                    title='Next'
                    onPress={() => navigation.navigate('BackgroundImg')}
                />
            </View>

            <View style={{ marginTop: 40 }}>
                <Button
                    title='Go back'
                    color="#841584"
                    onPress={() => navigation.goBack()}
                />
            </View>
        </View >
    )
}

export default PictureScreen;

//  navigation.goBack()     -->     to return to "previous screen".
