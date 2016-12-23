import {MKButton, MKColor, MKTouchable, TickView} from 'react-native-material-kit';
import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import * as styles from '../styles';

export class RaisedButton extends Component {
    constructor(props) {
        super(props);
    }

    static get defaultProps() {
        return {
            text: 'Button Text Here',
            backgroundColor: MKColor.Green,
            style: {
                ...styles.button,
                width: 200
            },
            onPress: () => {}
        };
    }

    render() {
        return (
            <View>
                <MKButton fab={false} backgroundColor={this.props.backgroundColor} shadowRadius={2} shadowOffset={{
                    width: 2,
                    height: 2
                }} style={{
                    ...this.props.style,
                    padding: 5,
                    width: this.props.width
                }} borderRadius={5} shadowOpacity={.5} shadowColor="black" shadowOpacity={.7} onPress={() => this.props.onPress()}>
                    <Text pointerEvents="none" style={{
                        color: 'white',
                        textAlign: 'center',
                        fontWeight: 'bold'
                    }}>
                        {this.props.text}
                    </Text>
                </MKButton>
            </View>
        )
    }
}
