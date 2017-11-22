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
import { EpisodeCircleView, ImageButton} from '../Components/index.js';
import Resources from '../Resources/index.js';
import Styles from '../Styles/ScreenWatchMovie';

import ObjEpisode from '../Objects/ObjEpisode.js';
import ObjFilm from '../Objects/ObjFilm.js';

export default class WatchScreen extends Component {
    setEpisodeColor(item){
        // Cai object item se sua sau
        return item == ObjEpisode.number ? Resources.colors.violet : Resources.colors.blue;
    }

    render(){
        const width = Dimensions.get('window').width;
        return (
            <View style={{flex: 1}}>
            <ScrollView style={{backgroundColor: Resources.colors.background}}
                        showsVerticalScrollIndicator={false}>
                {/* MEDIA PLAYER SECTION */}
                <View style={{
                    backgroundColor: 'black',
                    width: width,
                    height: width * Resources.ratio,
                    }}>
                </View>
                {/* END MEDIA PLAYER SECTION */}

                {/* SUB SECTION */}
                <View style={{
                    backgroundColor: 'lightgray',
                    width: width,
                    height: width * Resources.ratio,
                    }}>
                </View>
                {/* END SUB SECTION */}


                {/* TITLE SECTION */}
                <View style={Styles.titleContainer}>
                    <Text style={Styles.title}>{ObjFilm.english_name}</Text>
                    <Text style={Styles.subtitle}>{ObjEpisode.name}</Text>
                </View>


                {/* LIST EPISODE */}
                <FlatList 
                    contentContainerStyle={Styles.listEpisode}
                    horizontal={false}
                    numColumns={6}
                    showsHorizontalScrollIndicator={false}
                    data={ObjFilm.episodes}
                    keyExtractor={item => item}
                    renderItem={({item}) => (
                        <EpisodeCircleView
                            episodeNumber={item}
                            size={42}
                            color={this.setEpisodeColor(item)}
                        />
                    )}                
                />
               
            </ScrollView>
                {/* TOOLBAR SECTION */}
                <View style={Styles.toolbar}>
                    <ImageButton source={Resources.icons.comment} tintColor={Resources.colors.pink}/>
                    <ImageButton source={Resources.icons.quiz} tintColor={Resources.colors.pink}/>
                    <ImageButton source={Resources.icons.volcabulary} tintColor={Resources.colors.pink}/>
                </View>
            </View>
        );
    }
}