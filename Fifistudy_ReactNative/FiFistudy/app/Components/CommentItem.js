import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import {ImageButton} from '../Components/index.js';
import Styles from '../Styles/CommentItem.js';
import Res from '../Resources/index.js';

class CommentItem extends Component {
    getColor(comment){
        return comment.is_liked === true ? Res.colors.yellow : Res.colors.blue;
    }

    render() {
        const {data} = this.props;
        return (
            <View style={Styles.container}>
                <View style={Styles.horizontal}>
                    <View style={Styles.ava}>
                        <Image
                            source={{uri: data.avatar}}
                            //resizeMode='stretch'
                            style={Styles.ava}
                        />
                    </View>
                    <View style={Styles.commentContainer}>
                        <Text style={Styles.data}>{data.content}</Text>
                        <View style={Styles.likedContainer}>
                            <ImageButton source={Res.icons.like} tintColor={this.getColor(data)}/>
                            <Text style={[Styles.like_number, {color: this.getColor(data)}]}>{data.like_number}</Text>
                        </View>
                    </View>
                </View>
                <View style={Styles.line}>
                </View>
            </View>
        )
    }
}

export default CommentItem;