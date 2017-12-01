import React, { Component } from 'react';
import { FlatList, Image, TouchableOpacity, Text, View, TextInput } from 'react-native';
import styles from '../Styles/ScreenSearchFilm.js';
import lsFilm from '../Objects/ObjFilms.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ScreenSearchFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ds: lsFilm
        }
    }

    clickItemFilm() {
        console.log('Clicked item film!')
    }
    
    renderSearchBar() {
        return (
            <View style={styles.searchContainer}>
                <Icon
                    name='arrow-left'
                    size={30}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Nhập tên phim cần tìm...'
                />
                <Icon
                    style={{ marginLeft: 5 }}
                    name='magnify'
                    size={30}
                />
            </View>
        )
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
                {this.renderSearchBar()}
                {/* render black line */}
                <View style={styles.blackLine}>
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