import React, { Component } from 'react';
import { Text } from 'react-native';

export default class ChildComponent extends Component {
    render() {
        return (
            <Text>
                {this.props.text}
            </Text>
        )
    }
}