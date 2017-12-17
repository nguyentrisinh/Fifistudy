import React, { Component } from 'react';
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
import { EpisodeCircleView, ImageButton, MediaPlayer } from '../Components/index.js';
import Resources from '../Resources/index.js';
import Styles from '../Styles/ScreenWatchMovie.js';
import ObjEpisode from '../Objects/ObjEpisode.js';
import ObjFilm from '../Objects/ObjFilm.js';
import {withNavigation} from 'react-navigation';

class WatchScreen extends Component {
    setEpisodeColor(item) {
        // Cai object item se sua sau
        return item == ObjEpisode.number ? Resources.colors.violet : Resources.colors.blue;
    }

    componentWillMount() {


        console.log('screenWatchMoviehihi',this.props.data);
        Orientation.lockToPortrait();
    }

    render() {
        const width = Dimensions.get('window').width;
        const {film} = this.props;
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ backgroundColor: Resources.colors.background }}
                    showsVerticalScrollIndicator={false}>
                    {/* MEDIA PLAYER SECTION */}
                    <MediaPlayer data={this.props.data} navigation={this.props.navigation} />
                    {/* END MEDIA PLAYER SECTION */}

                    {/* SUB SECTION */}
                    {/* <View style={{
                    backgroundColor: 'lightgray',
                    width: width,
                    height: width * Resources.ratio,
                    }}>
                </View> */}
                    {/* END SUB SECTION */}


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
                        data={this.props.film.episodes.sort((a,b)=>parseInt(a.number)-parseInt(b.number))}
                        keyExtractor={item => item}
                        renderItem={({ item }) => (
                            <EpisodeCircleView
                                episodeNumber={item.number}
                                size={42}
                                color={this.setEpisodeColor(item)}
                            />
                        )}
                    />

                </ScrollView>
                {/* TOOLBAR SECTION */}
                <View style={Styles.toolbar}>
                    <ImageButton source={Resources.icons.back} tintColor={Resources.colors.pink}
                        onPress={() => this.props.navigation.navigate('ScreenMovies')}/>
                    <ImageButton source={Resources.icons.comment} tintColor={Resources.colors.pink}
                        onPress={() => this.props.navigation.navigate('ScreenEpisodeComment')} />
                    {/* <ImageButton source={Resources.icons.quiz} tintColor={Resources.colors.pink}/> */}
                    <ImageButton source={Resources.icons.volcabulary} tintColor={Resources.colors.pink}
                        onPress={() => this.props.navigation.navigate('ScreenVocabulary')} />
                </View>
            </View>
        );
    }
}
export default withNavigation(WatchScreen)