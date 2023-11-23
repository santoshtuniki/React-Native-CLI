import React from 'react';
import {
    Text,
    View,
    Button,
    Alert,
} from 'react-native';
import { styles } from './styles';

const AboutScreen = ({ navigation }) => {
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
                <Button
                    title="Like"
                    onPress={() => handlePress('Like')}
                />

                <Text style={[styles.para, { fontWeight: 800, textDecorationLine: 'underline', }]}>
                    Share
                </Text>
                <Button
                    title="Share"
                    color="#841584"
                    onPress={() => handlePress('Share')}
                />

                <Text style={[styles.para, styles.slant]}>
                    Subscribe
                </Text>
                <Button
                    title="Subscribe"
                    onPress={() => handlePress('Subscribe')}
                />
            </View>

            <View style={{ marginTop: 40 }}>
                <Button
                    title='Next'
                    onPress={() => navigation.navigate('Pictures')}
                />
            </View>
        </View>
    );
};

export default AboutScreen