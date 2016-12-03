import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {styles} from './../style'

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

                <Text style={styles.subheading}>This is the {this.props.title}</Text>
                <Text style={{marginVertical: 20}}>Here are some samples:</Text>
                <TouchableHighlight style={{marginHorizontal: 20}} onPress={() => this._navigate('Counter')}>
                    <Text>Counter</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
