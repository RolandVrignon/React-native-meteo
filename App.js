import React, { Component } from 'react'
import {AppRegistry, View, Image, Text, TextInput, Alert, Button, ScrollView, StyleSheet, StatusBar } from 'react-native';
import Home from './components/search'
import About from './components/About'
import {TabNavigator} from 'react-navigation'

const Tabs = TabNavigator({
  About: {screen: About},
  Search: {screen: Home},
},{
  tabBarPosition: 'bottom',
})

export default class Meteo extends Component {

  render() {
    return (
      <Tabs/>
    );
  }
}

const style = StyleSheet.create({


})




// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FixedDimensionsBasics);
