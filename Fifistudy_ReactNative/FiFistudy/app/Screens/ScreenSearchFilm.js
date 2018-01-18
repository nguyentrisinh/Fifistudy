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
import {films} from '../Objects/ObjFilms.js';

export default class ScreenSearchFilm extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchResult: [],

        }
    }
    onChangeSearchText(text){
        this.setState({
            searchResult: this.getSearchResult(text),
        });
    }

    getSearchResult(searchString) {
        let result = [];
        if (searchString || searchString.trim()){
            searchString = searchString.toLowerCase();
            films.forEach(f => {
                if (f.english_name.toLowerCase().includes(searchString) || f.vietnamese_name.toLowerCase().includes(searchString))
                    result.push(f);
            });
        }
        return result;
    }

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                {/* Search bar */}
                <View style={styles.searchBarContainer}>
                    <ImageButton source={Res.icons.back} tintColor={Res.colors.blue}
                        onPress={() => navigation.navigate('ScreenHome')}/>
                    <TextInput
                        style={styles.textInput}
                        placeholderTextColor={Res.colors.blue}
                        underlineColorAndroid='transparent'
                        placeholder='Nhập tên phim cần tìm...'
                        onChangeText={(text) => this.onChangeSearchText(text)}
                        onSubmitEditing={this.onSubmitEditing}
                    />
                </View>
                <View style={styles.line}/>
                <FilmListContainer navigation={navigation} data={this.state.searchResult}/>               
            </View>
        )
    }
}