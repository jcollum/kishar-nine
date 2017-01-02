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
    view: {
        backgroundColor: "#DDD",
        margin: 5,
        padding: 10
    },
    viewInner: {
        backgroundColor: "#AAA",
        borderRadius: 8,
        padding: 10,
        margin: 4
    },
    toggleText: {
        color: "#AAA"
    },
    toggleTextOn: {
        color: "blue"
    }
}
import {
    mdl,
    MKButton,
    MKColor,
    MKTouchable,
    MKTextField,
    MKIconToggle,
    MKCheckbox,
    TickView
} from 'react-native-material-kit';

const TextfieldWithFloatingLabel = MKTextField.textfieldWithFloatingLabel().withPlaceholder('Type a number...').withStyle(styles.textfieldWithFloatingLabel).withTextInputStyle({flex: 1}).withFloatingLabelFont({fontSize: 10, fontStyle: 'italic', fontWeight: '200'}).withKeyboardType('numeric').build();

export default class MaterialPart2 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={[
                styles.view, {
                    marginTop: 20
                }
            ]}>
                {/* this textbox is messed up in this version of RNMK?  */}
                <View>
                    <View style={[styles.viewInner]}>
                        <MKTextField textInputStyle={{
                            flex: 1
                        }} keyboardType="ascii-capable" tintColor={MKColor.Orange} textInputStyle={{
                            color: MKColor.Blue
                        }} placeholder="Text…" style={styles.textfield}/>
                        <Text style={{
                            fontSize: 12
                        }}>(This text box might be broken in RNMK 0.3.x)</Text>
                    </View>
                    <View style={styles.viewInner}>
                        <TextfieldWithFloatingLabel ref="defaultInput"/>
                        <Text style={[
                            styles.legendLabel, {
                                marginTop: 5
                            }
                        ]}>Number of things</Text>
                    </View>
                </View>
                <View style={styles.viewInner}>
                    <Text>Togggles and Switches</Text>
                    <View style={styles.viewInner}>
                        <mdl.Switch style={styles.appleSwitch} onColor="rgba(255,152,0,.3)" thumbOnColor={MKColor.Orange} rippleColor="rgba(255,152,0,.2)" onPress={() => console.log('orange switch pressed')} onCheckedChange={(e) => console.log('orange switch checked', e)}/>
                    </View>
                    <View style={[{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }
                    ]}>
                        <MKCheckbox checked={true}/>
                        <Text>Email me a receipt</Text>
                    </View>
                    <View style={styles.viewInner}>
                        <Text>Do you like ice cream? (Text toggle)</Text>
                        <MKIconToggle checked={true} onCheckedChange={this._onIconChecked} onPress={this._onIconClicked}>
                            <Text pointerEvents="none" style={styles.toggleTextOff}>OK</Text>
                            <Text state_checked={true} pointerEvents="none" style={[styles.toggleText, styles.toggleTextOn]}>No!</Text>
                        </MKIconToggle>
                    </View>
                </View>
            </View>
        )
    }
}
