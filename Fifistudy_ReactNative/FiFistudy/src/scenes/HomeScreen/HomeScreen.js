import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  Text,
  Button,
  View
} from 'react-native';
import { DrawerItems } from 'react-navigation';
import Styles from './Styles';

export default class FiFistudy extends Component {
  static navigationOptions = {
    drawerLabel: 'notifications',
    drawerIcon: ({tintColor}) => (
      <Image source={require('./Assets/gai_dep_1.png')}
        style={{
          width: 24,
          height: 24,
          tintColor: tintColor
        }}/>
    ),
  }

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

