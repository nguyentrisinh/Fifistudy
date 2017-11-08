import React from 'react';
import film from '../../static/images/HowIMetUrMother.jpg'
import Level from '../components/Level';
import classNames from 'classnames';
import Star from '../components/Star'
import {withRouter} from 'react-router'

import {connect} from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
class Banner extends React.Component {
    constructor(props) {

        super(props);
        let haveEpisode = false;
        let data = this.props.data;
        if (data.episodes[data.episodes.length - 1]) {
            if (data.episodes[data.episodes.length - 1].number) {
                haveEpisode = true;
            }
        }
        this.state = {
            isHiddenBtnPlay: true,
            haveEpisode

        };

    }

    onClickBanner = (evt) => {
        let data = this.props.data;
        if (this.state.haveEpisode) {
            this.props.history.push(`/film/${data.slug}/${data.episodes[data.episodes.length - 1].number}`);
        }

        else {
            event.preventDefault();
        }
    }

    onMouseEnterBanner = () => {
        this.setState({
            isHiddenBtnPlay: false
        })
    }

    onMouseLeaveBanner = () => {
        this.setState({
            isHiddenBtnPlay: true
        })
    }

    render() {
        let data = this.props.data;
        return (
            <div
                // to={`/${data.slug}/${data.episodes[data.episodes.length - 1].id}`}
                className="banner">

                <div className="container">
                    <div style={{cursor: this.state.haveEpisode ? "pointer" : "auto"}} onClick={this.onClickBanner}
                         className="banner__wrap" onMouseEnter={this.onMouseEnterBanner}
                         onMouseLeave={this.onMouseLeaveBanner}>
                        <img src={`http://localhost:8000${data.thumbnail}`} alt="" className="banner__image"/>
                        <div className="banner__overlay">
                        </div>
                        <div className="banner__info">
                            <div className="banner__eng-name">
                                <i className="fa fa-bookmark-o banner__bookmark"></i>
                                &nbsp;
                                {
                                    data.english_name
                                }
                            </div>
                            <div className="banner__vi-name">
                                {
                                    data.vietnamese_name
                                }
                            </div>
                            <div className="banner__detail">

                                <div className="banner__pieces">
                                    <div className="banner__level">
                                        <Level level={data.difficult_level}></Level>
                                    </div>
                                    <div className="banner__title">Số tập: <span
                                        className="banner__content">{data.episode_count}/{data.episode_number}
                                        tập</span></div>
                                    <div className="banner__title">Thời lượng: <span
                                        className="banner__content">{data.duration} phút/tập</span>
                                    </div>
                                    <div className="banner__star">
                                        <Star score={data.average_score}></Star>
                                    </div>
                                </div>
                                <div className="banner__wrap-des">
                                    <div className="banner__description">
                                        {data.description}
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div
                            className={classNames("banner__overlay-btn", {"banner__overlay-btn--open": !this.state.isHiddenBtnPlay && this.state.haveEpisode})}></div>
                        {
                            this.state.haveEpisode ? <div className="playBtn">
                                <svg xmlns="http://www.w3.org/2000/svg" id="play"
                                     className={classNames({"goDown": this.state.isHiddenBtnPlay})} width="119.91"
                                     height="119.91">
                                    <path fill="#E74C3C"
                                          d="M58.8 10.8c-27.77 0-50.3 22.5-50.3 50.3 0 27.78 22.53 50.3 50.3 50.3 27.8 0 50.32-22.52 50.32-50.3 0-27.8-22.53-50.3-50.3-50.3zm0 97.97c-26.32 0-47.66-21.34-47.66-47.67 0-26.34 21.34-47.68 47.67-47.68 26.37 0 47.7 21.34 47.7 47.67 0 26.3-21.33 47.64-47.66 47.64z"/>
                                    <path fill="#E74C3C"
                                          d="M58.8 21.12c-22.07 0-39.97 17.9-39.97 39.98s17.9 39.98 39.98 39.98c22.1 0 40-17.9 40-39.98s-17.9-39.98-40-39.98zm3.52 50.7L43.77 82.47l.04-21.37.07-21.37 18.5 10.72 18.5 10.72L62.3 71.82z"/>
                                </svg>
                            </div> : null
                        }
                    </div>

                    <div className="divider"></div>
                </div>

            </div>
        )
    }
}
//
//
// const mapStateToProps = state => {
//     return {
//         film: state.dataIntropage.film.data.data
//     }
// }
//
//
export default withRouter(Banner)