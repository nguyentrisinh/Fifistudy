import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    FlatList,
    Button,
    TextInput,
    TouchableWithoutFeedback
} from 'react-native';
import TimerMixin from 'react-timer-mixin';
import Video from 'react-native-video';
import Slider from "react-native-slider";
import ObjFilm from '../Objects/ObjFilm.js';
import ObjEpisode from '../Objects/ObjEpisode.js';
import {ImageButton} from '../Components/index.js';
import Res from '../Resources/index.js';
import styles from '../Styles/MediaPlayer.js';


export default class MediaPlayer extends Component {
    constructor(props){
        super(props);
        this.state = {
            sub: null,
            isPlay: true,
            text: 10,
            currentTime: 0, 
            duration: 0,
            volume: 1,
            testText: '',
            isDragging: false, // xác định người dùng có đang kéo thanh tua video k,
            currentItem: null, // dòng sub hiện tại đang chạy.
            showControl: false, // xác định có hiển thị control mark hay không
        };

        this.events = {
            onProgress: this.onProgress.bind(this),
            onLoadStart: this.loadStart.bind(this),
            onLoad: this.setDuration.bind(this),
            onError: this.videoError.bind(this),
            onEnd: this.onEnd.bind(this),
            onBuffer: this.onBuffer.bind(this),

        };

        this.controls = {
            onClickPlayPauseButton: this.onClickPlayPauseButton.bind(this),
            onClickForward: this.onClickSeekNext.bind(this),
            onClickBack: this.onClickSeekPrev.bind(this),
            onDragSeekStart: this.onDragSeekStart.bind(this),
            onDragSeekEnd: this.onDragSeekEnd.bind(this),
            onChangeVolume: this.onChangeVolume.bind(this),
            onToggleControls: this.toggleControls.bind(this),
        };
    }


