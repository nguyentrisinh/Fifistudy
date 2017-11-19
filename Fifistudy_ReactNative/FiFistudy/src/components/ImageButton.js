import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import Resources from '../resources/resources';

export default class ImageButton extends Component {
    render(){
        console.log(typeof this.props.onPress);
        return(    
            <TouchableHighlight style={styles.container} onPress={this.props.onPress}
                underlayColor='#2196F3' activeOpacity={0.3}>
                <Image source={this.props.source}
                        style={[styles.image, {
                            tintColor: this.props.tintColor,
                            height: this.props.size,
                            width: this.props.size
                            }]}/>
            </TouchableHighlight>
        );
    }
}

ImageButton.defaultProps = {
    source: Resources.icError,
    tintColor: '#616161',
    size: 20,
}

ImageButton.propTypes = {
    source: PropTypes.number.isRequired,
    tintColor: PropTypes.string,
    size: PropTypes.number,
}



const styles = StyleSheet.create({
    container: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        padding: 2,
        resizeMode: 'contain',
    }
});