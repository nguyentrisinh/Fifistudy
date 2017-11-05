import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
} from 'react-native';
import Resources from '../../resources/resources';
import ImageButton from '../../components/ImageButton';

export default class FilmGroup extends Component {
    render() {
        return(
            <View style={{height:100, width:100}}>
                {/* Bookmark */}
                <Image source={Resources.icons.bookmark}/>
                {/* Episode Group */}
                <View>
                    <Text>Tập</Text>
                </View>
                {/* Film's image */}
                <Image source={require('../../resources/films/the_last_ship.png')}
                        style={{height: 80, width: 80}}/>
                {/* Level line */}
                <View/>
                {/* Title group */}
                <View>
                    <View>
                        <Text>Tiêu đề gốc</Text>
                        <Text>Tiêu đề Việt</Text>
                    </View>
                    <ImageButton source={Resources.icons.moreDot}/>
                </View>
            </View>
        ); 
    }
}