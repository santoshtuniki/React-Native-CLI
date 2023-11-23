import React from 'react';
import {
    SafeAreaView,
    TextInput,
    View,
    Button
} from 'react-native';
import { styles } from './styles';

const InputScreen = ({ navigation }) => {
    const [text, onChangeText] = React.useState('');
    const [value, onChangeValue] = React.useState('');
    const [number, onChangeNumber] = React.useState('');

    return (
        <SafeAreaView>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholder="Enter text"
                    value={text}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Enter number"
                    keyboardType="numeric"
                />
            </View>

            <View
                style={{
                    backgroundColor: value,
                    borderBottomColor: '#000000',
                    borderBottomWidth: 1,
                }}>
                <TextInput
                    editable
                    multiline
                    numberOfLines={4}
                    maxLength={40}
                    onChangeText={text => onChangeValue(text)}
                    value={value}
                    style={{ padding: 10 }}
                />
            </View>
            
            <View style={{ marginTop: 40 }}>
                <Button
                    title='Return Home'
                    onPress={() => navigation.popToTop()}
                />
            </View>
        </SafeAreaView>
    );
};

export default InputScreen;