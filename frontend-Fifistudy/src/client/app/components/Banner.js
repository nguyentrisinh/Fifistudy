import React from 'react';
import film from '../../static/images/HowIMetUrMother.jpg'
import Level from '../components/Level';
import Star from '../components/Star'
import {connect} from 'react-redux';
import {Link} from 'react-router';

class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onClickBanner = (evt) =>{

        let data = this.props.film;
        console.log('this',this);
        if (data.episodes[data.episodes.length-1]){
            if (data.episodes[data.episodes.length - 1].id){
               this.props.router.push(`/${data.slug}/${data.episodes[data.episodes.length - 1].id}`);
            }
        }
        else{
            event.preventDefault();
        }
    }

    render() {
        let data = this.props.film;
        return (
            <Link onClick={this.onClickBanner}
                  // to={`/${data.slug}/${data.episodes[data.episodes.length - 1].id}`}
                  className="banner">
                <div className="container">
                    <div className="banner__wrap">
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
                    </div>
                    <div className="divider"></div>
                </div>
            </Link>
        )
    }
}


const mapStateToProps = state => {
    return {
        film: state.dataIntropage.film.data
    }
}


export default connect(mapStateToProps)(Banner)