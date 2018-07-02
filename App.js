import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Show this {this.props.name}</Text>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='A'/>
        <Greeting name='B'/>
        <Greeting name='C'/>
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('Sudoku', () => LotsOfGreetings);
