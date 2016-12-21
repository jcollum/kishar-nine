import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {styles} from '../styles'
import {Actions} from 'react-native-router-flux';
import {MKButton, MKColor, MKTouchable, TickView} from 'react-native-material-kit';

// colored button with default theme (configurable)
const ColoredRaisedButton = MKButton.coloredButton().withText('BUTTON').withOnPress(() => {
    console.log("Hi, it's a colored button!");
}).build();

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

                <MKButton backgroundColor={MKColor.Teal} shadowRadius={2} shadowOffset={{
                    width: 0,
                    height: 2
                }} shadowOpacity={.7} shadowColor="black" onPress={() => {
                    console.log('hi, raised button!');
                }}>
                    <Text pointerEvents="none" style={{
                        color: 'white',
                        fontWeight: 'bold'
                    }}>
                        RAISED BUTTON
                    </Text>
                </MKButton>

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
