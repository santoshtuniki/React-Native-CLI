import React from "react";
import { Button, Text, View } from "react-native";
import { styles } from "./styles";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.middle}>
            <Text style={{ textAlign: 'center', marginBottom: 40 }}>
                Hi! Welcome to Native App
            </Text>

            <Button
                title='Next'
                onPress={() => navigation.navigate('About')}
            />
        </View>
    )
};

export default HomeScreen;

/*	
    'navigation' prop is passed in to every "screen component" in the native stack navigator.

    navigation.navigate(RouteName)      -->      to move the user to that screen.

*/