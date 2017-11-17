import React, {Component} from 'react';
import {
    Image,
    View,
} from 'react-native';
import PropTypes from 'prop-types';
import Resources from '../../resources/resources';
import Styles from './styles';

export default class AvatarView extends Component {
    render(){
        const imageObj = typeof this.props.source === 'string' ? {uri: image.url} : this.props.source;
        return (
            <Image
                style={[Styles.image, {
                    height: this.props.size,
                    width: this.props.size,
                }]}
                resizeMode='contain'
                source={imageObj}
                elevation={this.props.showShadow ? 3 : 0}/>
        );
    }
}

AvatarView.defaultProps = {
    size: 48,
    source: Resources.images.default,
    showShadow: false,
}

AvatarView.propTypes = {
    source:  PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.object,
    ]).isRequired,
    size: PropTypes.number,
    showShadow: PropTypes.bool,
}