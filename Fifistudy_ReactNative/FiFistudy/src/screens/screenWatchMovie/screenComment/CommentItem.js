import React, {Component} from 'react';
import {
    Text,
    Image,
    View,
    FlatList,
} from 'react-native';
import ObjectFilm from '../ObjectFilm';
import AvatarView from '../../../components/avatarView/AvatarView';
import ImageButton from '../../../components/ImageButton';
import Styles from './commentItemStyles';
import Resources from '../../../resources/resources';

import ObjectComment from './ObjectComment';

export default class CommentItem extends Component {
    render(){
        const likedColor = ObjectComment.isLiked === true ? Resources.colors.yellow : Resources.colors.blue;
        return (
            <View style={Styles.container}>
                {/* Account's Avatar */}
                <View>
                    <AvatarView source={{uri: ObjectComment.userAvatar}}/>
                </View>

                <View style={Styles.contentContainer}>
                    <View style={Styles.headerContainer}>
                        {/* Account's first_name last_name */}                        
                        <Text style={Styles.accountName}>{ObjectComment.firstName} {ObjectComment.lastName}</Text>
                        {/* Created date */}
                        <Text style={Styles.dateTime}>{ObjectComment.dateTime}</Text>
                    </View>

                    {/* Comment content */}
                    <Text style={Styles.comment}>{ObjectComment.content}</Text>

                    {/* Liked view */}
                    <View style={Styles.likedContainer}>
                        <ImageButton source={Resources.icons.like} tintColor={likedColor}/>
                        <Text style={[Styles.likedNum, {color: likedColor}]}>{ObjectComment.likedNum}</Text>
                    </View>

                    {/* Line */}
                    <View style={Styles.line}/>
                </View>
            </View>
        );
    }
}