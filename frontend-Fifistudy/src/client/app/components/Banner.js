import React from 'react';
import film from '../../static/images/HowIMetUrMother.jpg'
import Level from '../components/Level';
import Star from '../components/Star'
import {connect} from 'react-redux';

class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let data = this.props.film;
        return (
            <div className="banner">
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
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        film: state.dataIntropage.film.data
    }
}


export default connect(mapStateToProps)(Banner)