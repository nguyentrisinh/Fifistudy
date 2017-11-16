import React, { Component } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

import styles from '../Styles/ScreenMovies.js';
import res from '../Resources/index.js';
import TabMovies from '../Navigators/TabMovies.js';

class ScreenMovies extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={res.banner_film}
                    style={styles.img}
                    resizeMode='stretch'
                />
                <View style={styles.tabContainer}>
                    <TabMovies /> 
                </View>
                <View style={styles.buttonFloat}>
                    <Text style={styles.txtIsMore}>
                        >
                    </Text>
                </View>
            </View>
        )
    }
}

export default ScreenMovies;