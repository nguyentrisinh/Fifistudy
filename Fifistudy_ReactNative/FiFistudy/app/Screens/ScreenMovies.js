import React, { Component } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

import styles from '../Styles/ScreenMovies.js';
import res from '../Resources/index.js';
import TabMovies from '../Navigators/TabMovies.js';
import LinearGradient from 'react-native-linear-gradient';
import {ImageButton} from '../Components/index.js';
import {ToolbarContainer} from '../Containers/index.js';

class ScreenMovies extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* Toolbar */}
                <ToolbarContainer/>
                
                <Image
                    source={res.banner_film}
                    style={styles.image}>
                    <LinearGradient
                        colors={['rgba(0, 0, 0, 0.5)', 'transparent']}
                        locations={[0.3, 1]}
                        style={styles.imgGradient}>
                    </LinearGradient>
                    <LinearGradient
                        colors={['transparent', res.colors.background]}
                        locations={[0.7, 1]}
                        style={styles.imgGradient}>
                    </LinearGradient>
                </Image>

                <View style={styles.tabContainer}>
                    <TabMovies /> 
                </View>

                <Image source={res.icons.btnPlay}
                            style={styles.buttonFloat}/>
            </View>
        )
    }
}

export default ScreenMovies;