import React from 'react';

export default function ({data}) {
    return (
        <div className="actor">
            <div className="actor__wrap-img">
                <img src={`http://localhost:8000${data.actor_detail.profile_image}`} className="actor__img"/>
            </div>
            <div className="actor__real-name">
                {data.actor_detail.name}
            </div>
            <div className="actor__as-name">
                {data.role}
            </div>
        </div>
    )

}