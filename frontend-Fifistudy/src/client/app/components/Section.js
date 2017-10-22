import React from 'react';
import Film from './Film';

function Section() {
    return (
        <div className="section">
            <div className="container section__title">
                PHIM ĐƯỢC XEM NHIỀU NHẤT
            </div>
            <div className="divider"></div>
            <div className="container section__body">
                <div className="section__item">
                    <Film/>
                </div>
                <div className="section__item">
                    <Film/>
                </div>
                <div className="section__item">
                    <Film/>
                </div>
                <div className="section__item">
                    <Film/>
                </div>
            </div>
            <div className="divider"></div>
        </div>
    )
}
export default Section