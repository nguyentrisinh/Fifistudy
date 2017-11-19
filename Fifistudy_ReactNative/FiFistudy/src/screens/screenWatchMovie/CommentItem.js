import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Dimensions,
    FlatList,
} from 'react-native';
import Utils from '../../Utils';
import ObjectFilm from './ObjectFilm';
import CircleImage from '../../components/circleImage/CircleImage';
import ImageButton from '../../components/ImageButton';
import Resources from '../../resources/resources';

export default class CommentItem extends Component {
    render(){
        return (
            <View>
                <View style={{
                    width: Dimensions.get('window').width,
                    flexDirection: 'row'}}>
                    
                    <CircleImage source={Resources.image.default}/>

                    <View style={{flex: 1}}>
                        <Text style={{fontWeight: 'bold'}}>Name</Text>
                        <Text>qbwiu2wghlsnflksjoeuo
                            wegowufj
                            fjwhehfowjflks
                        </Text>
                        <ImageButton source={Resources.icons.like}/>
                    </View>
                </View>
                <View style={{
                    backgroundColor: 'gray',
                    width: '80%',
                    height: 1,
                    marginLeft: 16,
                    marginRight: 16
                }}/>
            </View>
        );
    }
}