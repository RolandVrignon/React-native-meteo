import React, { Component } from 'react'
import {AppRegistry, StyleSheet} from 'react-native';
import Home from './components/Search'
import About from './components/About'
import {TabNavigator} from 'react-navigation'

const Tabs = TabNavigator({
  About: {screen: About},
  Search: {screen: Home},
  },
  {tabBarPosition: 'bottom',
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

AppRegistry.registerComponent('AwesomeProject', () => FixedDimensionsBasics);
