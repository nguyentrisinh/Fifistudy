import React from 'react';
import {connect} from 'react-redux';

export default class HeaderLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="header__item">
                <div className="header__profile">
                    <div className="header__wrap-avatar">
                        <img src="http://placehold.it/50x50" alt="Avatar" className="header__avatar"/>
                    </div>
                    <div className="header__name">
                        Nguyễn Thanh Liêm
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userInfo
    }
}

