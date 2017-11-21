import React, { Component } from 'react';
import {
  FlatList
} from 'react-native';
import FilmCard from '../Components/FilmCardItem.js';
import Obj from '../Objects/ObjTemp.js';


export default class FilmCardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: Obj.newestFilms
        }
    }

    renderItem(item) {
        return (
            <FilmCard data={item}/>
        );
    }

    render(){
        return(
            <FlatList
                horizontal={false}
                numColumns={2}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                data={Obj.newestFilms}
                keyExtractor={ID => ID}
                renderItem={({item}) => this.renderItem(item)}/>
        );
    }
}