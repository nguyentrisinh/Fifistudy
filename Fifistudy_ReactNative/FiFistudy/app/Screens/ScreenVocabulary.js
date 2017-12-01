import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  ScrollView,
} from 'react-native';
import Res from '../Resources/index';
import {ImageButton} from '../Components/index.js';
import Obj from '../Objects/ObjVocabularies.js';
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

                <View style={{
                    flex: 1,
                    alignItems: 'center'
                }}>
                    
                </View>
            </View>
        )
    }
}