import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {createStore, bindActionCreators} from 'redux'
import {styles} from '../styles'
import {Actions} from 'react-native-router-flux';
import reducers from '../reducers';
const store = createStore(reducers);
import * as actions from '../actions/counter';
import * as actionTypes from '../actions/actionTypes';
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

    // _incremement() {
    //     debugger;
    //     this.props.dispatch({type: actionTypes.increment});
    //     console.log(this.state);
    //     debugger;
    // }
    //
    // _decremement() {
    //     this.props.dispatch({type: actionTypes.decrement});
    //     console.log(this.state);
    // }
    //<IncrDecr symbol="+" onPress={this.props.onIncrementClick}/>
    //<IncrDecr symbol="-" onPress={this.props.onDecrementClick}/>
    render() {
        return (
            <View>
                <Text style={styles.subheading}>{this.props.title}</Text>
                <TouchableHighlight style={[
                    styles.button, {
                        margin: 20
                    }
                ]} onPress={this.props.onIncrementClick}>
                    <Text>+</Text>
                </TouchableHighlight>

                <Text style={[
                    styles.heading, {
                        margin: 50
                    }
                ]}>{this.props.count || 0}</Text>

                <TouchableHighlight style={[
                    styles.button, {
                        margin: 20
                    }
                ]} onPress={this.props.onDecrementClick}>
                    <Text>-</Text>
                </TouchableHighlight>

                <TouchableHighlight style={[
                    styles.button, {
                        marginHorizontal: 20
                    }
                ]} onPress={Actions.home}>
                    <Text style={styles.white}>Home</Text>
                </TouchableHighlight>
                <Text>{JSON.stringify(this.state)}</Text>
                <Text>{JSON.stringify(this.props)}</Text>

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {count: state.count}
}

const mapDispatchToProps = (dispatch) => {

    return {
        onIncrementClick: () => {
            console.log("+ click")
            dispatch({type: actionTypes.increment});
        },
        onDecrementClick: () => {
            console.log("- click")
            dispatch({type: actionTypes.decrement});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
