import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {styles} from '../styles'
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    static get defaultProps() {
        return {title: 'Home Screen'};
    }

    _navigate(key) {
        this.props.navigator.push({
            name: key // Matches route.name
        })
    }

    render() {
        return (
            <View>
                <Text style={styles.heading}>Welcome to Kishar Nine.</Text>
                <Text style={styles.subheading}>This is the {this.props.title} screen</Text>
                <Text style={{marginVertical: 20}}>Here are some samples:</Text>
                <TouchableHighlight style={[ styles.button, {marginHorizontal: 20}]} onPress={Actions.counter}>
                    <Text style={styles.white}>Counter</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[ styles.button, {marginHorizontal: 20}]} onPress={Actions.material}>
                    <Text style={styles.white}>Material</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
