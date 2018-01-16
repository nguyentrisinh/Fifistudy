import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList
} from 'react-native';
import { CommentItem } from '../Components/index.js';
import {filmDetailComments} from '../Objects/ObjComments.js';
import styles from '../Styles/CommentContainer.js';

class CommentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: filmDetailComments,
        }
    }

    renderCommentItem(item) {
        return (
            <CommentItem data={item}/>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.state.dataSource}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => this.renderCommentItem(item)}
                />
            </View>
        )
    }
}

export default CommentContainer;