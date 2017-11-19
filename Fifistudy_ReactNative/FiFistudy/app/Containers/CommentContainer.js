import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList
} from 'react-native';
import { CommentItem } from '../Components/index.js';
import styles from '../Styles/CommentContainer.js';
import ObjComment from '../Objects/ObjComment.js';

class CommentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: ObjComment,
        }
    }

    renderCommentItem(item) {
        return (
            <CommentItem
                ava={item.avatar}
                comment={item.comment}
                liked={item.liked}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => this.renderCommentItem(item)}
                />
            </View>
        )
    }
}

export default CommentContainer;