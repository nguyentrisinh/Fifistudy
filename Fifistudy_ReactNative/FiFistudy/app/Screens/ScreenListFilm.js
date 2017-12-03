import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import res from '../Resources/index.js';
import styles from '../Styles/ScreenListFilm.js';
import lsFilm from '../Objects/ObjFilms.js';

export default class ScreenListFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ds: lsFilm
        }
    }

    clickItemFilm() {
        console.log('Clicked item film!')
    }

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
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('ScreenHome')}>
                        <Image
                            source={res.icons.back}
                            style={{width: 30, heigth: 30}}
                        />
                    </TouchableOpacity>
                    <Text> Danh sách </Text>
                </View>
                <FlatList
                    style={{ margin: 15 }}
                    data={this.state.ds}
                    renderItem={({ item }) => this.renderItemFilm(item)}>
                </FlatList>
            </View>
        )
    }
}
