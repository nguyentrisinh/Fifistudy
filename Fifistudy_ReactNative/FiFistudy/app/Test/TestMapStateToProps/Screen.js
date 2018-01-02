import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import ChildComponent from './ChildComponent.js';
import { actionCreators } from './Redux';
import { connect } from 'react-redux';
//add {connect} and actionCreators
//declare state that to you want to pass to child component like a prop like below
const mapStateToProps = (state) => ({
    text: state.text
})

class Screen extends Component {
    clickToSendText(text) {
        const { dispatch } = this.props;
        dispatch(actionCreators.set_text(text))
    }

    render() {
        //just pass props to child component 
        const { text } = this.props
        return (
            <View>
                <Button
                    title='Click to send text'
                    onPress={() => this.clickToSendText('hello_test_map_state_to_props')}
                />
                <ChildComponent text={text} />
            </View>
        )
    }
}
//don't forget to ONLY export default this line
export default connect(mapStateToProps) (Screen)