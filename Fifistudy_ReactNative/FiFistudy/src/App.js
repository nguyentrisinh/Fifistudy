import React from 'react';
import {
   StyleSheet,
   Text,
   View,
  } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from './screens/screenHome/Container';
import HamburgerMenu from './screens/HamburgerMenu/HamburgerMenu';
import Container from './components/Sentences/Container/Container.js';
import DetailScreen from './screens/screenDetailFilm/Container';
import MovieWatchScreen from './screens/screenWatchMovie/Container';
import CommentScreen from './screens/screenWatchMovie/screenComment/Container';

const Hamburger = DrawerNavigator({
  // CommentScreen: {screen: CommentScreen},
  MovieWatchScreen: {screen: MovieWatchScreen},
  DetailScreen: {screen: DetailScreen},
  Container: { screen: Container},
  HomeScreen: { screen: HomeScreen },
}, {
  headerMode: 'none',
  contentComponent: props => <HamburgerMenu/>
});

export default Hamburger;