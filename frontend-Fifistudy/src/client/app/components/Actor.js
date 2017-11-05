import React from 'react';

export default function ({data}) {
    return (
        <div className="actor">
            <div className="actor__wrap-img">
                <img src={data.image} className="actor__img"></img>
            </div>
            <div className="actor__real-name">
                {data.realName}
            </div>
            <div className="actor__as-name">
                {data.asName}
            </div>
        </div>
    )

}