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

    getDificultLevel(film){
        let level = 'Dễ';
        if (film.difficult_level === 2) level = 'Trung bình';
        if (film.difficult_level === 3) level = 'Khó';

        return level;
    }

    render() {
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <Text style={styles.txtHeader}>
                    {ObjFilm.english_name}
                </Text>
                <Text style={styles.txtFilm}>
                    {ObjFilm.vietnamese_name}
                </Text>

                <View style={styles.rateContainer}>
                    <View style={styles.iconWithText}>
                        <Image
                            source={res.green_star}
                            resizeMode='stretch'
                            style={styles.icon}
                        />
                        <Text style={styles.greentxt}>
                            {ObjFilm.average_score}
                        </Text>
                    </View>
                    <View style={styles.iconWithText}>
                        <Image
                            source={res.purple_chart}
                            resizeMode='stretch'
                            style={styles.icon}
                        />
                        <Text style={styles.purpletxt}>
                            {this.getDificultLevel(ObjFilm)}
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
                        {ObjFilm.episodes.length}
                    </Text>
                </View>
                <View style={styles.horiContainer}>
                    <Text style={styles.italictxt}>
                        Thể loại
                    </Text>
                    <Text style={styles.spacetxt}>
                        {/* {ObjFilm.category} */}
                    </Text>
                </View>
                <View style={styles.horiContainer}>
                    <Text style={styles.italictxt}>
                        Diễn viên
                    </Text>
                    <Text style={styles.spacetxt}>
                        {/* {ObjFilm.cast} */}
                    </Text>
                </View>

                
                <View style={styles.spacetop}>
                </View>
                <Text style={styles.boldReview}>
                    Sơ lược phim
                </Text>
                <ScrollView style={styles.scroll}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={false}>
                    <Text>
                        {ObjFilm.description}
                    </Text>
                </ScrollView>
            </ScrollView>
        )
    }
}

export default ScreenMovieDetail;