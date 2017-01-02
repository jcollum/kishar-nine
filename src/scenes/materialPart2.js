import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableHighlight, Linking} from 'react-native';
//import {styles} from '../styles'
import {Actions} from 'react-native-router-flux';
import {RaisedButton} from './../components/raisedButton';
styles = {
    textfield: {
        height: 36, // have to do it on iOS
        marginTop: 10
    },
    textfieldWithFloatingLabel: {
        height: 36, // have to do it on iOS
        marginTop: 10
    },
    textView: {
        backgroundColor: "#DDD",
        margin: 5,
        padding: 10
    }
}
import {
    mdl,
    MKButton,
    MKColor,
    MKTouchable,
    MKTextField,
    TickView
} from 'react-native-material-kit';

const TextfieldWithFloatingLabel = MKTextField.textfieldWithFloatingLabel().withPlaceholder('Type a number...').withStyle(styles.textfieldWithFloatingLabel).withTextInputStyle({flex: 1}).withFloatingLabelFont({fontSize: 10, fontStyle: 'italic', fontWeight: '200'}).withKeyboardType('numeric').build();

export default class MaterialPart2 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                {/* this textbox is messed up in this version of RNMK?  */}
                <View style={[
                    styles.textView, {
                        marginTop: 20
                    }
                ]}>
                    <MKTextField textInputStyle={{
                        flex: 1
                    }} keyboardType="ascii-capable" tintColor={MKColor.Orange} textInputStyle={{
                        color: MKColor.Blue
                    }} placeholder="Text…" style={styles.textfield}/>
                    <Text style={{
                        fontSize: 12
                    }}>(This text box might be broken in RNMK 0.3.x)</Text>
                </View>
                <View style={styles.textView}>
                    <TextfieldWithFloatingLabel ref="defaultInput"/>
                    <Text style={[
                        styles.legendLabel, {
                            marginTop: 5
                        }
                    ]}>Number of things</Text>
                </View>
            </View>
        )
    }
}
