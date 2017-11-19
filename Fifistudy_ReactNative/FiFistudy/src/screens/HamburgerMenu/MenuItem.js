import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';

export default class MenuItem extends Component {
    constructor(props){
        super(props);
    }

    render() {
        console.log(typeof this.props.image, this.props.image);
        return(
            <TouchableHighlight style={{}}>
                <View style={{
                    flexDirection: 'row',
                    paddingTop: 12,
                    paddingBottom: 12,
                    paddingLeft: 16,
                    paddingRight: 16,
                    alignItems: 'center',}}>

                    {/* ICON */}
                    <Image source={this.props.image}
                        style={{
                            height: 20,
                            width: 20,
                            padding: 6,
                            tintColor: '#9E9E9E',
                            zIndex: 2}}/>

                    {/* LABLE */}
                    <Text style={{
                        fontWeight: 'bold',
                        marginLeft: 72,
                        position: 'absolute',
                        zIndex: 1}}>
                        {this.props.lable}
                    </Text>

                </View>
            </TouchableHighlight>
        );
    }
}

MenuItem.defaultProps = {
    image: require('../../resources/icons/ic_menu.png'),
    lable: 'Menu Item',
}

MenuItem.propTypes = {
    image: PropTypes.number,
    lable: PropTypes.string.isRequired,
}