import React, {Component} from 'react';
import {
    Image,
    View,
    Text
} from 'react-native';
import PropTypes from 'prop-types';
import Resources from '../../resources/resources';
import Styles from './styles';

export default class CircleImage extends Component {
    render(){
        const imageObj = typeof this.props.source === 'string' ? {uri: image.url} : this.props.source;
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
                source={imageObj}
                elevation={this.props.showShadow ? 3 : 0}/>
        );
    }
}

CircleImage.defaultProps = {
    size: 48,
    source: Resources.images.default,
    showShadow: false,
}

CircleImage.propTypes = {
    source:  PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.object,
    ]).isRequired,
    size: PropTypes.number,
    showShadow: PropTypes.bool,
}