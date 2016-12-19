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
import {random} from 'lodash';

class IncrDecr extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableHighlight style={[
                styles.highlightedButton, {
                    margin: 20
                }
            ]} onPress={this.props.onPress}>
                <Text>{this.props.text}</Text>
            </TouchableHighlight>
        )
    }
}

class WorkingIndicator extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.working) {
            return (
                <Text>Working...</Text>
            )
        } else
            return null;

        }
    }

export class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
    }

    render() {
        return (
            <View>
                <Text style={styles.subheading}>{this.props.title}</Text>
                <IncrDecr text="+ (async)" onPress={this.props.onAsyncIncrementClick}/>
                <IncrDecr text="+" onPress={this.props.onIncrementClick}/>
                <Text style={[
                    styles.heading, {
                        marginLeft: 40
                    }
                ]}>{this.props.count}</Text>
                <IncrDecr text="-" onPress={this.props.onDecrementClick}/>
                <IncrDecr text="- (async)" onPress={this.props.onAsyncDecrementClick}/>
                <WorkingIndicator working={this.props.refreshing}/>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {count: state.counter.count, refreshing: state.counter.busy}
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
        },
        onAsyncIncrementClick: () => {
            delay = random(100, 500)
            console.log("+ async click, delay:", delay)
            dispatch({type: actionTypes.busy});
            setTimeout(() => {
                dispatch({type: actionTypes.increment})
                dispatch({type: actionTypes.done});
            }, delay)
        },
        onAsyncDecrementClick: () => {
            delay = random(100, 500)
            console.log("- async click, delay:", delay)
            dispatch({type: actionTypes.busy});

            setTimeout(() => {
                dispatch({type: actionTypes.decrement});
                dispatch({type: actionTypes.done});
            }, delay)
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
