import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {styles} from '../styles'
import {Actions} from 'react-native-router-flux';

export default class Material extends Component {
    constructor(props) {
        super(props);
    }

    static get defaultProps() {
        return {title: 'Home Screen'};
    }

    render() {
        return (
            <View>
            <Text style={styles.subheading}>{this.props.title}</Text>
                <Text>(Nothing here yet)</Text>

                <TouchableHighlight style={[
                    styles.button, {
                        marginHorizontal: 20
                    }
                ]} onPress={Actions.home}>
                    <Text style={styles.white}>Home</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
