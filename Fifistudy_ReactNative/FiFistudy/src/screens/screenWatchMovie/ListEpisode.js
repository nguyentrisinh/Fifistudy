import React, {Component} from 'react';
import {
    FlatList,
} from 'react-native';
import EpisodeCircleView from '../../components/EpisodeCircleView';
import ObjectFilm from './ObjectFilm';


export default class ListEpisode extends Component {
    render(){
        return (
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={ObjectFilm.listEpisode}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <EpisodeCircleView episodeNumber={item} size={42} />
                )}                
            />
        );
    }
}