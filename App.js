import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Transaction from './screens/Transaction'
import Search from './screens/Search'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'


export default class App extends Component {
  render() {
    return (
     
      <AppContainer/>
     
    );
  }
}
const TabNavigator = createBottomTabNavigator({
  SCREEN1 : {screen : Transaction},
  SCREEN2 :{screen : Search}
})


const AppContainer = createAppContainer(TabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
