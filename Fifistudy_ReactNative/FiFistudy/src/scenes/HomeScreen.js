import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class FiFistudy extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{alignSelf:'stretch' ,height: 180, backgroundColor:'gray'}}>
        
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  }
});

