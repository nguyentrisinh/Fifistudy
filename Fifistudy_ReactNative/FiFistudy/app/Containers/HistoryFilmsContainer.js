import React, { Component } from 'react';
import {
    View,
    FlatList,
    Image,
    TouchableWithoutFeedback
} from 'react-native';
import styles from '../Styles/HistoryFilmsContainer.js';

class HistoryFilmsContainer extends Component {
    renderItem(item) {
        return (
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('ScreenMovies', {film: item})}>
                <Image source={item.thumbnail} style={styles.historyFilmImg}/>
            </TouchableWithoutFeedback>
        );
    }

    render() {
        const {data} = this.props;
        return (
            <View style={styles.listHistoryFilm}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => this.renderItem(item)}/>
            </View>
        );
    }
}

export default HistoryFilmsContainer;