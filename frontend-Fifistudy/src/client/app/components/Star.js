import React from 'react';

export default function ({score}) {
    const renderStar = () => {
        let arr = [];
        for (let i = 0; i < 5; i++) {
            if (i < score) {
                arr.push(<i className="fa fa-star"/>
                )
            }
            else {
                arr.push(
                    <i className="fa fa-star-o"/>)
            }
        }
        return arr;
    }
    return (
        <div className="score">
            {
                renderStar()
            }
        </div>
    )
}