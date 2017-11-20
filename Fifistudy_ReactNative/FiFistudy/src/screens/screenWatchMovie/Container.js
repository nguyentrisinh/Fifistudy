import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    ScrollView,
    Dimensions,
    TextInput,
    Button,
    FlatList,
    Slider,
    ListView
} from 'react-native';
import ProgressController from '../screenWatchMovie/screenComment/ProgressController'
// import VideoFile from '../../resources/video/mov_bbb.mp4'
import Video from 'react-native-video'
import Utils from '../../Utils';
import ObjectFilm from './ObjectFilm';
import EpisodeCircleView from '../../components/EpisodeCircleView';
import ImageButton from '../../components/ImageButton';
import Resources from '../../resources/resources';
import Styles from './styles';
let styles = StyleSheet.create({
    fullScreen: {flex: 1, backgroundColor: "black"},
    controller: {
        height: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    controllerButton: {height: 20, width: 20},
    videoView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    progressBar: {
        alignSelf: "stretch",
        margin: 20
    },
    videoContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    videoIcon: {
        position: "relative",
        alignSelf: "center",
        width: 79,
        height: 78,
        bottom: 0,
        left: 0,
        right: 0,
        top: 0
    }
});

export default class WatchScreen extends Component {
    setEpisodeColor(item){
        // Cai object item se sua sau
        return item === ObjectFilm.episode ? Resources.colors.violet : Resources.colors.blue;
    }

    constructor(props){
        super(props);
        this.state = {
            isPlay:true,
            text:"5",
            currentTime:0,
            duration:0,
        }
    }


    // Xa video lay vi tri hien tai cong them thoi gian user nhap o input

    onClickSeekNext = () =>{
        this.player.seek(this.state.currentTime+ parseInt(this.state.text));
    }


    onClickSeekPrev = () =>{

        this.player.seek(this.state.currentTime - parseInt(this.state.text));

    }

    onClickPlayPauseButton = () =>{
        this.setState({
            isPlay:!this.state.isPlay
        })
    }

    loadStart = (value)=>{
        console.log('loadStart',value);
    }

    setDuration=  (value)=>{
        console.log('SetDuration',value);
        this.setState({
            duration:value.duration
        })
    }

    onProgress = (value)=>{
        this.setState({
            currentTime:value.currentTime
        })
    }

    getCurrentTimePercentage = (currentTime, duration)=> {
        if (currentTime > 0) {
            return parseFloat(currentTime) / parseFloat(duration);
        } else {
            return 0;
        }
    }

    onProgressChanged(newPercent, paused) {
        let {duration} = this.state;
        let newTime = newPercent * duration / 100;
        this.setState({currentTime: newTime, paused: paused});
        this.player.seek(newTime);
    }


    render(){
        let {currentTime, duration} = this.state;
        const completedPercentage = this.getCurrentTimePercentage(currentTime, duration) * 100;
        const width = Dimensions.get('window').width;
        return (
            <View>
            <ScrollView style={{backgroundColor: Resources.colors.background}}
                        showsVerticalScrollIndicator={false}>
                {/* MEDIA PLAYER SECTION */}
                <View style={{
                    position:"relative",
                    backgroundColor: 'black',
                    width: width,
                    height: width * Utils.RATIO,
                    }}>
                    <Video style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                    }} source={{uri:"http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" }}   // Can be a URL or a local file.
                           ref={(ref) => {
                               this.player = ref
                           }}
                           rate={1.0}                              // 0 is paused, 1 is normal.
                           volume={1.0}                            // 0 is muted, 1 is normal.
                           muted={false}                           // Mutes the audio entirely.
                           paused={!this.state.isPlay} resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
                           repeat={true}
                           autoplay={true}
                           onProgress={this.onProgress}
                           onLoadStart={this.loadStart} // Callback when video starts to load
                           onLoad={this.setDuration}
                    />
                    <ImageButton onPress={this.onPressPlay} source={Resources.icons.comment} tintColor={Resources.colors.pink}/>
                </View>
                {/* END MEDIA PLAYER SECTION */}

                {/*CONTROL*/}
<View>
    <Button
        onPress={this.onClickPlayPauseButton}
        title="Play/Pause"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
    />
    <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
    />
    <Button
        onPress={this.onClickSeekNext}
        title="Next"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
    />
    <Button
        onPress={this.onClickSeekPrev}
        title="Previous"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
    />
    <View style={[styles.controller]}>
        <View
            style={[styles.progressBar]}>
    <ProgressController duration={duration}
                        currentTime={currentTime}
                        percent={completedPercentage}
                        onNewPercent={this.onProgressChanged.bind(this)}/>
        </View>
    </View>
</View>
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