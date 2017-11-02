import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ScrollView,
  View
} from 'react-native';
import { DrawerItems } from 'react-navigation';

export default class HomeScreen extends Component {
    render() {
        console.log(this.props);
        
        return (
            //<ScrollView><DrawerItems {...props} /></ScrollView>
            <View style={{backgroundColor: '#1976D2', flex: 1}}/>
        );
    }
}