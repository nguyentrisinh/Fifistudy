import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native';

import styles from './Styles.js';

import DailySentences from '../DailySentences/DailySentences.js';

class MonthlyItems extends Component {
    constructor(props) {
        console.disableYellowBox = true;
        super(props);
        this.state = {
            dataSource: [
                {
                    day: '1',
                    sentence: 'Hello World',
                },
                {
                    day: '2',
                    sentence: 'Hello Nhan',
                }
            ]
        }
    }

    renderDailySentences(item) {
        return (
            <DailySentences day={item.day} sentence={item.sentence} />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerTextAndLine}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textMonth}>
                            Tháng {this.props.month}
                        </Text>
                    </View>
                    <View style={styles.blackLine}>
                    </View>
                </View>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => this.renderDailySentences(item)}
                />
            </View>
        )
    }
}

export default MonthlyItems;