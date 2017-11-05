import React from 'react';
import Film1 from './Film1'

class SectionRelatedFilm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="section-related-film">
                <Film1/><Film1/><Film1/><Film1/><Film1/>
            </div>
        )
    }
}

export default SectionRelatedFilm