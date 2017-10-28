import React from 'react';
import {
   StyleSheet,
   Text,
   View,
  } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import TestScreen from './screens/TestScreen/TestScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
//import HamburgerMenu from '../src/components/HamburgerMenu';

const Hamburger = DrawerNavigator({
  HomeScreen: { screen: HomeScreen },
  TestScreen: { screen: TestScreen },
}, {
  headerMode: 'none',
});

export default Hamburger;