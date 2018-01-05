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
        return item.number == this.props.episodeData.number ? Resources.colors.violet : Resources.colors.blue;
    }

    componentWillMount() {
        Orientation.lockToPortrait();
    }

    render() {
        const {filmData} = this.props;
        let episodes = filmData.episodes.sort((a,b)=>parseInt(a.number)-parseInt(b.number));

        return (
            <View style={Styles.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <MediaPlayer data={this.props.episodeData} navigation={this.props.navigation} />

                    {/* TITLE SECTION */}
                    <View style={Styles.titleContainer}>
                        <Text style={Styles.title}>{filmData.english_name}</Text>
                        <Text style={Styles.subtitle}>{filmData.vietnamese_name}</Text>
                    </View>


                    {/* LIST EPISODE */}
                    <FlatList
                        contentContainerStyle={Styles.listEpisode}
                        horizontal={false}
                        numColumns={6}
                        showsHorizontalScrollIndicator={false}
                        data={episodes}
                        keyExtractor={item => item.number}
                        renderItem={({item}) => (
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