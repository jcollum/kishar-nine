import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {styles} from '../styles'
import { Actions } from 'react-native-router-flux';

class IncrDecr extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableHighlight underlayColor='lightskyblue' style={{
                margin: 40
            }} activeOpacity={20} onPress={() => {
                this.props.onPress();
            }}>
                <Text style={[
                    styles.heading, {
                        color: 'blue',
                        marginTop: 0
                    }
                ]}>{this.props.symbol}</Text>
            </TouchableHighlight>
        )

    }

}

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 1};
    }

    _incremement() {
      debugger;
        this.setState({
            count: ++this.state.count
        })
    }
    _decremement() {
        this.setState({
            count: --this.state.count
        })
    }


    render() {
        return (
            <View>

              <Text style={styles.subheading}>{this.props.title}</Text>
                <IncrDecr symbol="+" onPress={() => {this._incremement()}}/>
                <Text style={[styles.heading, {marginHorizontal: 50}]}>{this.state.count}</Text>
                <IncrDecr symbol="-" onPress={() => {this._decremement()}}/>
                <TouchableHighlight style={[ styles.button,{marginHorizontal: 20}]} onPress={Actions.home}>
                    <Text style={styles.white}>Home</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
