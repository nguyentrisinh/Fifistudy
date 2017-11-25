import React from 'react';
import Vocabulary from './Vocabulary'
import {connect} from 'react-redux';
import FlipMove from 'react-flip-move';
import SectionUserInfo from './SectionUserInfo';
import Input1 from './Input1';
import _ from 'lodash';

class SectionUserInfoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        if (_.has(this.props.userInfo, "data")) {
            if (this.props.userInfo.data.errors === null) {
                if (typeof this.props.userInfo.data.data == "object") {
                    return <SectionUserInfo data={this.props.userInfo.data.data}/>
                }
            }
        }
        return <div>
            Trang lỗi
        </div>
    }
}

const mapStateToProps = state => {
    return {
        userInfo: state.app.userInfo
    }
}

export default connect(mapStateToProps)(SectionUserInfoContainer)