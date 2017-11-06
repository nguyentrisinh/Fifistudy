import React from 'react'
import film1 from '../../static/images/HowIMetUrMother.jpg'
import FilmTitle from '../components/FilmTitle'
import VideoFilm from '../components/VideoFilm'
import Episode from '../components/Episode'
import SectionDetailExtra from '../components/SectionDetailExtra'
import Footer from '../components/Footer'
import Detail from './Detail'
import {connect} from 'react-redux';
import {Scrollbars} from 'react-custom-scrollbars';
import {getEpisode, getFilmDetail} from '../actions/dataDetailPage'

class DetailContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount = () => {
        this.props.getEpisode(this.props.params.filmSlug, this.props.params.episodeId);
        this.props.getFilmDetail(this.props.params.filmSlug);
    }

    render() {
        if (this.props.episode && this.props.filmDetail) {
            if (this.props.episode.errors == null && this.props.filmDetail.errors == null) {
                if (this.props.episode.data && this.props.filmDetail.data) {
                    return (
                        <Detail episode={this.props.episode.data} filmDetail={this.props.filmDetail.data}/>


                    )
                }
            }
        }
        return null

    }
}

const mapStateToProps = state => {
    return {
        episode: state.dataDetailpage.episode,
        filmDetail: state.dataDetailpage.filmDetail
    }
}
export default  connect(mapStateToProps, {getEpisode, getFilmDetail})(DetailContainer)