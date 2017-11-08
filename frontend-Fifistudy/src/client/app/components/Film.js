import React from 'react';
import Level from './Level'
import Star from './Star'

function Film() {
    return (
        <div className="film">

            <div className="film__thumnail">

                <img src="http://placehold.it/1920x1080" alt="" className="film__image"/>
                <div className="film__overlay">

                </div>
                <div className="film__bookmark">
                    <i className="material-icons">bookmark</i>
                </div>
                <div className="film__episode">
                    15
                </div>
            </div>
            <div className="film__score">

                <Star score={3}></Star>
            </div>
            <div className="film__eng-name">
                I love you
            </div>
            <div className="film__vi-name">
                Tôi yêu em
            </div>
            <div className="film__level">
                <Level level={2}/>
            </div>
        </div>
    )
}
export default Film