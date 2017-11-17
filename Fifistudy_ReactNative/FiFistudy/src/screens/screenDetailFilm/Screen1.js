import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';

import styles from './StylesScreen1.js';

import ObjFilm from './ObjectFilm.js';

export default class Screen1 extends Component {
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
                            source={require('./res/icons/green-star.png')}
                            resizeMode='stretch'
                            style={styles.icon}
                        />
                        <Text style={styles.greentxt}>
                            {ObjFilm.star}
                        </Text>
                    </View>
                    <View style={styles.iconWithText}>
                        <Image
                            source={require('./res/icons/purple-chart.png')}
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
                        Hồ Chí Minh (19 tháng 5 năm 1890 – 2 tháng 9 năm 1969) tên khai sinh: Nguyễn Sinh Cung, là nhà cách mạng, người sáng lập Đảng Cộng sản Việt Nam, một trong những người đặt nền móng và lãnh đạo công cuộc đấu tranh giành độc lập, toàn vẹn lãnh thổ cho Việt Nam trong thế kỷ 20, một chiến sĩ cộng sản quốc tế. Ông là người viết và đọc bản Tuyên ngôn Độc lập Việt Nam khai sinh nước Việt Nam Dân chủ Cộng hòa ngày 2 tháng 9 năm 1945 tại quảng trường Ba Đình, Hà Nội, là Chủ tịch nước Việt Nam Dân chủ Cộng hòa trong thời gian 1945 – 1969, Chủ tịch Ban Chấp hành Trung ương Đảng Lao động Việt Nam trong thời gian 1951 – 1969.
                    </Text>
                </ScrollView>
            </View>
        )
    }
}