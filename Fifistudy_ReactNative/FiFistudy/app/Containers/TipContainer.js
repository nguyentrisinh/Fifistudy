import React, { Component } from 'react';
import {
  FlatList
} from 'react-native';
import TipItem from '../Components/TipItem.js';
import Obj from '../Objects/ObjTemp.js';


export default class TipItemContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: Obj.tips
        }
    }

    renderItem(item) {
        return (
            <TipItem data={item}/>
        )
    }

    render(){
        return (
            <FlatList
            horizontal={false}
            numColumns={2}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            data={Obj.tips}
            keyExtractor={ID => ID}
            renderItem={({item}) => this.renderItem(item)}/>
        );
    }
}