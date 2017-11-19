import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';

export default class EpisodeCircleView extends Component {
    render(){
        return (
            <View style={[styles.cicle, 
                {
                    backgroundColor: this.props.color,
                    height: this.props.size,
                    width: this.props.size,
                }]}>
                <Text style={{
                    fontWeight: 'bold',
                    color: this.props.textColor,
                }}>
                    {this.props.episodeNumber}
                </Text>
            </View>
        );
    }
}

EpisodeCircleView.defaultProps = {
    episodeNumber: 0,
    color: '#2196F3',
    textColor: 'white',
    size: 32,
}

EpisodeCircleView.propTypes = {
    episodeNumber: PropTypes.number.isRequired,
    color: PropTypes.string,
    textColor: PropTypes.string,
    size: PropTypes.number,
}


const styles = StyleSheet.create({
    cicle: {
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
});