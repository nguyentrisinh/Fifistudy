import React, { Component } from 'react';
import {
    FlatList,
    Text,
    View,
} from 'react-native';
import {FilmListItem} from '../Components/index.js'
import styles from '../Styles/ScreenSearchFilm.js';
import lsFilm from '../Objects/ObjFilms.js';
import Res from '../Resources/index.js';

export default class FilmListContainer extends Component {
    render() {
        const {navigation, data} = this.props;
        return (
            <FlatList
                style={{
                    marginLeft: 16,
                    marginRight: 16,
                    paddingTop: 8
                }}
                data={data}
                keyExtractor={item => item.id}
                renderItem={({item}) => <FilmListItem navigation={navigation} data={item}/>}>
            </FlatList>
        );
    }
}

