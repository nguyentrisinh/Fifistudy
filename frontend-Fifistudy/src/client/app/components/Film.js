import React from 'react';
import Level from './Level.jsx'
import Star from './Star'
import {Link} from 'react-router'

function Film({data}) {
    console.log('data', data)
    return (
        <Link to={`/film/${data.slug}`} className="film">

            <div className="film__thumnail">

                <img src={"http://localhost:8000" + data.thumbnail} alt="" className="film__image"/>
                <div className="film__overlay">

                </div>
                <div className="film__bookmark">
                    <i className="fa fa-bookmark-o"/>
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
export default Film