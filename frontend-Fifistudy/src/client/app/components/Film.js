import React from 'react';
import Level from './Level.jsx'
import Star from './Star'
import classNames from 'classnames';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
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

    render() {
        let {data} = this.props;
        return (
            <Link to={`/film/${data.slug}`} className="film">
                <div className="film__thumnail">
                    <img src={"http://localhost:8000" + data.thumbnail} alt="" className="film__image"/>
                    <div className="film__overlay">
                    </div>
                    <div className="film__bookmark">
                        <i onMouseEnter={this.onMouseEnterBookmark} onMouseLeave={this.onLeaveEnterBookmark}
                           className={classNames("fa", {
                               "fa-bookmark": this.state.isEnter,
                               "fa-bookmark-o": !this.state.isEnter
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
export default Film