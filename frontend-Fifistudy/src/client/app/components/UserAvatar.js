import React from 'react';

export default class UserAvatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="user-avatar">
                <div className="user-avatar__wrap">
                    <img src="http://placehold.it/200x200" alt="" className="user-avatar__img"/>
                    <label className="user-avatar__edit" htmlFor="avatar">
                        <i className="fa fa-plus-circle user-avatar__icon"></i>
                    </label>
                    <input id="avatar" type="file" hidden={true}/>

                </div>
                <div className="user-avatar__name">
                    Nguyễn Thanh Liêm
                </div>
            </div>
        )
    }
}