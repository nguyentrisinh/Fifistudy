import React, {Component} from 'react';
import{
    FlatList,
} from 'react-native';
import {vocabularies} from '../Objects/ObjVocabularies.js';
import { VocabularyItem } from '../Components/index.js';

export default class VocabulariesContainer extends Component {
    renderCommentItem(item) {
        return (
            <VocabularyItem data={item} navigation={this.props.navigation}/>
        )
    }

    render() {
        return (
            <FlatList
                style={{flex: 1}}
                contentContainerStyle={{alignItems: 'center'}}
                showsVerticalScrollIndicator={false}
                data={vocabularies}
                keyExtractor={item => item.id}
                renderItem={({item}) => this.renderCommentItem(item)}/>
        );
    }
}