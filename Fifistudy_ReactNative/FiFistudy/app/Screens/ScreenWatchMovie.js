import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    ScrollView,
    Dimensions,
    TextInput,
    FlatList,
    ListView
} from 'react-native';
import Orientation from 'react-native-orientation';
import {EpisodeCircleView, ImageButton, MediaPlayer} from '../Components/index.js';
import Resources from '../Resources/index.js';
import Styles from '../Styles/ScreenWatchMovie.js';
import {episodes} from '../Objects/ObjEpisodes.js';

export default class WatchScreen extends Component {
    setEpisodeColor(item) {
        const {epData} = this.props.navigation.state.params;
        return item.number == epData.number ? Resources.colors.violet : Resources.colors.blue;
    }

    componentWillMount() {
        Orientation.lockToPortrait();
    }

    onClickButtonEpisode(episodeNumber){
        //const {filmData} = this.props;
        //console.log(filmData.slug,episodeNumber)
        // this.props.navigation.navigate('ScreenWatchMovie',{film:filmData,filmSlug:filmData.slug,episodeId:episode.id});
        //this.props.getEpisode(filmData.slug, episodeNumber);
    }

    getEpisodes(film) {
        let listEpisode = [];
        episodes.forEach(e => {
            if (e.film_id === film.id)
            listEpisode.push(e);
        });
        return listEpisode.sort((a, b) => parseInt(a.number) - parseInt(b.number));
    }

    render() {
        const {film} = this.props.navigation.state.params;
        const {epData} = this.props.navigation.state.params;
        let listEpisode = this.getEpisodes(film);

        return (
            <View style={Styles.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <MediaPlayer data={epData} navigation={this.props.navigation}/>

                    {/* TITLE SECTION */}
                    <View style={Styles.titleContainer}>
                        <Text style={Styles.title}>{film.english_name}</Text>
                        <Text style={Styles.subtitle}>{film.vietnamese_name}</Text>
                    </View>


                    {/* LIST EPISODE */}
                    <FlatList
                        contentContainerStyle={Styles.listEpisode}
                        horizontal={false}
                        numColumns={6}
                        showsHorizontalScrollIndicator={false}
                        data={listEpisode}
                        key={item => item.id}
                        renderItem={({item}) => (
                            <EpisodeCircleView onClickButton={this.onClickButtonEpisode(item.number)}
                                               episodeNumber={item.number}
                                               episodeId = {item.id}
                                               size={42}
                                               color={this.setEpisodeColor(item)}
                            />
                        )}
                    />

                </ScrollView>
                {/* TOOLBAR SECTION */}
                <View style={Styles.toolbar}>
                    <ImageButton source={Resources.icons.back} tintColor={Resources.colors.pink}
                                 onPress={() => this.props.navigation.navigate('ScreenMovies', {film: film})}/>
                    <ImageButton source={Resources.icons.comment} tintColor={Resources.colors.pink}
                                 onPress={() => this.props.navigation.navigate('ScreenEpisodeComment')}/>
                    {/* <ImageButton source={Resources.icons.quiz} tintColor={Resources.colors.pink}/> */}
                    <ImageButton source={Resources.icons.volcabulary} tintColor={Resources.colors.pink}
                                 onPress={() => this.props.navigation.navigate('ScreenVocabulary')}/>
                </View>
            </View>
        );
    }
}
