import React, {Component} from 'react';
import ListSub from './ListSub'
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
    ListView
} from 'react-native';
import ProgressController from '../screenWatchMovie/screenComment/ProgressController'
// import VideoFile from '../../resources/video/video.mp4'
import Video from 'react-native-video'
import Utils from '../../Utils';
import ObjectFilm from './ObjectFilm';
import Slider from "react-native-slider";
import EpisodeCircleView from '../../components/EpisodeCircleView';
import ImageButton from '../../components/ImageButton';
import Resources from '../../resources/resources';
import Styles from './styles';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: "stretch",
        justifyContent: "center"
    }
});
export default class WatchScreen extends Component {
    setEpisodeColor(item) {
        // Cai object item se sua sau
        return item === ObjectFilm.episode ? Resources.colors.violet : Resources.colors.blue;
    }


    timeString2s = (a, b) => {// time(HH:MM:SS.mss) // optimized
        // Chuyen dinh dang thoi gian cua sub thanh ms
        return a = a.split('.'), // optimized
            b = a[1] * 1 || 0, // optimized
            a = a[0].split(':'),
        b + (a[2] ? a[0] * 3600 + a[1] * 60 + a[2] * 1 : a[1] ? a[0] * 60 + a[1] * 1 : a[0] * 1) * 1e3 // optimized
    }

    constructor(props) {
        super(props);
        this.state = {
            sub: null,
            isPlay: true,
            text: "5",
            currentTime: 0, // moi lan seek video ko can phai thay doi gia tri cua currentTime chi can su dung api seek() thi su kien onProgress da co code tu cap nhat cho gia tri nay
            duration: 0,
            // value:0.2,
            volume: 1,
            isDragging: false, //Xac dinh xem nguoi dung co dang keo tua video ko,
            currentItem: null // Dong sub hien tai, duoc dua vao trong component ListSub de render ra style khacs= cho dong sub hien dang chay
        }
        fetch("http://studymovie.net/Cms_Data/Contents/admin/Media/sub-e-v/2ptd-Friends.S01E24.mHD.BluRay.DD5.1.x264-EPiK.Vie_Syned-24-e-v.vtt")
            .then(response => {
                return response._bodyText
            })
            .then(response => {
                let stringVTT = response.split(/\n\s*\n/);
                stringVTT.shift();
                let sub = stringVTT.map((item) => {
                    var parts = item.split("\n");
                    return {
                        number: parts[0],
                        start: this.timeString2s(parts[1].split('-->')[0].trim()) / 1000,
                        end: this.timeString2s(parts[1].split('-->')[1].trim()) / 1000,
                        sub: parts.slice(2, parts.length),
                    };
                });
                this.setState({
                    sub
                })
            })
            .catch(err => console.log(err))
    }


    // Xa video lay vi tri hien tai cong them thoi gian user nhap o input

    onClickSeekNext = () => {
        this.player.seek(this.state.currentTime + parseInt(this.state.text));
    }


    onClickSeekPrev = () => {
// Lay currentTime hien tai - di so luong da nhap trong input
        this.player.seek(this.state.currentTime - parseInt(this.state.text));

    }

    onClickPlayPauseButton = () => {
        this.setState({
            isPlay: !this.state.isPlay
        })
    }

    loadStart = (value) => {
        // Khi video lan dau init
        if (value.isNetwork == false) {
            // Bao loi ko co mang o day
        }
        if (!value.uri) {
            // Bao loi ko co video src tai day
        }
        // console.log('loadStart',value);
    }

    setDuration = (value) => {
        // Khi video load lan dau se lay thoi luong cua video
        console.log('SetDuration', value);
        this.setState({
            duration: value.duration
        })
    }

    onChangeVolume = (value) => {
        this.setState({
            volume: value
        })
    }

    onProgress = (value) => {
        if (this.state.sub) {
            let {currentTime} = value
            let currentItem = this.state.sub.find(o => ((o.start <= currentTime) && (o.end >= currentTime)));
            // console.log('currentItem',currentItem)
            if (currentItem) {
                if (this.state.currentItem == null) {
                    this.setState({
                        currentItem
                        // .replace(/<\/?[^>]+(>|$)/g, "") bo tag
                    });
                }
                else {
                    if (currentItem.number != this.state.currentItem.number) {
                        this.setState({
                            currentItem
                            // .replace(/<\/?[^>]+(>|$)/g, "") bo tag
                        });
                    }
                }
            }
        }
// Neu nguoi dung dang keo nut tua video thi return ko set State
        if (!this.state.isDragging) {
            this.setState({
                currentTime: value.currentTime
            })
        }


    }
    onDragSeekStart = () => {
        // Khi nguoi dung bat dau keo tua video
        this.setState({
            isDragging: true
        })
    }


    onDragSeekEnd = (value) => {
        // Khi nguoi dung keo de tua video, bat su kien da keo xong
        this.player.seek(value);
        this.setState({
            isDragging: false
        })
    }
    videoError = () => {
        // Code hien thi ui khi video loi viet tai day
    }

    onEnd = () => {
        //Chuyen qua tap moi tai day
    }
    onBuffer = (value) => {
        console.log('onBuffer')
    }


    render() {
        // console.log(this.state.sub);
        const width = Dimensions.get('window').width;
        return (
            <View>
                <ScrollView style={{backgroundColor: Resources.colors.background}}
                            showsVerticalScrollIndicator={false}>
                    {/* MEDIA PLAYER SECTION */}
                    <View style={{
                        position: "relative",
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
                        }}
                               source={{uri: "https://www.quirksmode.org/html5/videos/big_buck_bunny.mp4"}}   // Can be a URL or a local file.
                               ref={(ref) => {
                                   this.player = ref
                               }}
                               rate={0}                              // 0 is paused, 1 is normal.
                               volume={this.state.volume}                            // 0 is muted, 1 is normal.
                               muted={false}                           // Mutes the audio entirely.
                               paused={!this.state.isPlay}
                               resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
                               repeat={true}
                               autoplay={true}
                               onProgress={this.onProgress}
                               onLoadStart={this.loadStart} // Callback when video starts to load
                               onLoad={this.setDuration}
                               onError={this.videoError}
                               onEnd={this.onEnd}
                               onBuffer={this.onBuffer}
                               onTimedMetadata={this.onBuffer}
                        />
                        <ImageButton onPress={this.onPressPlay} source={Resources.icons.comment}
                                     tintColor={Resources.colors.pink}/>
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
                        <View style={styles.container}>
                            <Text>
                                SeekBar
                            </Text>
                            <Slider
                                minimumValue={0}
                                maximumValue={this.state.duration}
                                value={this.state.currentTime}
                                onSlidingComplete={this.onDragSeekEnd}
                                onSlidingStart={this.onDragSeekStart}
                                step={1}
                                // onValueChange={value => this.setState({ currentTime:value })}
                            />

                        </View>
                        <View style={styles.container}>
                            <Text>

                            </Text>
                            <Slider
                                minimumValue={0}
                                maximumValue={1}
                                value={this.state.volume}
                                // step={0.1}
                                onValueChange={this.onChangeVolume}
                            />

                        </View>
                    </View>
                    {/*END CONTROLS*/}


                    {/* SUB SECTION */}
                    <View style={{
                        backgroundColor: 'lightgray',
                        width: width,
                        height: width * Utils.RATIO,
                    }}>
                        {!!this.state.sub && <ListSub currentItem={this.state.currentItem} data={this.state.sub}/>}
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