import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableHighlight, Linking} from 'react-native';
import {styles} from '../styles'
import {Actions} from 'react-native-router-flux';
import {RaisedButton} from './../components/raisedButton';
styles.textfield = {
    height: 48, // have to do it on iOS
    marginTop: 60
}
styles.textfieldWithFloatingLabel = {
    height: 48, // have to do it on iOS
    marginTop: 10
}
import {
    mdl,
    MKButton,
    MKColor,
    MKTouchable,
    MKTextField,
    TickView
} from 'react-native-material-kit';

const TextfieldWithFloatingLabel = MKTextField.textfieldWithFloatingLabel().withPlaceholder('Number...')
.withStyle(styles.textfieldWithFloatingLabel).withTextInputStyle({flex: 1})
.withFloatingLabelFont({fontSize: 10, fontStyle: 'italic', fontWeight: '200'}).withKeyboardType('numeric').build();

export default class MaterialPart2 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <View style={{
                    margin: 20,
                    padding: 20,
                    backgroundColor: "#CCC"
                }}>
                    <MKTextField tintColor={MKColor.Orange} textInputStyle={{
                        color: MKColor.Blue
                    }} placeholder="Text…" style={styles.textfield}/>
                </View>
                <View style={{
                    margin: 20,
                    padding: 20,
                    backgroundColor: "#CCC"
                }}>
                    <TextfieldWithFloatingLabel ref="defaultInput"/>
                    <Text style={styles.legendLabel}>With floating label</Text>
                </View>
            </View>
        )
    }
}
