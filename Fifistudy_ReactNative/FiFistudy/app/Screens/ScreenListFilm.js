import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
import {ImageButton} from '../Components/index.js';
import {FilmListContainer} from '../Containers/index.js';
import Res from '../Resources/index.js';
import Styles from '../Styles/ScreenListFilm.js';
import {films} from '../Objects/ObjFilms.js';

export const ScreenListFilmType = {
    CATEGORY: 'CATEGORY',
    DIFICULTY: 'DIFICULTY',
    HISTORY: 'HISTORY',
    BOOKMARKED: 'BOOKMARK',
    NEWEST_FILMS: 'NEWEST_FILMS',
    MOST_VIEWED: 'MOST_VIEWED'
};

export default class ScreenListFilm extends Component {
    getDataResult(){
        const {params} = this.props.navigation.state;
        let result = films;
        // switch (params.type){
        //     case ScreenListFilmType.CATEGORY:
        //         break;

        //     case ScreenListFilmType.DIFICULTY:
        //         films.forEach(f => {
        //             if (params.difficultLevel !== undefined && params.difficultLevel && f.difficult_level === params.difficultLevel) {
        //                 result.push(f);
        //                 return;
        //             }
        //         });
        //         break;

        //     case ScreenListFilmType.HISTORY:
        //         break;

        //     case ScreenListFilmType.BOOKMARKED:
        //         break;

        //     case ScreenListFilmType.NEWEST_FILMS:
        //         break;

        //     case ScreenListFilmType.MOST_VIEWED:
        //         break;
            
        //     default:
        //         break;
        // }
        return result;
    }

    render() {
        const {navigation} = this.props;
        const {params} = navigation.state;

        return (
            <View style={Styles.container}>
                <View style={Styles.titleContainer}>
                    <ImageButton source={Res.icons.back} tintColor={Res.colors.blue}
                        onPress={() => navigation.navigate('ScreenHome')}/>
                    <Text style={Styles.title}>{params.title}</Text>
                </View>
                <View style={Styles.line}/>

                <FilmListContainer navigation={navigation} data={this.getDataResult()}/>
            </View>
        )
    }
}
