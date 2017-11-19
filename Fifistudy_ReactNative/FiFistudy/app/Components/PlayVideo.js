import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import Video from 'react-native-video';
import styles from '../Styles/PlayVideo.js';
import ObjVideo from '../Objects/ObjVideo.js';

class PlayVideo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rate: 1,
            volume: 1,
            muted: false,
            resizeMode: 'contain',
            duration: 0.0,
            currentTime: 0.0,
            paused: true,
        }
    }

    changeStatePause() {
        this.setState({
            paused: !this.state.paused
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.fullScreen}
                    onPress={() => this.changeStatePause}
                >
                    <Video
                        style={styles.fullScreen}
                        source={ObjVideo}
                        rate={this.state.rate}
                        paused={this.state.paused}
                        volume={this.state.volume}
                        muted={this.state.muted}
                        resizeMode={this.state.resizeMode}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

export default PlayVideo;