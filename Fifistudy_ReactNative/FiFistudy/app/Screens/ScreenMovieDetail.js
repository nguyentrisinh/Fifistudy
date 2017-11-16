import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';

import styles from '../Styles/ScreenMovieDetail.js';
import res from '../Resources/index.js';
import ObjFilm from '../Objects/ObjFilm.js';

class ScreenMovieDetail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.txtHeader}>
                    {ObjFilm.titleHeader}
                </Text>
                <Text style={styles.txtFilm}>
                    {ObjFilm.titleFilm}
                </Text>
                <View style={styles.rateContainer}>
                    <View style={styles.iconWithText}>
                        <Image
                            source={res.green_star}
                            resizeMode='stretch'
                            style={styles.icon}
                        />
                        <Text style={styles.greentxt}>
                            {ObjFilm.star}
                        </Text>
                    </View>
                    <View style={styles.iconWithText}>
                        <Image
                            source={res.purple_chart}
                            resizeMode='stretch'
                            style={styles.icon}
                        />
                        <Text style={styles.purpletxt}>
                            {ObjFilm.review}
                        </Text>
                    </View>
                </View>
                <View style={styles.spacetop}>
                </View>
                <View style={styles.horiContainer}>
                    <Text style={styles.italictxt}>
                        Số tập
                    </Text>
                    <Text style={styles.spacetxt}>
                        {ObjFilm.episodes}
                    </Text>
                </View>
                <View style={styles.horiContainer}>
                    <Text style={styles.italictxt}>
                        Thể loại
                    </Text>
                    <Text style={styles.spacetxt}>
                        {ObjFilm.category}
                    </Text>
                </View>
                <View style={styles.horiContainer}>
                    <Text style={styles.italictxt}>
                        Diễn viên
                    </Text>
                    <Text style={styles.spacetxt}>
                        {ObjFilm.cast}
                    </Text>
                </View>
                <View style={styles.spacetop}>
                </View>
                <Text style={styles.boldReview}>
                    Sơ lược phim
                </Text>
                <ScrollView style={styles.scroll}>
                    <Text>
                        {ObjFilm.summary}
                    </Text>
                </ScrollView>
            </View>
        )
    }
}

export default ScreenMovieDetail;