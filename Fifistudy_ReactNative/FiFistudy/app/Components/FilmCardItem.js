import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
<<<<<<< HEAD
    TouchableOpacity,
=======
    TouchableOpacity
>>>>>>> phuong
} from 'react-native';
import Styles from '../Styles/FilmCardItem';
import Res from '../Resources/index';
import ImageButton from '../Components/ImageButton';
import EpisodeCircleView from '../Components/EpisodeCircleView';

export default class FilmCard extends Component {
<<<<<<< HEAD

    constructor(props){
        super(props)
    }
    bookmark(film) {
=======
    setBookmark(film){
>>>>>>> phuong
        if (film.isBookmark)
            return (
                <View style={[Styles.bookmark, {}]}>
                    <ImageButton source={Res.icons.bookmarkFull} tintColor={Res.colors.yellow} />
                </View>
            );
    }

    getLevelColor(film) {
        let color = Res.colors.levelEasy;

        if (film.level === 2)
            color = Res.colors.levelMedium;
        if (film.level === 3)
            color = Res.colors.levelHard;

        return color;
    }

    render() {
<<<<<<< HEAD
        const { data } = this.props;
        console.disableYellowBox = true;
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ScreenMovies')}
                style={Styles.container}>
                {this.bookmark(data)}
                {/* Episode Group */}
                <View style={Styles.episodeGroup}>
                    <EpisodeCircleView episodeNumber={data.newestEpisode} elevation={6} />
                </View>

                {/* Film's image */}
                <View style={Styles.groupFilmImgLevel}>
                    <Image source={{ uri: data.filmImage }}
                        style={Styles.filmImg} />
                    {/* Level line */}
                    <View style={[Styles.levelLine, { backgroundColor: this.getLevelColor(data) }]} />
                </View>

                {/* Title group */}
                <View style={Styles.titleGroup}>
                    <Text style={Styles.titleEnglish}>{data.titleEnglish}</Text>
                    <Text style={Styles.titleVietnamese}>{data.titleVietnamese}</Text>
                </View>
            </TouchableOpacity>
        );
=======
        const {data} = this.props;
        return(
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ScreenMovies')}>
                <View style={Styles.container}>
                    {this.setBookmark(data)}
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
            </TouchableOpacity>
        ); 
>>>>>>> phuong
    }
}