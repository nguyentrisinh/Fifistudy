import React, { Component } from 'react';
import {
    Text,
    Image,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import Res from '../Resources/index.js';

export default class ScreenLogin extends Component{
    render() {
        return (
            <View style={{flex: 1}}>
                <Image style={{
                    resizeMode: 'cover',
                    position: 'absolute',
                    width: '100%',
                    height: '100%'
                }}
                blurRadius={2}
                source={Res.images.login_1}/>
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    alignItems: 'center'
                }}>
                    <Image source={Res.images.logo_full}
                        />
                </View>
            </View>
        );
    }
}