import React from 'react';
import Level from './Level'
import {serverDomain} from '../config/server';
import Star from '../components/Star';
import {Link} from 'react-router-dom'

class Film1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let {data} = this.props;
        return (
            <Link to={`/film/${data.slug}`} className="related-film">
                <div className="related-film__wrap-image">
                    <img src={serverDomain + data.thumbnail} alt="" className="related-film__image"/>
                </div>
                <div className="related-film__info">
                    <div className="related-film__eng-name" title={data.english_name}>
                        {data.english_name}
                    </div>
                    <div className="related-film__vi-name" title={data.vietnamese_name}>
                        {data.vietnamese_name}
                    </div>
                    <div className="related-film__level">
                        <Star score={data.average_score}></Star>
                    </div>
                </div>
            </Link>
        )
    }
}

export default Film1