import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PopupDialog, { SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
import styles from '../Styles/ScreenMovies.js';
import res from '../Resources/index.js';
import TabMovies from '../Navigators/TabMovies.js';
import { ImageButton } from '../Components/index.js';
import { ToolbarContainer } from '../Containers/index.js';
import ObjFilm from '../Objects/ObjFilm.js';
import stylesPopup from '../Styles/PopupListEpisode.js';
import windows from '../Themes/Window.js';
import lsEpisodes from '../Objects/ObjListEpisodes.js';

const slideAnimation = new SlideAnimation({
    slideFrom: 'bottom',
});

class ScreenMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ds: lsEpisodes
        }
    }
    renderItemEpisode(item) {
        return (
            <View style={stylesPopup.itemEpisode}>
                <Text style={stylesPopup.textEpisode}>
                    {item.name}
                </Text>
                <View style={stylesPopup.blackLine}>
                </View>
            </View>
        )
    }
    renderPopup() {
        return (
            <PopupDialog
                width={windows.width * (2 / 3)}
                dialogTitle={<DialogTitle title="Danh sách các tập" />}
                ref={(popupDialog) => { this.popupDialog = popupDialog }}
                dialogAnimation={slideAnimation}
                overlayOpacity={0.5}>
                {/* --- Component popup show --- */}
                <FlatList
                    data={this.state.ds}
                    renderItem={({ item }) => this.renderItemEpisode(item)}
                >
                </FlatList>
            </PopupDialog>
        )
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    {/* Toolbar */}
                    {/* <ToolbarContainer/> */}
                    <View style={styles.toolbar}>

                <View style={{flexDirection: 'row'}}>
                    <ImageButton source={res.icons.rating} tintColor='white'/>
                    <ImageButton source={res.icons.bookmark} tintColor='white'/>
                    <ImageButton source={res.icons.favorite} tintColor='white'/>
                </View>
            </View>    
                
                <Image
                    source={{uri: ObjFilm.thumbnail}}
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
                        <ImageButton
                            source={res.icons.back}
                            tintColor='white'
                            onPress={() => this.props.navigation.navigate('ScreenHome')} />

                        <View style={{ flexDirection: 'row' }}>
                            <ImageButton source={res.icons.rating} tintColor='white' />
                            <ImageButton source={res.icons.bookmark} tintColor='white' />
                            <ImageButton source={res.icons.favorite} tintColor='white' />
                        </View>
                    </View>

                    <Image
                        source={{ uri: ObjFilm.thumbnail }}
                        style={styles.image}>
                    </Image>

                    <View style={styles.tabContainer}>
                        <TabMovies />
                    </View>

                    <TouchableOpacity style={styles.buttonFloatContainer}
                        onPress={() => this.popupDialog.show()}>
                        <Image source={res.icons.floatingBtn}
                            style={styles.buttonFloat} />
                    </TouchableOpacity>
                </View>
                    <PopupDialog
                        width={windows.width * (2 / 3)}
                        dialogTitle={<DialogTitle title="Danh sách các tập" />}
                        ref={(popupDialog) => { this.popupDialog = popupDialog }}
                        dialogAnimation={slideAnimation}
                        overlayOpacity={0.5}>
                        {/* --- Component popup show --- */}
                        <FlatList
                            data={this.state.ds}
                            renderItem={({ item }) => this.renderItemEpisode(item)}
                        >
                        </FlatList>
                    </PopupDialog>

            </View>
        )
    }
}

export default ScreenMovies;