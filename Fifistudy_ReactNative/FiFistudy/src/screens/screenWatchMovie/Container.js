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
import Utils from '../../Utils';
import ObjectFilm from './ObjectFilm';
import EpisodeCircleView from '../../components/EpisodeCircleView';
import ImageButton from '../../components/ImageButton';
import Resources from '../../resources/resources';
import Styles from './styles';


export default class WatchScreen extends Component {
    setEpisodeColor(item){
        // Cai object item se sua sau
        return item === ObjectFilm.episode ? Resources.colors.violet : Resources.colors.blue;
    }

    render(){
        const width = Dimensions.get('window').width;
        return (
            <View>
            <ScrollView style={{backgroundColor: Resources.colors.background}}
                        showsVerticalScrollIndicator={false}>
                {/* MEDIA PLAYER SECTION */}
                <View style={{
                    backgroundColor: 'black',
                    width: width,
                    height: width * Utils.RATIO,
                    }}>
                </View>
                {/* END MEDIA PLAYER SECTION */}

                {/* SUB SECTION */}
                <View style={{
                    backgroundColor: 'lightgray',
                    width: width,
                    height: width * Utils.RATIO,
                    }}>
                </View>
                {/* END SUB SECTION */}


                {/* TITLE SECTION */}
                <View style={Styles.titleContainer}>
                    <Text style={Styles.title}>{ObjectFilm.titleEnglish}</Text>
                    <Text style={Styles.subtitle}>{ObjectFilm.titleVietnamese}</Text>
                </View>


                {/* LIST EPISODE */}
                <FlatList 
                    contentContainerStyle={Styles.listEpisode}
                    horizontal={false}
                    numColumns={6}
                    showsHorizontalScrollIndicator={false}
                    data={ObjectFilm.listEpisode}
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