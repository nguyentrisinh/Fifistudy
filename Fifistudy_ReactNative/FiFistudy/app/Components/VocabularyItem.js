import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  ScrollView,
} from 'react-native';
import Res from '../Resources/index';
import {ImageButton} from '../Components/index.js';
import Styles from '../Styles/VocabularyItem.js';

export default class VocabularyItem extends Component {
  render() {
    const {data} = this.props;
    return(
      <View style={Styles.container}>
        <ImageButton source={Res.icons.garbage} tintColor={Res.colors.gray}/>

        <View style={Styles.contentContainer}>
            <Text style={Styles.vocabulary}>{data.vocabulary}</Text>
            <Text style={Styles.meaning}>{data.meaning}</Text>
        </View>

        <ImageButton source={Res.icons.play} tintColor={Res.colors.blue}/>          
      </View>
    );
  }
}