import React from 'react';


class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="comment">
                <div className="comment__wrap-image">
                    <img className="comment__image" src="http://placehold.it/50x50" alt="Avatar"/>

                </div>
                <div className="comment__info">
                    <div className="comment__name">
                        Dũ chụ <span className="comment__time">
                        <i className="fa fa-circle fa-lg comment__dot"></i>
                       <span>  3 ngày trước</span>
                    </span>
                    </div>
                    <div className="comment__content">
                        Tôi rất thích phim này
                    </div>

                </div>
                <div className="comment__section-like">
                    <div className="comment__like">
                        <i className="fa fa-thumbs-up"></i>
                    </div>
                    <div className="comment__like-number">
                        30
                    </div>
                </div>
            </div>
        )
    }
}

export default Comment