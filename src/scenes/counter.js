import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {createStore, bindActionCreators} from 'redux'
import {styles} from '../styles'
import {Actions} from 'react-native-router-flux';
import reducers from '../reducers';
const store = createStore(reducers);
import * as actions from '../actions/actionTypes';
import {connect} from 'react-redux';

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

export class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
    }

    _incremement() {
        this.props.dispatch({type: actions.increment});
        console.log(this.state);
    }

    _decremement() {
        this.props.dispatch({type: actions.decrement});
        console.log(this.state);
    }

    render() {
        return (
            <View>
                <Text style={styles.subheading}>{this.props.title}</Text>
                <IncrDecr symbol="+" onPress={() => {
                    this._incremement()
                }}/>
                <Text style={[
                    styles.heading, {
                        marginHorizontal: 50
                    }
                ]}>{this.state.count}</Text>
                <IncrDecr symbol="-" onPress={() => {
                    this._decremement()
                }}/>
                <TouchableHighlight style={[
                    styles.button, {
                        marginHorizontal: 20
                    }
                ]} onPress={Actions.home}>
                    <Text style={styles.white}>Home</Text>
                </TouchableHighlight>
                <Text>{JSON.stringify(this.state)}</Text>

            </View>
        )
    }
}

export default connect()(Counter);
