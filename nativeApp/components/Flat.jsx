import React, { useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
    Button,
} from 'react-native';
import { styles } from './styles';

const { flat } = styles;

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[flat.item, { backgroundColor }]}>
        <Text style={[flat.title, { color: textColor }]}>{item.title}</Text>
    </TouchableOpacity>
);

const FlatScreen = ({ navigation }) => {
    const [selectedId, setSelectedId] = useState();

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={backgroundColor}
                textColor={color}
            />
        );
    };

    return (
        <SafeAreaView style={flat.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
            />
            <View style={{ marginBottom: 40 }}>
                <Button
                    title='Next'
                    onPress={() => navigation.navigate('SectionList')}
                />
            </View>
        </SafeAreaView>
    );
};

export default FlatScreen;

/*
    keyExtractor    -->      tells the list to use the ids for the react keys instead of the default key property

    extraData={selectedId}      -->     Ensure FlatList itself will re-render when the state changes. 
*/


/*
    The purpose of SafeAreaView is to render content within the safe area "boundaries of a device". 
    
    It is currently only applicable to iOS devices with iOS version 11 or later.
*/