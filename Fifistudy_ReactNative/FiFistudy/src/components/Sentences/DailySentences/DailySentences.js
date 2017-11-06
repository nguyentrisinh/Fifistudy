import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import styles from './Styles.js';

class DailySentences extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.circle}>
                    <Text style={styles.textDate}>
                        {this.props.day}
                    </Text>
                </View>
                <View style={styles.sentenceContainer}>
                    <Text style={styles.textSentence}>
                        {this.props.sentence}
                    </Text>
                    <View style={styles.icon}>
                    <Image
                        source={require('./ic_more.png')}
                    />
                    </View>
                </View>
            </View>
        )
    }
}

export default DailySentences;