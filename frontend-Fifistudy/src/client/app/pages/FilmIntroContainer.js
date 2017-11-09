import React from 'react';
import {getFilm, getActorIntro} from '../actions/dataIntropage'
import {connect} from 'react-redux';
import Loading from '../components/Loading'
import FilmIntro from './FilmIntro';

class FilmIntroContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount = () => {
        this.props.getFilm(this.props.match.params.slug);
        this.props.getActorIntro(this.props.match.params.slug);
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
export default connect(mapStateToProps, {getFilm, getActorIntro})(FilmIntroContainer)