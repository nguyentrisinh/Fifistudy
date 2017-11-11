import React from 'react'
import film1 from '../../static/images/HowIMetUrMother.jpg'
import FilmTitle from '../components/FilmTitle'
import VideoFilm from '../components/VideoFilm'
import Episode from '../components/Episode'
import SectionDetailExtra from '../components/SectionDetailExtra'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import Detail from './Detail'
import {connect} from 'react-redux';
import {Scrollbars} from 'react-custom-scrollbars';
import {getEpisode, getFilmDetail, getDataDetailPage} from '../actions/dataDetailPage'

class DetailContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount = () => {
        let {filmSlug, episodeId} = this.props.match.params
        this.getData(filmSlug, episodeId);
        // this.props.getDataDetailPage(filmSlug, episodeId);
        // this.props.getEpisode(this.props.match.params.filmSlug, this.props.match.params.episodeId);
        // this.props.getFilmDetail(this.props.match.params.filmSlug);
    }

    getData = (filmSlug, episodeId) => {
        this.props.getDataDetailPage(filmSlug, episodeId);
    }


    componentWillReceiveProps = (nextProps) => {
        if (nextProps.match.params.filmSlug !== this.props.match.params.filmSlug || nextProps.match.params.episodeId !== this.props.match.params.episodeId) {
            let {filmSlug, episodeId} = nextProps.match.params
            this.getData(filmSlug, episodeId);
        }
    }

    render() {
        console.log(this.props.data, 'dataaa');
        // if (this.props.episode && this.props.filmDetail) {
        //     if (this.props.episode.errors == null && this.props.filmDetail.errors == null) {
        //         if (this.props.episode.data && this.props.filmDetail.data) {
        //             return (
        //                 <Detail episode={this.props.episode.data} filmDetail={this.props.filmDetail.data}/>
        //             )
        //         }
        //     }
        // }
        // return null
        if (this.props.data.isLoading) {
            return <Loading/>
        }
        else {

            if (this.props.data.serverData) {
                let {episode, film} = this.props.data.serverData;
                if (episode.errors == null && film.errors == null) {
                    if (episode.data && film.data) {
                        debugger
                        return (
                            <Detail episode={episode.data} filmDetail={film.data}/>
                        )
                    }
                }
            }
        }
        return <div style={{color: "white"}}>Loi</div>

    }
}

const mapStateToProps = state => {
    return {
        data: state.dataDetailpage.localData,
        // filmDetail: state.dataDetailpage.filmDetail
    }
}
export default  connect(mapStateToProps, {getEpisode, getFilmDetail, getDataDetailPage})(DetailContainer)