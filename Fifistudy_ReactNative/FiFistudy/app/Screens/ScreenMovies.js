import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import styles from '../Styles/ScreenMovies.js';
import res from '../Resources/index.js';
import TabMovies from '../Navigators/TabMovies.js';
//import LinearGradient from 'react-native-linear-gradient';
import {ImageButton} from '../Components/index.js';
import {ToolbarContainer} from '../Containers/index.js';
import ObjFilm from '../Objects/ObjFilm.js';

class ScreenMovies extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* Toolbar */}
                {/* <ToolbarContainer/> */}
                <View style={styles.toolbar}>
                <ImageButton
                    source={res.icons.back}
                    tintColor='white'
                    onPress={() => this.props.navigation.navigate('ScreenHome')}/>

                <View style={{flexDirection: 'row'}}>
                    <ImageButton source={res.icons.rating} tintColor='white'/>
                    <ImageButton source={res.icons.bookmark} tintColor='white'/>
                    <ImageButton source={res.icons.favorite} tintColor='white'/>
                </View>
            </View>    
                
                <Image
                    source={{uri: ObjFilm.thumbnail}}
                    style={styles.image}>
                    {/* <LinearGradient
                        colors={['rgba(0, 0, 0, 0.5)', 'transparent']}
                        locations={[0.3, 1]}
                        style={styles.imgGradient}>
                    </LinearGradient>
                    <LinearGradient
                        colors={['transparent', res.colors.background]}
                        locations={[0.7, 1]}
                        style={styles.imgGradient}>
                    </LinearGradient> */}
                </Image>

                <View style={styles.tabContainer}>
                    <TabMovies /> 
                </View>

                <TouchableOpacity style={styles.buttonFloatContainer}
                    onPress={() => this.props.navigation.navigate('ScreenWatchMovie')}>
                    <Image source={res.icons.floatingBtn}
                            style={styles.buttonFloat}/>
                </TouchableOpacity>
            </View>
        )
    }
}

export default ScreenMovies;