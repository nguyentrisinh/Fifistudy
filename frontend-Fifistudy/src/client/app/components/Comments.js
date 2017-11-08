import React from 'react';
import Comment from './Comment'
class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

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
                        <textarea placeholder="Nhập bình luận của bạn" type="text" className="comments__input"/>
                    </div>
                </div>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>

            </div>

        )
    }
}

export default Comments