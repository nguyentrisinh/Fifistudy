import Level from './Level';
import React from 'react';

function BannerItem({data}) {
    let filmDetail = data.film_detail
    return (
        <div className="banner-item">
            <img className="banner-item__img" src={"http://localhost:8000" + filmDetail.thumbnail} alt=""/>
            <div className="banner-item__info">
                <div className="banner-item__eng-title">
                    {
                        filmDetail.english_name
                    }
                </div>
                <div className="banner-item__vi-title">
                    {
                        filmDetail.vietnamese_name
                    }
                </div>
                <div className="banner-item__quote">
                    {
                        `"${data.quote}"`
                    }
                </div>
                <div className="banner-item__level">
                    {
                        <Level level={filmDetail.difficult_level}/>
                    }
                </div>
            </div>
        </div>
    )
}
export default BannerItem;