import React, { Component } from 'react';
import {
  FlatList
} from 'react-native';
import FilmCard from '../Components/FilmCardItem.js';
import Obj from '../Objects/ObjTemp.js';
import {withNavigation} from 'react-navigation';


class FilmCardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //dataSource: Obj.newestFilms.splice(0, 4),
            dataSource: Obj.newestFilms,
        }
    }

    renderItem(item) {
        return (
            <FilmCard data={item} navigation={this.props.navigation}/>
        );
    }

    render(){
        return(
            <FlatList
                horizontal={false}
                numColumns={2}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                data={this.props.data}
                keyExtractor={ID => ID}
                renderItem={({item}) => this.renderItem(item)}/>
        );
    }
}

export default withNavigation(FilmCardContainer)

