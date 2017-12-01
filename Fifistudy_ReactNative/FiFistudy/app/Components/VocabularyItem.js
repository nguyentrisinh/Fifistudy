import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  ScrollView,
} from 'react-native';
import Res from '../Resources/index';
import {ImageButton} from '../Components/index.js';

export default class VocabularyItem extends Component {
  render() {
    return(
      <View style={{
        flexDirection: 'row',
        width: '80%',
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 8,
        elevation: 6,
        backgroundColor: Res.colors.violet
      }}>
        <View style={{
            flex: 1,
            alignItems: 'center',
            marginLeft: 8
        }}>
            <Text style={{fontWeight: 'bold', marginBottom: 4}}>qriwyofu</Text>
            <Text style={{fontFamily: Res.fonts.common}}>afhw;hwejwfyahdhfslk wjfw hsh fk l/ afjksd fjlsj el fskdf kkkkkkkkkkkkkfjw</Text>
        </View>
        <View style={{top: 0, bottom: 0}}>
            <ImageButton source={Res.icons.close} tintColor='white'/>
        </View>
      </View>
    );
  }
}