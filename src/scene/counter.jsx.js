import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {styles} from './../style'

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

    _navigate(key) {
        if (key === 'Home') {
            this.props.navigator.push({
                name: 'Home', // Matches route.name
            })
        }
    }

    render() {
        return (
            <View>
                <Text style={styles.instructions}>
                    Simple Ugly Counter Example
                </Text>
                <Text style={styles.heading}>{this.state.count}</Text>

                <IncrDecr symbol="+" onPress={() => {this._incremement()}}/>
                <IncrDecr symbol="-" onPress={() => {this._decremement()}}/>
                <TouchableHighlight onPress={() => this._navigate('Home')}>
                    <Text>Home</Text>
                </TouchableHighlight>

            </View>
        )
    }
}
