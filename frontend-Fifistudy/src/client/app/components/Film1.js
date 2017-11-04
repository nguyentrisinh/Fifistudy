import React from 'react';
import Level from './Level'

class Film1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="related-film">
                <div className="related-film__wrap-image">
                    <img src="http://placehold.it/320x180" alt="" className="related-film__image"/>
                </div>
                <div className="related-film__info">
                    <div className="related-film__eng-name">
                        Portal Combat
                    </div>
                    <div className="related-film__vi-name">
                        Chiến môn
                    </div>
                    <div className="related-film__level">
                        <Level level={2}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Film1