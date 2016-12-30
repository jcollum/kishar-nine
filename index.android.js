import Root from './src/apps/root'
import {AppRegistry} from 'react-native';
import React, {Component} from 'react';

export default class kisharNine extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Root></Root>
        )
    }
}

AppRegistry.registerComponent('kisharNine', () => kisharNine);
