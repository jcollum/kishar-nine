// app.js

import React, { Component } from 'react';
import { Router } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

const RouterWithRedux = connect()(Router);
import reducers from './reducers';
// other imports...

// create store...
const middleware = [/* ...your middleware (i.e. thunk) */];
const store = compose(
  applyMiddleware(...middleware)
)(createStore)(reducers);


class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <RouterWithRedux>
            // your scenes here
        </RouterWithRedux>
      </Provider>
    );
  }
}

export default App;
