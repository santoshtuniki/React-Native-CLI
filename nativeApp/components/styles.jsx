import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
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
    },
    bg: {
        width: '90%',
        height: 300,
        marginLeft: '5%',
        marginTop: 20,
    },
    middle: {
        paddingTop: '10%',
    },

    flat: {
        container: {
            flex: 1,
            marginTop: StatusBar.currentHeight || 0,
        },
        item: {
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
        },
        title: {
            fontSize: 32,
        },
    },

    home: {
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
    },

    section: {
        container: {
            flex: 1,
            paddingTop: StatusBar.currentHeight,
            marginHorizontal: 16,
        },
        item: {
            backgroundColor: '#f9c2ff',
            padding: 20,
            marginVertical: 8,
        },
        header: {
            fontSize: 32,
            backgroundColor: '#fff',
        },
        title: {
            fontSize: 24,
        },
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});