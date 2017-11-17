import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import styles from '../Styles/CommentItem.js';
import res from '../Resources/index.js';

class CommentItem extends Component {
    render() {
        return (
            <View style={styles.horizontal}>
                <Image
                    //source={res.ava1}
                    source={this.props.ava}
                    resizeMode='stretch'
                    style={styles.ava}
                />
                <View style={styles.commentContainer}>
                    <Text> {this.props.comment} </Text>
                    <View style={styles.horizontal}>
                        <Image
                            source={res.ic_like}
                            style={styles.ic_like}
                        />
                        <Text>
                            {this.props.liked}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default CommentItem;