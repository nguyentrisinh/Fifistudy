import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    Animated,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PopupDialog, {SlideAnimation, DialogTitle} from 'react-native-popup-dialog';
import styles from '../Styles/ScreenMovies.js';
import res from '../Resources/index.js';
import TabMovies from '../Navigators/TabMovies.js';
import {ImageButton} from '../Components/index.js';
import stylesPopup from '../Styles/PopupListEpisode.js';
import {episodes} from '../Objects/ObjEpisodes.js'

const slideAnimation = new SlideAnimation({
    slideFrom: 'bottom',
});

export default class ScreenMovies extends Component {
    constructor(props) {
        super(props);
        this.animatedValue = new Animated.Value(0.6);
    }

    componentWillMount() {
        this.animate();
    }

    animate() {
        this.animatedValue.setValue(0.3);
        Animated.spring(
            this.animatedValue,
            {
                toValue: 1,
                friction: 0.5,
            }
        ).start(() => this.animate());
    }

    renderItemEpisode(ep) {
        return (
            <TouchableOpacity style={stylesPopup.itemEpisode}
                onPress={() => this.props.navigation.navigate('ScreenWatchMovie', {film: film, epData: ep})}>
                <Text style={stylesPopup.textEpisode}>
                    {ep.number}
                </Text>
                <View style={stylesPopup.blackLine}> 
                </View>
            </TouchableOpacity>
        )
    }

    getEpisodes(film) {
        let listEpisode = [];
        episodes.forEach(e => {
            if (e.film_id === film.id)
            listEpisode.push(e);
        });
        return listEpisode.sort((a, b) => parseInt(a.number) - parseInt(b.number));
    }

    // renderPopup(film) {
    //     return (
    //         <PopupDialog
    //             // width={Dimensions.get('window').width * (2 / 3)}
    //             width='63%'
    //             dialogTitle={<DialogTitle title="Danh sách các tập"/>}
    //             ref={(popupDialog) => {
    //                 this.popupDialog = popupDialog
    //             }}
    //             dialogAnimation={slideAnimation}
    //             overlayOpacity={0.5}>
    //             {/* --- Component popup show --- */}
    //             <FlatList
    //                 data={}
    //                 renderItem={({item}) => this.renderItemEpisode(item)}
    //             >
    //             </FlatList>
    //         </PopupDialog>
    //     )
    // }

    onFavoriteButtonPress(item){
        item.is_liked = !item.is_liked;
    }

    onBookmarkButtonPress(item){
        item.is_saved = !item.is_saved;
    }

    render() {
        const {film} = this.props.navigation.state.params;
        return (
            <View style={{flex: 1}}>
                <View style={styles.container}>
                    {/* Toolbar */}
                    <View style={styles.toolbar}>
                        <ImageButton
                                source={res.icons.back}
                                tintColor='white'
                                onPress={() => this.props.navigation.navigate('ScreenHome')} />
                        <View style={{flexDirection: 'row'}}>
                            <ImageButton source={res.icons.rating} tintColor='white'/>
                            <ImageButton source={film.is_saved ? res.icons.bookmarkFull : res.icons.bookmark}
                                tintColor='white'
                                onPress={() => this.onBookmarkButtonPress(item)}/>
                            <ImageButton source={film.is_liked ? res.icons.favoriteFull : res.icons.favorite}
                                tintColor='white'
                                onPress={() => this.onFavoriteButtonPress(item)}/>
                        </View>
                    </View>    
                
                    <Image
                        source={film.thumbnail}
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
                        <TabMovies/>
                    </View>
                </View>

                <TouchableOpacity 
                    style={styles.buttonFloatContainer}
                    onPress={() => this.popupDialog.show()}>
                    <Animated.View style={[styles.animatedButtonFloat, { transform: [{scale: this.animatedValue}]}]}/>
                    <Image source={res.icons.floatingBtn}
                        style={styles.buttonFloat}/>
                </TouchableOpacity>
                
                 <PopupDialog 
                    width='63%'
                    dialogTitle={<DialogTitle title="Danh sách các tập" />}
                    ref={(popupDialog) => { this.popupDialog = popupDialog }}
                    dialogAnimation={slideAnimation}
                    overlayOpacity={0.5}>
                     {/* --- Component popup show --- */}
                     <FlatList
                         data={this.getEpisodes(film)}
                         renderItem={(ep) => this.renderItemEpisode(film, ep)}
                     >
                     </FlatList>
                 </PopupDialog>
            </View>
        )
    }
}