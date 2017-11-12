import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import styles from './Styles.js';

import TabChild from './TabChild.js';

export default class Container extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./res/img/example.png')}
          style={styles.img}
          resizeMode='stretch'
        />
        <View style={styles.tabContainer}>
          <TabChild />
        </View>
        <View style={styles.buttonFloat}>
          <Text style={styles.txtIsMore}>
            >
          </Text>
        </View>
      </View>
    );
  }
}