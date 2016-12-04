import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Navigator
} from 'react-native';
import {styles} from './src/style'
import Counter from './src/scene/counter.jsx.js'
import Home from './src/scene/home.jsx.js'

/*

Navigation code is mostly from:
https://medium.com/react-native-training/react-native-navigator-navigating-like-a-pro-in-react-native-3cb1b6dc1e30#.tpgzwxz0p

*/

export default class kisharNine extends Component {
    constructor(props) {
        super(props);
    }

    renderScene(route, navigator) {
        if (route.name == 'Counter') {
            return <Counter navigator={navigator}/>
        }
         else {
            return <Home navigator={navigator}/>
        }
    }

    render() {
        return (<Navigator style={styles.container} initialRoute={{
            name: "Home"
        }} renderScene={this.renderScene} onBack={() => {
            if (route.index > 0) {
                navigator.pop();
            }
        }}/>)
    }
}

AppRegistry.registerComponent('kisharNine', () => kisharNine);
