import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Navigator
} from 'react-native';
import {styles} from './src/styles'
import Counter from './src/scenes/counter'
import Home from './src/scenes/home'
import Material from './src/scenes/material'

import {Router, Scene} from 'react-native-router-flux';

/*
Navigation code is mostly from:
https://medium.com/react-native-training/react-native-navigator-navigating-like-a-pro-in-react-native-3cb1b6dc1e30#.tpgzwxz0p
*/

export default class kisharNine extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="counter" component={Counter} title="Counter"/>
                    <Scene key="home" component={Home} title="Home" initial={true}/>
                    <Scene key="material" component={Material} title="Material" />
                </Scene>
            </Router>
        )
    }
}

AppRegistry.registerComponent('kisharNine', () => kisharNine);
