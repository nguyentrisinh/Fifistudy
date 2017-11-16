import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,
    Dimensions,
} from 'react-native';
import Utils from '../../Utils';
import CircleImage from '../../components/circleImage/CircleImage';
import ImageButton from '../../components/ImageButton';
import Resources from '../../resources/resources';

export default class EnterCommentView extends Component {
    render() {
        return (
            <View style={{
                flexDirection: 'row',
                width: Dimensions.get('window').width,
            }}>
                <TextInput style={{flex: 1}} multiline={true} blurOnSubmit={false}/>
                <ImageButton source={Resources.icons.send}/>
            </View>
        );
    }
}