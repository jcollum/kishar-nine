// app.js

import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import {connect, Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
const RouterWithRedux = connect()(Router);
import {routes} from '../reducers';
import {styles} from '../styles'
import Counter from '../scenes/counter'
import Home from '../scenes/home'
import Material from '../scenes/material'

// create store...
const store = createStore(routes);

/*
Navigation code is mostly from:
https://medium.com/react-native-training/react-native-navigator-navigating-like-a-pro-in-react-native-3cb1b6dc1e30#.tpgzwxz0p
*/

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Scene key="root" style={{
                        paddingTop: 60,
                        padding: 20
                    }}>
                        <Scene key="counter" component={Counter} title="Counter"/>
                        <Scene key="home" component={Home} title="Home" initial={true}/>
                        <Scene key="material" component={Material} title="Material Design Samples"/>
                    </Scene>
                </Router>
            </Provider>
        );
    }
}
