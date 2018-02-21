import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableHighlight, Linking,ScrollView} from 'react-native';
import {styles} from '../styles'
import {Actions} from 'react-native-router-flux';
import {RaisedButton} from './../components/raisedButton';

import {MKButton, MKColor, MKTouchable, TickView,mdl, MKProgress, MKTextField} from 'react-native-material-kit';

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
            <ScrollView>
                <View style={[styles.viewInner, {marginTop: 8}]}>
                    <Text style={{
                        color: 'blue'
                    }} onPress={() => Linking.openURL('https://github.com/xinthink/react-native-material-kit')}>
                        RNMK Library (Github)
                    </Text>
                </View>
                <View style={[styles.viewInner]}>
                    <RaisedButton width={120} style={{
                        marginVertical: 20
                    }} backgroundColor={MKColor.Orange} text="Orange Button"/>
                </View>
                <View style={[styles.viewInner]}>
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
                </View>

                <RaisedButton width={80} text="Home" style={{
                    marginTop: 40, marginLeft: 20
                }} onPress={Actions.home}/>
          </ScrollView>
        )
    }
}
