import React from 'react';
import Film1 from './Film1'

class SectionRelatedFilm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderFilm = () => {
        return this.props.data.map(item => {
            return <Film1 key={item.id} data={item}/>
        })
    }

    render() {
        return (
            <div className="section-related-film">
                {
                    this.renderFilm()
                }
            </div>
        )
    }
}

export default SectionRelatedFilm