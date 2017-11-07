import React from 'react';
import {getFilm} from '../actions/dataIntropage'

import {connect} from 'react-redux';
import FilmIntro from './FilmIntro';

class FilmIntroContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount = () => {
        this.props.getFilm(this.props.params.slug);
    }

    render() {
        if (this.props.film) {
            if (this.props.film.errors == null) {
                return (
                    <FilmIntro router={this.props.router}/>
                )
            }
        }
        return null

    }
}

const mapStateToProps = state => {
    return {
        film: state.dataIntropage.film
    }
}
export default connect(mapStateToProps, {getFilm})(FilmIntroContainer)