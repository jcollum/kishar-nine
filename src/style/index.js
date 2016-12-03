import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        marginTop: 10,
        color: '#000',
        fontWeight: 'bold'
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
