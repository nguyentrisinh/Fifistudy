import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import res from '../Resources/index';

export default class EpisodeCircleView extends Component {
    render(){
        return (
            <View style={[styles.cicle, 
                {
                    backgroundColor: this.props.color,
                    height: this.props.size,
                    width: this.props.size,
                    elevation: this.props.elevation,
                }]}>
                <Text style={[styles.episodeNumber, {
                    color: this.props.textColor,
                }]}>
                    {this.props.episodeNumber}
                </Text>
            </View>
        );
    }
}

EpisodeCircleView.defaultProps = {
    episodeNumber: 0,
    color: res.colors.blue,
    textColor: 'white',
    size: 36,
    elevation: 0,
}

EpisodeCircleView.propTypes = {
    episodeNumber: PropTypes.number.isRequired,
    color: PropTypes.string,
    textColor: PropTypes.string,
    size: PropTypes.number,
    elevation: PropTypes.number,
}


const styles = StyleSheet.create({
    cicle: {
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    episodeNumber: {
        fontFamily: res.fonts.common,
        fontWeight: 'bold',
        fontSize: 17
    }
});