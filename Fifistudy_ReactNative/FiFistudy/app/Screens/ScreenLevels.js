import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import {LevelCard, ImageButton} from '../Components/index.js';
import Res from '../Resources/index';

export default class ScreenLevels extends Component {
    render() {
        return(
            <View style={styles.container}>
                {/* Title section */}
                <View style={styles.titleContainer}>
                    <ImageButton source={Res.icons.back} tintColor={Res.colors.blue}/>
                    <Text style={styles.title}>Độ khó</Text>
                </View>


                {/* <LevelCard level={0}/>
                <LevelCard level={1}/>
                <LevelCard level={2}/> */}

                
                <View style={styles.levelsContainer}>
                    <View style={[styles.levelCardcontainer, {
                        backgroundColor: Res.colors.red,
                        transform: [{ rotate: '-30deg'}],
                        }]}>
                        <Text style={styles.label}>Khó</Text>
                    </View>
                    <View style={[styles.levelCardcontainer, {
                        backgroundColor: Res.colors.violet,
                        transform: [{ rotate: '-5deg'}],
                        marginTop: -118
                        }]}>
                        <Text style={styles.label}>Trung bình</Text>
                    </View>
                    <View style={[styles.levelCardcontainer, {
                        backgroundColor: Res.colors.blue,
                        transform: [{ rotate: '10deg'}],
                        marginTop: -120,
                        }]}>
                        <Text style={styles.label}>Dễ</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Res.colors.background,
    },
    titleContainer: {
        flexDirection: 'row',
        paddingLeft: 16,
        paddingRight: 16,
        alignItems: 'center',
        height: 56,
        width: '100%',
        position: 'absolute',
        zIndex: 3,
    },
    title: {
        fontFamily: Res.fonts.common,
        left: 72,
        fontSize: 21,
        color: Res.colors.blue,
        position: 'absolute'
    },
    levelCardcontainer: {
        width: '64%',
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        margin: 8,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
    },
    label: {
        color: 'white',
        fontSize: 21,
        fontWeight: 'bold'
    },
    levelsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});