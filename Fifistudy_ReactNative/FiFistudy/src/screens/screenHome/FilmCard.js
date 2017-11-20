import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
} from 'react-native';
import Styles from './filmCardStyles';
import Resources from '../../resources/resources';
import ImageButton from '../../components/ImageButton';
import EpisodeCircleView from '../../components/EpisodeCircleView';

export default class FilmGroup extends Component {

    bookmark(film){
        if (film.isBookmark)
            return (
                <View style={[Styles.bookmark, {}]}>
                    <ImageButton source={Resources.icons.bookmarkFull} tintColor={Resources.colors.yellow}/>
                </View>
            );
    }

    getLevelColor(film){
        let color = Resources.colors.levelEasy;

        if (film.level === 2)
            color = Resources.colors.levelMedium;
        if (film.level === 3)
            color = Resources.colors.levelHard;

        return color;
    }

    render() {
        const {data} = this.props;
        return(
            <View style={Styles.container}>
                {this.bookmark(data)}
                {/* Episode Group */}
                <View style={Styles.episodeGroup}>
                    <EpisodeCircleView episodeNumber={data.newestEpisode} elevation={6}/>
                </View>

                {/* Film's image */}
                <View style={Styles.groupFilmImgLevel}>
                    <Image source={{uri: data.filmImage}}
                            style={Styles.filmImg}/>
                    {/* Level line */}
                    <View style={[Styles.levelLine, {backgroundColor: this.getLevelColor(data)}]}/>
                </View>

                {/* Title group */}
                <View style={Styles.titleGroup}>
                    <Text style={Styles.titleEnglish}>{data.titleEnglish}</Text>
                    <Text style={Styles.titleVietnamese}>{data.titleVietnamese}</Text>
                </View>                        
            </View>
        ); 
    }
}