import React, {Component} from 'react';
import{
    FlatList,
} from 'react-native';
import {episodeComments} from '../Objects/ObjComments.js';
import {
    EpisodeCommentItem
} from '../Components/index.js';

export default class EpisodeCommentContainer extends Component {
    renderCommentItem(item) {
        return (
            <EpisodeCommentItem data={item}/>
        )
    }

    render() {
        return (
            <FlatList
                style={{flex: 1}}
                data={episodeComments}
                keyExtractor={item => item.id}
                renderItem={({item}) => this.renderCommentItem(item)}/>
        );
    }
}