import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
import {ImageButton} from '../Components/index.js';
import {FilmListContainer} from '../Containers/index.js';
import Res from '../Resources/index.js';
import Styles from '../Styles/ScreenListFilm.js';

export default class ScreenListFilm extends Component {
    render() {
        const {navigation} = this.props;
        const {params} = this.props.navigation.state;
        return (
            <View style={{flex: 1}}>
                <View style={Styles.titleContainer}>
                    <ImageButton source={Res.icons.back} tintColor={Res.colors.blue}
                        onPress={() => navigation.navigate('ScreenHome')}/>
                    <Text style={Styles.title}>{params.title}</Text>
                </View>

                <View style={Styles.line}/>

                <FilmListContainer navigation={navigation}/>   
            </View>
        )
    }
}
