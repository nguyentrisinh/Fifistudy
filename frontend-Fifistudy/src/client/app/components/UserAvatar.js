import React from 'react';
import {serverDomain} from '../config/server'

export default class UserAvatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let {data} = this.props
        return (
            <div className="user-avatar">
                <div className="user-avatar__wrap" style={{backgroundImage:`url(${serverDomain+data.avatar})`}}>
                    {/*<img src={} alt="" className="user-avatar__img"/>*/}
                    <label className="user-avatar__edit" htmlFor="avatar">
                        <i className="fa fa-plus-circle user-avatar__icon"></i>
                    </label>
                    <input id="avatar" type="file" hidden={true}/>

                </div>
                <div className="user-avatar__name">
                    {data.first_name+" "+data.last_name}
                </div>
            </div>
        )
    }
}