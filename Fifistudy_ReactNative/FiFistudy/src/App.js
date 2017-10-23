import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  Button,
  View
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import HomePage from './screens/HomeScreen';


export default class App extends Component {
  static navigationOptions = {
    drawerLabel: 'ABC',
    drawerIcon: ({tintColor}) => (
      <Image source={require('./ic_menu.png')}
        style={{
          width: 24,
          height: 24,
          tintColor: tintColor
        }}/>
    ),
  };

  render() {
    return (
      // <Button onPress={() => this.props.navigation.navigate('HomePage')}
      // title='Go to notifications'/>
      <View/>
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
});
