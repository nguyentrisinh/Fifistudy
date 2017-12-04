import React, { Component } from 'react';
import { View, StatusBar, Text } from 'react-native';
import Orientation from 'react-native-orientation';
import styles from '../Styles/FullScreenWatch.js';
import MediaPlayerWithoutSub from '../Components/MediaPlayerWithoutSub.js';
export default class FullScreenWatch extends Component {
    componentWillMount() {
        Orientation.lockToLandscape();
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden />
                <MediaPlayerWithoutSub />
            </View>
        )
    }
}