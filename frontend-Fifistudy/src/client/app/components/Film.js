import React from 'react';
import Level from './Level.jsx'
import Star from './Star'
import classNames from 'classnames';
import {postUserSaveFilm} from '../actions/api';
import {getMostView, getLastest} from '../actions/dataHomepage'
import {getUserSaveFilm} from '../actions/dataUserpage'
import {withCookies} from 'react-cookie';
import {SERVER_ERRORS} from '../constants/serverErrors'
import {connect} from 'react-redux';
import {toggleModalLogin} from '../actions/app';
import {withRouter} from 'react-router'

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
class Film extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnter: false
        }
    }

    onMouseEnterBookmark = () => {
        this.setState({
            isEnter: true
        })
    }

    onLeaveEnterBookmark = () => {
        this.setState({
            isEnter: false
        })
    }
    updateNewDataFromServer = () => {
        let {cookies} = this.props;
        let token = cookies.get("token");
        this.props.getLastest(token);
        this.props.getMostView(token);
        this.props.getUserSaveFilm(token);
    }
    onClickBookmark = (event) => {
        event.stopPropagation();
        event.preventDefault();
        if (this.props.isLogin) {
            let {cookies, data} = this.props;
            // console.log(this.props.data)
            let sendData = {
                film_id: data.id
            }
            let config = {
                headers: {
                    "Authorization": `Token ${cookies.get("token")}`
                }
            }
            postUserSaveFilm(sendData, config).then((response) => {
                if (response.data.errors == null) {
                    alert('Thao tác thành công');
                    this.updateNewDataFromServer();

                    //Thanh cong
                    // this.props.updateHomepageSavedFilm(response.data.data.film_id);

                }
                else {
                    alert(SERVER_ERRORS[response.data.errors[0].errorCode])
                }
            })
                .catch((err) => {
                    console.log(err)
                })
        }
        else {
            this.props.toggleModalLogin()
        }
    }

    render() {
        let {data} = this.props;
        return (
            <Link to={`/film/${data.slug}`} className="film">
                <div className="film__thumnail">
                    <img src={"http://localhost:8000" + data.thumbnail} alt="" className="film__image"/>
                    <div className="film__overlay">
                    </div>
                    <div className="film__bookmark">
                        <i onClick={this.onClickBookmark} onMouseEnter={this.onMouseEnterBookmark}
                           onMouseLeave={this.onLeaveEnterBookmark}
                           className={classNames("fa", {

                               "fa-bookmark-o": this.props.isSaved ? !this.props.isSaved : !this.state.isEnter && !data.is_saved,
                               "fa-bookmark": this.props.isSaved ? this.props.isSaved : this.state.isEnter || data.is_saved
                           })}/>
                    </div>
                    <div className="film__episode">
                        {data.episode_count}
                    </div>
                </div>
                <div className="film__score">

                    <Star score={data.average_score}></Star>
                </div>
                <div className="film__eng-name">
                    {data.english_name}
                </div>
                <div className="film__vi-name">
                    {data.vietnamese_name}
                </div>
                <div className="film__level">
                    <Level level={data.difficult_level}/>
                </div>
            </Link>
        )
    }

}

Film.defaultProps = {
    isSaved: false
}

const mapStateToProps = state => {
    return {
        isLogin: state.app.isLogin
    }
}


export default connect(mapStateToProps, {toggleModalLogin, getLastest, getMostView, getUserSaveFilm})(withCookies(Film))