import React from 'react';
import Film from './Film';

class SectionFilm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="section">
                <div className="container section__title">
                    PHIM ĐƯỢC XEM NHIỀU NHẤT
                </div>
                <div className="divider"></div>
                <div className="container section__body">
                    {this.props.children}
                </div>
                <div className="divider"></div>
            </div>
        )

    }
}
export default SectionFilm