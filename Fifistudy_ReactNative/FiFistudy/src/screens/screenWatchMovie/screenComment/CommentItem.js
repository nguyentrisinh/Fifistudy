import React, {Component} from 'react';
import {
    Text,
    Image,
    View,
    FlatList,
} from 'react-native';
import AvatarView from '../../../components/avatarView/AvatarView';
import ImageButton from '../../../components/ImageButton';
import Styles from './commentItemStyles';
import Resources from '../../../resources/resources';

export default class CommentItem extends Component {
    getColor(comment){
        return comment.isLiked === true ? Resources.colors.yellow : Resources.colors.blue;
    }

    render(){
        const {data} = this.props;
        
        return (
            <View style={Styles.container}>
                {/* Account's Avatar */}
                <View>
                    <AvatarView source={{uri: data.userAvatar}}/>
                </View>

                <View style={Styles.contentContainer}>
                    <View style={Styles.headerContainer}>
                        {/* Account's first_name last_name */}                        
                        <Text style={Styles.accountName}>{data.firstName} {data.lastName}</Text>
                        {/* Created date */}
                        <Text style={Styles.dateTime}>{data.dateTime}</Text>
                    </View>

                    {/* Comment content */}
                    <Text style={Styles.data}>{data.content}</Text>

                    {/* Liked view */}
                    <View style={Styles.likedContainer}>
                        <ImageButton source={Resources.icons.like} tintColor={this.getColor(data)}/>
                        <Text style={[Styles.likedNum, {color: this.getColor(data)}]}>{data.likedNum}</Text>
                    </View>

                    {/* Line */}
                    <View style={Styles.line}/>
                </View>
            </View>
        );
    }
}