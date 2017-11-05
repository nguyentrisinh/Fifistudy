import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';

export default class ImageButton extends Component {
    render(){
        console.log(typeof this.props.onPress);
        return(    
            <TouchableHighlight style={styles.container} onPress={this.props.onPress}
                underlayColor='#2196F3' activeOpacity={0.3}>
                <Image source={this.props.source}
                        style={[styles.image, {tintColor: this.props.tintColor}]}/>
            </TouchableHighlight>
        );
    }
}

ImageButton.defaultProps = {
    source: require('../resources/icons/ic_menu.png'),
    tintColor: '#616161'
}

ImageButton.propTypes = {
    source: PropTypes.number.isRequired,
    tintColor: PropTypes.string
}



const styles = StyleSheet.create({
    container: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 20,
        width: 20,
        padding: 2,
        resizeMode: 'contain',
    }
});