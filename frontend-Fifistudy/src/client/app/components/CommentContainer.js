import React from 'react';
import Actor from './Actor'
import Slider from 'react-slick';
import {connect} from 'react-redux';
import ListActor from './ListActor'
import Comment from "./Comment";
import _ from 'lodash'
import {withRouter} from 'react-router'

import {postComment} from '../actions/api';

import validator from 'validator';
import {getComment} from '../actions/dataIntropage'

import{toggleModalLogin} from '../actions/app';

import {withCookies} from 'react-cookie'
import Comments from './Comments'

class CommentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ""
        };
    }

    onTextareaChange = (evt) => {
        this.setState({
            comment: evt.target.value
        })
    }

    onTextareaKeyPress = (evt) => {
        if (evt.charCode == 13) {
            evt.preventDefault();
            if (!validator.isEmpty(this.state.comment)) {
                let data = {
                    content: this.state.comment,
                    film_id: this.props.data.id
                }
                let {cookies} = this.props;
                let token = cookies.get("token")
                postComment(data, token).then(res => {
                    if (res.data.errors === null) {
                        alert('Comment thanh cong');
                        this.setState({
                            comment: ""
                        })
                        this.props.getComment(this.props.match.params.slug, token)
                        //Cap nhat lai comment o day

                    }
                    else {
                        alert('Comment that bai')
                    }
                });

            }
            else {
                alert('Vui lòng nhạp nội dung')
            }

        }

    }

    onTextareaFocus = (e) => {

        if (this.props.isLogin) {
            return
        }
        this.props.toggleModalLogin();
    }

    renderContent = () => {

        let {comment} = this.props;
        if (comment.isLoading) {
            return (
                <div className="list-actor__info"> Đang tải ... </div>
            )
        }
        else {
            if (comment.data.errors == null) {
                if (comment.data.data.length > 0) {
                    return (
                        <Comments data={comment.data.data}/>
                    )
                }
                else {
                    return (
                        <div className="list-actor__info">Chưa có bình luận nào</div>
                    )
                }
            }
        }
    };


    render() {
        return (
            <div className="comments">
                <div className="comments__section-comment">
                    <div className="comments__wrap-image">
                        <img src="http://placehold.it/50x50" alt="Avatar" className="comments__image"/>
                    </div>
                    <div className="comments__comment">
                        <div className="comments__name">
                            Nguyễn Thanh Liêm
                        </div>
                        <textarea onClick={this.onTextareaFocus} onKeyPress={this.onTextareaKeyPress}
                                  onChange={this.onTextareaChange}
                                  placeholder={this.props.isLogin ? "Nhập bình luận của bạn" : "Vui lòng đăng nhập để bình luận"}
                                  type="text" className="comments__input" value={this.state.comment}/>
                    </div>
                </div>
                {
                    this.renderContent()
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        comment: state.dataIntropage.comment,
        isLogin: state.app.isLogin,
        userInfo: state.app.userInfo
    }
}

export default connect(mapStateToProps, {toggleModalLogin, getComment})(withRouter(withCookies(CommentContainer)))
