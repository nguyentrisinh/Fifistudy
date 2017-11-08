import Level from './Level.jsx';
import React from 'react';

function BannerItem({data}) {
    return (
        <div key={data.id} className="banner-item">
            <img className="banner-item__img" src={data.image} alt=""/>
            <div className="banner-item__info">
                <div className="banner-item__eng-title">
                    {
                        data.engName
                    }
                </div>
                <div className="banner-item__vi-title">
                    {
                        data.viName
                    }
                </div>
                <div className="banner-item__quote">
                    {
                        `"${data.quote}"`
                    }
                </div>
                <div className="banner-item__level">
                    {
                        <Level level={data.level}/>
                    }
                </div>
            </div>
        </div>
    )
}
export default BannerItem;