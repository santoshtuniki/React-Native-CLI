import React from 'react';
import {
    Text,
    View,
    SafeAreaView,
    SectionList,
    Button
} from 'react-native';
import { styles } from './styles';

const { section } = styles;

const DATA = [
    {
        title: 'Main dishes',
        data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
        title: 'Sides',
        data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
        title: 'Drinks',
        data: ['Water', 'Coke', 'Beer'],
    },
    {
        title: 'Desserts',
        data: ['Cheese Cake', 'Ice Cream'],
    },
];

const SectionScreen = ({ navigation }) => (
    <SafeAreaView style={section.container}>
        <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
                <View style={section.item}>
                    <Text style={section.title}>{item}</Text>
                </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
                <Text style={section.header}>{title}</Text>
            )}
        />
        <View style={{ marginBottom: 40 }}>
            <Button
                title='Next'
                onPress={() => navigation.navigate('TextInput')}
            />
        </View>
    </SafeAreaView>
);

export default SectionScreen;

/*
    renderSectionHeader     -->     Specify the function that renders the headers for each section in the list.
*/