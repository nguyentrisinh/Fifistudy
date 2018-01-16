import React, { Component } from 'react';
import {
  FlatList
} from 'react-native';
import FilmCard from '../Components/FilmCardItem.js';
import {withNavigation} from 'react-navigation';


export default class FilmCardContainer extends Component {
    renderItem(item) {
        return (
            <FilmCard data={item} navigation={this.props.navigation}/>
        );
    }

    render(){
        const {data} = this.props;
        return(
            <FlatList
                horizontal={false}
                numColumns={2}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                data={data.splice(0, 4)}
                keyExtractor={item => item.id}
                renderItem={({item}) => this.renderItem(item)}/>
        );
    }
}

