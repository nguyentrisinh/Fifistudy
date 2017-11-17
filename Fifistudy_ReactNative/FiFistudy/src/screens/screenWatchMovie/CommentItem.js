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
import Styles from './commentItemStyles';
import Resources from '../../resources/resources';

export default class CommentItem extends Component {
    render(){
        return (
            <View style={Styles.container}>
                {/* Account's Avatar */}
                <View>
                    <CircleImage source={Resources.image.avatar}/>
                </View>

                <View style={Styles.contentContainer}>
                    <View style={Styles.headerContainer}>
                        {/* Account's first_name last_name */}                        
                        <Text style={Styles.accountName}>Firstname Lastname</Text>
                        {/* Created date */}
                        <Text style={Styles.dateTime}>50 phút</Text>
                    </View>

                    {/* Comment content */}
                    <Text style={Styles.comment} >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Text>

                    {/* Liked view */}
                    <View style={Styles.likedContainer}>
                        <ImageButton source={Resources.icons.like} tintColor={Resources.colors.blue}/>
                        <Text style={Styles.likedNum}>23</Text>
                    </View>

                    {/* Line */}
                    <View style={Styles.line}/>
                </View>
            </View>
        );
    }
}