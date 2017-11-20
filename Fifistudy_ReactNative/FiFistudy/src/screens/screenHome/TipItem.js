import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  Dimensions,
} from 'react-native';
import Resources from '../../resources/resources';
import ImageButton from '../../components/ImageButton';



export default class TipItem extends Component {
    render(){
        const {data} = this.props;
        const width = Dimensions.get('window').width;
        return (
            <View style={{
                width: width - 32,
                margin: 16,
                flexDirection: 'row',
                backgroundColor: Resources.colors.background,
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
                elevation: 3,
                alignItems: 'center'
            }}>
                <Image
                    style={{
                        marginTop: 3,
                        marginRight: 3,
                        marginLeft: 6,
                        marginRight: 6,
                        resizeMode: 'cover',
                        width: 80,
                        height: 60}}
                    source={{uri: 'http://www.corsielezioni.ch/oc-content/uploads/2/328_preview.jpg'}}/>

                <View style={{
                    width: 1,
                    backgroundColor: Resources.colors.line,
                    height: '82%'
                }}/>

                <Text numberOfLines={1} style={{maxWidth: width}}>{data.title}</Text>
            </View>
        );
    }
}