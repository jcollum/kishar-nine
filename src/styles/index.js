import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        marginTop: 10,
        color: '#000',
        fontWeight: 'bold',
        color: "#1A179C"
    },

    subheading: {
        fontSize: 22,
        marginTop: 10,
        marginBottom: 10,
        color: '#111',
        fontWeight: 'bold'
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        //alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },

    white: {
        color: "#FFF"
    },

    button: {
        borderRadius: 5,
        width: 100,
        padding: 20,
        backgroundColor: "#1286AF",
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
        , marginTop: 20
    },

    highlightedButton: {
        borderRadius: 5,
        width: 100,
        height: 30,
        padding: 10,
        backgroundColor: "#F4BC41",
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3
    },

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

export {styles}
