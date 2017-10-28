import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  Button,
  View
} from 'react-native';


export default class HomeScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'HomeScreen',
        
    };

    render() {
        const {navigate } = this.props.navigation;
        return (
            // Tool bar
            <View style={{
                flexDirection: 'row',
                backgroundColor: 'lightskyblue',
                flex: 1
                }}>
                <View style={{
                    flexDirection: 'row',
                    width: '100%',
                    height: 56,
                    justifyContent: 'space-between',
                    paddingLeft: 12,
                    paddingRight: 12,
                    paddingTop: 4,
                    paddingBottom: 4 }}>
                    <TouchableHighlight style={{
                        width: 48,
                        height: 48,
                        padding: 8,
                        justifyContent: 'center',
                        alignItems: 'center',
                        }}
                        underlayColor='rgba(255,255,255,0.3)'
                        onPress={() => this.props.navigation.navigate('DrawerToggle')}>
                        <Image source={require('./ic_menu.png')}
                                style={{resizeMode: 'contain'}}/>
                    </TouchableHighlight>
                    <TouchableHighlight style={{
                        width: 48,
                        height: 48,
                        padding: 8,
                        justifyContent: 'center',
                        alignItems: 'center'
                        }}>
                        <Image source={require('./ic_search.png')}
                                style={{resizeMode: 'contain'}}/>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}