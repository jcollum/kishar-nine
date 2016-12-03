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
import MyScene from './src/scene/myScene.jsx.js'

export default class kisharNine extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navigator style={{
                marginTop: 60,
                marginHorizontal: 20
            }} initialRoute={{
                title: 'My Initial Scene',
                index: 0
            }} renderScene={(route, navigator) => <MyScene title={route.title} onForward={() => {
                const nextIndex = route.index + 1;
                navigator.push({
                    title: 'Scene ' + nextIndex,
                    index: nextIndex
                });
            }} configureScene={() => FloatFromRight} onBack={() => {
                if (route.index > 0) {
                    navigator.pop();
                }
            }}/>}/>
        )
    }

}

AppRegistry.registerComponent('kisharNine', () => kisharNine);
