import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';

export default class CircleTV extends Component {
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
                    {this.props.text}
                </Text>
            </View>
        );
    }
}

CircleTV.defaultProps = {
    text: 'number',
    color: '#2196F3',
    textColor: 'white',
    size: 32,
}

CircleTV.propTypes = {
    text: PropTypes.string.isRequired,
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