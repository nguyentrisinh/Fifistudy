import React from 'react';
import {getFilm, getActorIntro, getComment, getFilmByDifficult} from '../actions/dataIntropage'
import {connect} from 'react-redux';
import Loading from '../components/Loading'
import FilmIntro from './FilmIntro';
import {withCookies} from 'react-cookie';
import _ from 'lodash';

class FilmIntroContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    initPage = (slug) => {
        let {cookies} = this.props;
        let token = cookies.get("token");
        this.props.getFilm(slug);
        this.props.getActorIntro(slug);
        this.props.getComment(slug, token);
    }

    componentWillMount = () => {
        this.initPage(this.props.match.params.slug);
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.film !== this.props.film) {
            if (_.has(nextProps.film, "data.data")) {
                this.props.getFilmByDifficult(nextProps.film.data.data.difficult_level)
            }
        }
        if (nextProps.match.params.slug !== this.props.match.params.slug) {
            this.initPage(nextProps.match.params.slug)
        }
    }

    render() {
        if (this.props.film.isLoading) {
            return <Loading/>
        }
        else {
            if (this.props.film.data.errors == null) {
                return (
                    <FilmIntro data={this.props.film.data.data}/>
                )
            }
        }
        return <div style={{color: "white"}}>Loi</div>

    }
}

const mapStateToProps = state => {
    return {
        film: state.dataIntropage.film
    }
}
export default connect(mapStateToProps, {
    getFilm,
    getActorIntro,
    getComment,
    getFilmByDifficult
})(withCookies(FilmIntroContainer))