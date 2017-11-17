import React, {Component} from 'react';
import {
    Image,
    View,
} from 'react-native';
import PropTypes from 'prop-types';
import Resources from '../../resources/resources';
import Styles from './styles';

export default class CircleImage extends Component {
    render(){
        return (
            <Image
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: this.props.size,
                    width: this.props.size,
                    borderRadius: 50,
                }}
                    resizeMode='contain'
                    source={this.props.source}
                    elevation={this.props.showShadow ? 3 : 0}/>
        );
    }
}

CircleImage.defaultProps = {
    size: 48,
    source: Resources.image.default,
    showShadow: false,
}

CircleImage.propTypes = {
    source:  PropTypes.number.isRequired,
    size: PropTypes.number,
    showShadow: PropTypes.bool,
}