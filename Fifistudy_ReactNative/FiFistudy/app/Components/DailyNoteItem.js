import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';

import styles from '../Styles/DailyNoteItem.js';

class DailyNoteItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPressed: false,
            isDeleted: false
        }
    }

    changeStatePressed() {
        this.setState({
            isPressed: !this.state.isPressed
        })
    }

    deleteItems() {
        this.setState({
            isDeleted: true
        })
    }

    renderPressed() {
        return (
            <View style={styles.container}>
                <View style={styles.containerRow1}>
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
                            <TouchableOpacity
                                onPress={() => this.changeStatePressed()}
                            >
                                <Image style={styles.icon}
                                    source={require('./ic_more.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.containerBot}>
                    <View style={styles.containerDropDown}>
                        <TouchableOpacity>
                            <Text style={styles.textSetting}>
                                Đổi tên
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.blackLine}>
                        </View>
                        <TouchableOpacity
                            onPress={() => this.deleteItems()}
                        >
                            <Text style={styles.textSetting}>
                                Xóa
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    renderNormal() {
        return (
            <View style={styles.container}>
                <View style={styles.containerRow1}>
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
                            <TouchableOpacity
                                onPress={() => this.changeStatePressed()}
                            >
                                <Image style={styles.icon}
                                    source={require('./ic_more.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    render() {
        if (this.state.isDeleted)
            return null;
        if (!this.state.isPressed)
            return this.renderNormal();
        return this.renderPressed();
    }
}

export default DailyNoteItem;