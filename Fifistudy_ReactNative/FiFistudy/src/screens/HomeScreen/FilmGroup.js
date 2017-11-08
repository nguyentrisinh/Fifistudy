import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
} from 'react-native';
import PropTypes from 'prop-types';
import Styles from './FilmGroupStyles';
import Resources from '../../resources/resources';
import ImageButton from '../../components/ImageButton';

export default class FilmGroup extends Component {
    render() {
        const groupWidth = 160;
        return(
            <View style={[Styles.container, {width: groupWidth}]}>
                {/* Bookmark */}
                <Image source={Resources.icons.bookmarkFull}
                        style={Styles.bookmarkIcon}/>
                <View style={{
                    width: groupWidth,
                    height: groupWidth * (9 / 16),
                    }}>
                    {/* Episode Group */}
                    <View style={Styles.filmImgGroup}>
                    <View style={Styles.episodeNumCircle}>
                        <Text style={{
                            fontWeight: 'bold',
                            color: 'white',
                            }}>8</Text>
                    </View>
                    </View>
                    {/* Film's image */}
                    <Image source={require('../../resources/films/the_last_ship.png')}
                            style={Styles.filmImg}/>
                </View>
                {/* Level line */}
                <View style={[{
                    backgroundColor: '#9C27B0',
                    height: 3,
                    width: groupWidth}]}/>


                {/* Title group */}
                    <View style={[Styles.titleGroup, {width: groupWidth,}]}>
                        <View style={Styles.titleTextGroup}>
                            <Text style={{fontWeight: 'bold',}}>Tiêu đề gốc</Text>
                            <Text>Tiêu đề Việt</Text>
                        </View>
                        <ImageButton source={Resources.icons.moreDot} size={16}/>                        
                    </View>
            </View>
        ); 
    }
}

FilmGroup.PropTypes = {

}