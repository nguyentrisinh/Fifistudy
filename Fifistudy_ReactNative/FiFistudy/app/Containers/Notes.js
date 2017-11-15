import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';

import styles from '../Styles/Notes.js';

class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [
                {
                    key: 1,
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
                    key: 2,
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

export default Notes;