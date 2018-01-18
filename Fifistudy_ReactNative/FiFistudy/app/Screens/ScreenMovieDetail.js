import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';
import styles from '../Styles/ScreenMovieDetail.js';
import res from '../Resources/index.js';

export default class ScreenMovieDetail extends Component {
    getDificultLevel(film){
        let level = 'Dễ';
        if (film.difficult_level === 2) level = 'Trung bình';
        if (film.difficult_level === 3) level = 'Khó';

        return level;
    }

    getLevelColor(film) {
        let color = res.colors.levelEasy;

        if (film.difficult_level === 2)
            color = res.colors.levelMedium;
        if (film.difficult_level === 3)
            color = res.colors.levelHard;

        return color;
    }

    render() {
        const {film} = this.props.screenProps;
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <Text style={styles.txtHeader}>
                    {film.english_name}
                </Text>
                <Text style={styles.txtFilm}>
                    {film.vietnamese_name}
                </Text>

                <View style={styles.rateContainer}>
                    <View style={styles.iconWithText}>
                        <Image
                            source={res.icons.ratingFull}
                            resizeMode='stretch'
                            style={styles.icon}
                        />
                        <Text style={styles.greentxt}>
                            {film.average_score}
                        </Text>
                    </View>
                    <View style={styles.iconWithText}>
                        <Image
                            source={res.icons.level}
                            resizeMode='stretch'
                            style={[styles.icon, {tintColor: this.getLevelColor(film)}]}
                        />
                        <Text style={[styles.purpletxt, {color: this.getLevelColor(film)}]}>
                            {this.getDificultLevel(film)}
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
                        {film.episode_number}
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
                        {film.description}
                    </Text>
                </ScrollView>
            </ScrollView>
        )
    }
}