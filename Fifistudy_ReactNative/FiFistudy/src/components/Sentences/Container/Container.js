import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Button,
    Alert
} from 'react-native';

import styles from './Styles.js';

import MonthlyItems from '../MonthlyItems/MonthlyItems.js'

class Container extends Component {
    constructor(props) {
        console.disableYellowBox = true;
        super(props);
        this.state = {
            dataSource: [
                {
                    month: '10',
                    listSentences: [
                        {
                            day: 1,
                            sentence: 'Hello Nhan'
                        },
                        {
                            day: 2,
                            sentence: 'Hello Guys'
                        }
                    ]
                },
                { 
                    month: '2' ,
                    listSentences: [
                        {
                            day: 31,
                            sentence: 'Hello bánh xèo'
                        },
                        {
                            day: 12,
                            sentence: 'Hello haizz'
                        }
                    ]
                }
            ]
        }
    }

    renderItem(item) {
        return (
            <MonthlyItems month={item.month} listSentences={item.listSentences} />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => this.renderItem(item)}
                />
            </View>
        )
    }
}

export default Container;