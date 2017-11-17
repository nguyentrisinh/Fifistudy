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
} from 'react-native';
import Utils from '../../Utils';
import ObjectFilm from './ObjectFilm';
import EpisodeCircleView from '../../components/EpisodeCircleView';
import ImageButton from '../../components/ImageButton';
import CommentItem from './CommentItem';
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
                    style={{marginBottom: 16}}
                    horizontal={true}
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

                {/* COMMENT SECTION */}
                <View style={Styles.commentContainer}>
                    <Text style={Styles.text}>Bình luận</Text>

                    {/* Enter comment section */}
                    <View style={Styles.enterCommentContainer}>
                        <TextInput style={{flex: 1}} multiline={true} blurOnSubmit={false}/>
                        <ImageButton source={Resources.icons.send}/>
                    </View>

                    {/* List comment */}
                    <FlatList
                    data={ObjectFilm.comments}
                    keyExtractor={item => item.ID}
                    renderItem={({item}) => (
                        <CommentItem/>
                    )}/>
            </View>
            </ScrollView>
        );
    }
}