import classNames from 'classnames';
import React from 'react';


function Level({level}) {
    function renderLevel() {
        let arr = [];
        for (let i = 0; i < 3; i++) {
            if (i + 1 < level) {
                arr.push(
                    <div className={classNames(`level__item level__item--${i + 1}`)}/>
                )
            }
            else {
                arr.push(
                    <div className="level__item"/>
                )
            }
        }
        return arr;
    };
    return (
        <div className="level">
            {
                renderLevel()
            }


        </div>
    )
}
export default Level