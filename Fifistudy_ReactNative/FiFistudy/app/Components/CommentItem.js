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

    constructor(props) {
        super(props);
        let ic_like = res.ic_like;
        let number_liked = this.props.liked;
        this.state = {
            isLiked: false
        }
    }

    clickToLike() {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render() {

        if (this.state.isLiked) {
            ic_like = res.ic_like_blue;
            number_liked = this.props.liked + 1;
        }
        else {
            ic_like = res.ic_like;
            number_liked = this.props.liked;
        }

        return (
            <View style={styles.container}>

                <View style={styles.horizontal}>
                    <View style={styles.ava}>
                        <Image
                            source={this.props.ava}
                            //resizeMode='stretch'
                            style={styles.ava}
                        />
                    </View>
                    <View style={styles.commentContainer}>
                        <View style={styles.txtCommentContainer}>
                            <Text style={styles.txtComment}> {this.props.comment} </Text>
                        </View>
                        <View style={styles.horizontal}>
                            <TouchableOpacity
                                onPress={() => this.clickToLike()}>
                                <Image
                                    source={ic_like}
                                    style={styles.ic_like}
                                />
                            </TouchableOpacity>
                            <Text style={styles.liked}>
                                {number_liked}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.blackLine}>
                </View>
            </View>
        )
    }
}

export default CommentItem;