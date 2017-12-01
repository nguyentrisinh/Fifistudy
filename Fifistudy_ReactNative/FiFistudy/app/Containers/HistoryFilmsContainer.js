import React, { Component } from 'react';
import {
    View,
    FlatList,
    Image
} from 'react-native';
import styles from '../Styles/HistoryFilmsContainer.js';
import Obj from '../Objects/ObjTemp.js';

class HistoryFilmsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: Obj.historyFilms,
        }
    }

    renderItem(item) {
        return (
            <Image source={{uri: item.url}} style={styles.historyFilmImg} resizeMode='stretch'/>
        );
    }

    render() {
        return (
            <View style={styles.listHistoryFilm}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={this.state.dataSource}
                    keyExtractor={ID => ID}
                    renderItem={({item}) => this.renderItem(item)}/>
            </View>
        );
    }
}

export default HistoryFilmsContainer;