import React from 'react';
import Film from './Film';

function Section() {
    const renderFilm = () => {
        return [{}, {}, {}, {}, {}, {}, {}, {}].map(item => {
            return (
                <div className="section__item">
                    <Film/>
                </div>
            )
        })
    };
    return (
        <div className="section">
            <div className="container section__title">
                PHIM ĐƯỢC XEM NHIỀU NHẤT
            </div>
            <div className="divider"></div>
            <div className="container section__body">
                {
                    renderFilm()
                }
            </div>
            <div className="divider"></div>
        </div>
    )
}
export default Section