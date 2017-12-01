import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
} from 'react-native';
import Res from '../Resources/index';
import {ImageButton} from '../Components/index.js';
import {VocabulariesContainer} from '../Containers/index.js';
import Styles from '../Styles/ScreenVocabulary.js'

export default class ScreenVolcabulary extends Component {
    render() {
        return(
            <View style={Styles.container}>
                {/* Title section */}
                <View style={Styles.titleContainer}>
                    <ImageButton source={Res.icons.back} tintColor={Res.colors.blue}/>
                    <Text style={Styles.title}>Từ vựng</Text>
                </View>
                <View style={Styles.line}/>
                
                <VocabulariesContainer/>
            </View>
        )
    }
}