    // ===================== Events ============================
    onProgress(value) {
        if (this.state.sub) {
            let {currentTime} = value;
            //lay dong sub dang chay
            let currentItem = this.state.sub.find(o => (((o.start <= currentTime) && (o.end >= currentTime))));
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
        // Neu nguoi dung dang keo thanh tua video thi return ko set State
        if (!this.state.isDragging) {
            this.setState({  
                currentTime : value.currentTime
            })
        }
    }

    // Khi video mới init
    loadStart(value) {
        if (value.isNetwork == false) {
            // Báo lỗi không có mạng
        }
        if (!value.uri) {
            // Báo lỗi k tìm thấy video
        }
    }

    setDuration(value) {
        // Khi loadStart video cũng lấy thời lượng video
        this.setState({
            duration: value.duration,
        })
    }

    videoError() {
        // Hiển thị khi video bị lỗi (k có mã lỗi?)
    }

    onEnd() {
        // Khi set isPlay=false icon play sẽ tự đổi
        this.setState({
            isPlay: false,
        })

        // Chuyển tập mới
    }

    onBuffer(value) {
        // Đang load video ?
    }



    // ===================== Controls ============================
    onClickPlayPauseButton() {
        this.setState({
            isPlay: !this.state.isPlay,
        })
    }

    onClickSeekNext() {
        this.player.seek(this.state.currentTime + parseInt(this.state.text));
    }

    onClickSeekPrev() {
        this.player.seek(this.state.currentTime - parseInt(this.state.text));
    }

    onDragSeekStart() {
        // Khi nguoi dung bat dau keo tua video
        this.setState({
            isDragging: true
        })
    }

    onDragSeekEnd(value) {
        // Khi nguoi dung keo de tua video, bat su kien da keo xong
        this.player.seek(value);
        this.setState({
            isDragging: false
        })
    }

    onChangeVolume(value) {
        this.setState({
            volume: value
        })
    }



    showVolumeSlider() {
        return (
            <Slider style={{
                    position: 'absolute',
                    left: -20,
                    transform: [{rotate: '-90deg'}],
                    width: 100,
                }}
                trackStyle={{backgroundColor: '#757575'}}
                thumbStyle={{backgroundColor: 'white',}}
                minimumTrackTintColor='white'
                minimumValue={0}
                maximumValue={1}
                value={this.state.volume}
                // step={0.1}
                onValueChange={this.controls.onChangeVolume}
            />
        );
    }

    showPlayerControls() {
        const width = Dimensions.get('window').width;
        return (
            // Control mark
            <View style={{
                width: width,
                height: width * Res.ratio,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }}>
                <View style={{
                    flex: 1,
                    backgroundColor: 'black',
                    position: 'absolute'
                }}/>
                {/* Play, Pause, Back, Forward controls */}
                <View style={{
                    flexDirection: 'row',
                    width: width * 0.5,
                    justifyContent: 'space-between'
                }}>
                    <ImageButton
                        onPress={this.controls.onClickBack}
                        source={Res.icons.backSec}
                        tintColor='white'
                    />
                    <ImageButton
                        onPress={this.controls.onClickPlayPauseButton}
                        source={this.state.isPlay ? Res.icons.pause : Res.icons.play}
                        tintColor='white'
                        size={40}
                    />
                    <ImageButton
                        onPress={this.controls.onClickForward}
                        source={Res.icons.forwardSec}
                        tintColor='white'
                    />
                </View>

                {/* Volume, slider, zoom controls */}
                <View style={{
                    flexDirection: 'row',
                    position: 'absolute',
                    alignItems: 'center',
                    left: 8,
                    bottom: 0
                }}>
                    <View style={styles.container}>
                        <ImageButton
                            source={Res.icons.volume}
                            tintColor='white'
                        />
                    </View>
                    <Slider
                        style={{
                            width: width * 0.7,
                            margin: 8,
                        }}
                        trackStyle={{backgroundColor: '#757575'}}
                        thumbStyle={{backgroundColor: 'white',}}
                        minimumTrackTintColor='white'
                        minimumValue={0}
                        maximumValue={this.state.duration}
                        value={this.state.currentTime}
                        onSlidingComplete={this.controls.onDragSeekEnd}
                        onSlidingStart={this.controls.onDragSeekStart}
                        step={1}
                        // onValueChange={value => this.setState({ currentTime:value })}
                    />
                    <ImageButton
                        source={Res.icons.expand}
                        tintColor='white'/>
                </View>
            </View>
        );
    }

    hidePlayerControls(){
        this.setState({
            showControl: false,
            //testText: 'toggle off',
        })
    }

    toggleControls(){
        if (this.showControl) return;

        setTimeout(() => {
            this.setState({
                showControl: false,
                testText: 'toggle off',
            })
        }, 3000);
        this.setState({
            showControl: true,
            testText: 'toggle on',
        })
    }

    render() {
        const width = Dimensions.get('window').width;
        return (
            <View>
                {/* MEDIA PLAYER SECTION */}
                <TouchableWithoutFeedback onPress={this.controls.onToggleControls}>
                <View style={{
                    backgroundColor: 'black',
                    width: width,
                    height: width * Res.ratio,
                }}>
                    <Video style={{
                        flex: 1
                    }}
                        source={{uri: ObjEpisode.link_video}}   // Can be a URL or a local file.
                        ref={(ref) => this.player = ref}
                        rate={0}                              // 0 is paused, 1 is normal.
                        volume={this.state.volume}                            // 0 is muted, 1 is normal.
                        muted={false}                           // Mutes the audio entirely.
                        paused={!this.state.isPlay}
                        resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
                        repeat={false}
                        autoplay={true}
                        onProgress={this.events.onProgress}
                        onLoadStart={this.events.onLoadStart} // Callback when video starts to load
                        onLoad={this.events.onLoad}
                        onError={this.events.onError}
                        onEnd={this.events.onEnd}
                        onBuffer={this.events.onBuffer}
                        onTimedMetadata={this.events.onBuffer}
                    />
                    {this.state.showControl && this.showPlayerControls()}
                </View>
                </TouchableWithoutFeedback>
                {/* <Text>{this.state.testText}</Text> */}
                {/* END MEDIA PLAYER SECTION */}
                    

                {/* SUB SECTION */}
                {/* <View style={{
                    backgroundColor: 'lightgray',
                    width: width,
                    height: width * Utils.RATIO,
                }}>
                    {!!this.state.sub && <ListSub currentItem={this.state.currentItem} data={this.state.sub}/>}
                </View> */}
                {/* END SUB SECTION */}
            </View>
        );
    }
}