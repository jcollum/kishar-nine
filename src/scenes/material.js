import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableHighlight, Linking} from 'react-native';
import {mdl, MKProgress, MKTextField} from 'react-native-material-kit';
import {styles} from '../styles'
import {Actions} from 'react-native-router-flux';
import {RaisedButton} from './../components/raisedButton';

import {MKButton, MKColor, MKTouchable, TickView} from 'react-native-material-kit';

TextfieldWithFloatingLabel = MKTextField.textfieldWithFloatingLabel().withPlaceholder('Number...').withStyle(styles.textfieldWithFloatingLabel).withTextInputStyle({flex: 1}).withFloatingLabelFont({fontSize: 10, fontStyle: 'italic', fontWeight: '200'}).withKeyboardType('numeric').build();

const CustomTextfield = mdl.Textfield.textfield().withPlaceholder('Text…').withStyle(styles.textfield).withTintColor(MKColor.Lime).withTextInputStyle({color: MKColor.Orange}).build();

export default class Material extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        // intervals for progress bar with buffer
        const bufferInterv = setInterval(() => {
            const progBuffer = this.refs.progBarWithBuffer;
            if (progBuffer) {
                if (progBuffer.buffer < 1.0) {
                    progBuffer.buffer += 0.05;
                } else if (progBuffer.progress < 0.9) {
                    progBuffer.progress += 0.1;
                } else {
                    progBuffer.progress = 1.0;
                    clearInterval(bufferInterv);
                }
            }
        }, 200);
    }

    static get defaultProps() {
        return {title: 'Home Screen'};
    }

    render() {
        return (
            <View style={{
                marginTop: 30
            }}>
                <Text style={{
                    color: 'blue'
                }} onPress={() => Linking.openURL('https://github.com/xinthink/react-native-material-kit')}>
                    RNMK Library (Github)
                </Text>

                <RaisedButton width={120} style={{
                    marginVertical: 20
                }} backgroundColor={MKColor.Orange} text="Orange Button"/>

                <Text style={{
                    marginTop: 20,
                    marginBottom: 10
                }}>Spinners & Progress</Text>

                <MKProgress.Indeterminate style={{
                    backgroundColor: MKColor.Grey
                }} progressColor="#222" progress={0.5}/>

                <MKProgress ref="progBarWithBuffer" style={{
                    marginTop: 20
                }} progress={0.0} buffer={0.0}/>

                <mdl.Spinner style={{
                    marginVertical: 20
                }}/>

                <Text style={{
                    marginTop: 20,
                    marginBottom: 10
                }}>Text Field</Text>

                <MKTextField tintColor={MKColor.Lime} textInputStyle={{
                    color: MKColor.Orange
                }} placeholder="Text…" style={styles.textfield}/>

                <RaisedButton width={80} text="Home" style={{
                    marginTop: 40
                }} onPress={Actions.home}/>
            </View>
        )
    }
}
