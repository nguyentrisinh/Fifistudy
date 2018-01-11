import React, { Component } from 'react';
import {
  FlatList
} from 'react-native';
import TipItem from '../Components/TipItem.js';

export default class TipItemContainer extends Component {
    renderItem(item) {
        return (
            <TipItem data={item}/>
        )
    }

    render(){
        const {data} = this.props;
        return (
            <FlatList
            horizontal={false}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => this.renderItem(item)}/>
        );
    }
}