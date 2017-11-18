import React from 'react';
import {serverDomain} from '../config/server'

class Vocabulary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        let {vocabulary, episode, film} = this.props.data;
        return (
            <div className="vocabulary" style={{backgroundImage: `url(${serverDomain + film.thumbnail})`}}>
                <div className="vocabulary__overlay">

                </div>
                <div className="vocabulary__control">

                </div>
                <div className="vocabulary__content">
                    <div className="vocabulary__en-name">
                        {vocabulary.vocabulary}
                    </div>
                    <div className="vocabulary__vi-name">
                        {vocabulary.meaning}
                    </div>
                </div>
            </div>
        )
    }
}

export default Vocabulary