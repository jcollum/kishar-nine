// app.js

import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import {connect, Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
const RouterWithRedux = connect()(Router);
import reducers from '../reducers';
import {styles} from '../styles'
import Counter from '../scenes/counter'
import Home from '../scenes/home'
import Material from '../scenes/material'
import MaterialPart2 from '../scenes/materialPart2'
import NativeBase from '../scenes/nativeBase'
import DeckSwiperExample from '../scenes/deckSwiperExample'

// create store...
const store = createStore(reducers);

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Scene key="root" style={{
                        paddingTop: 60,
                        padding: 0
                    }}>
                        <Scene key="counter" component={Counter} title="Counter"/>
                        <Scene key="home" component={Home} title="Home" initial={true}/>
                        <Scene key="material" component={Material} title="Material"/>
                        <Scene key="material" component={MaterialPart2} title="Material Pt 2"/>
                        <Scene key="nativeBase" component={NativeBase} title="NativeBase Components"/>
                        <Scene key="deckSwiper" component={DeckSwiperExample} title="Deck Swiper"/>
                    </Scene>
                </Router>
            </Provider>
        );
    }
}
