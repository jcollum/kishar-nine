/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class kisharNine extends Component {
  _incremement() {
      this.setState({count : ++this.state.count})
  }

  render() {
      return (
          <View style={styles.container}>
              <Text style={[
                  styles.welcome, {
                      marginBottom: 40
                  }
              ]}>
                  Welcome to Kishar Nine
              </Text>
              <Text style={styles.instructions}>
                  Simple Counter Example
              </Text>
              <Text style={styles.heading}>{this.state.count}</Text>
              <TouchableHighlight underlayColor='lightskyblue' style={{margin: 40}} activeOpacity={20} onPress={() => {
                  this._incremement()
              }}><Text style={[styles.heading, {color: 'blue', marginTop: 0}]}>+</Text></TouchableHighlight>

          </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('kisharNine', () => kisharNine);
