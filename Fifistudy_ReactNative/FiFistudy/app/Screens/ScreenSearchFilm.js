import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
} from 'react-native';
import {
    ImageButton,
} from '../Components/index.js';
import {FilmListContainer} from '../Containers/index.js';
import styles from '../Styles/ScreenSearchFilm.js';
import Res from '../Resources/index.js';

export default class ScreenSearchFilm extends Component {
    // renderSearchBar() {
    //     return (
    //         <View style={styles.searchContainer}>
    //             <Image
    //                 source={Res.icons.back}
    //                 style={{width: 30, height: 30}}
    //             />
    //             <TextInput
    //                 style={styles.textInput}
    //                 placeholder='Nhập tên phim cần tìm...'
    //             />
    //             <Image
    //                 style={{ width: 30, height: 30, marginLeft: 5 }}
    //                 source={Res.icons.search}
    //             />
    //         </View>
    //     )
    // }
    renderItemFilm(item) {
        return (
            <View style={{ flexDirection: 'column' }}>
                <TouchableOpacity
                    onPress={() => this.clickItemFilm()}
                    style={styles.itemContainer}>
                    <Image
                        source={item.banner}
                        style={styles.bannerFilm}
                        resizeMod='stretch'
                    />
                    <View style={styles.textContainer}>
                        <Text
                            numberOfLines={2}
                            ellipsizeMode='tail'
                            style={styles.titleEng}>
                            {item.title_english}
                        </Text>
                        <Text
                            numberOfLines={2}
                            ellipsizeMode='tail'
                            style={styles.titleVn}>
                            {item.title_vn}
                        </Text>
                        <View style={{ marginTop: 10, marginLeft: 4, height: 2, width: 200, backgroundColor: item.color, }}>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.lineColor}>
                </View>
            </View>
        )
    }
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                {/* {this.renderSearchBar()} */}
                {/* Search bar */}
                <View style={styles.searchBarContainer}>
                    <ImageButton source={Res.icons.back} tintColor={Res.colors.blue}
                        onPress={() => navigation.navigate('ScreenHome')}/>
                    <TextInput
                        style={styles.textInput}
                        placeholderTextColor={Res.colors.blue}
                        underlineColorAndroid='transparent'
                        placeholder='Nhập tên phim cần tìm...'
                    />
                </View>
                <View style={styles.line}/>

                <FilmListContainer navigation={navigation}/>                
            </View>
        )
    }
}