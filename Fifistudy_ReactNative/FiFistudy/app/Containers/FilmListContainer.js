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
    constructor(props) {
        super(props);
        this.state = {
            dataSource: lsFilm
        }
    }

    render() {
        return (
            <FlatList
                style={{
                    marginLeft: 16,
                    marginRight: 16,
                    paddingTop: 8
                }}
                data={this.state.dataSource}
                keyExtractor={item => item.id}
                renderItem={({item}) => <FilmListItem data={item} navigation={this.props.navigation}/>}>
            </FlatList>
        );
    }
}