import React from 'react'
import film1 from '../../static/images/HowIMetUrMother.jpg'
import FilmTitle from '../components/FilmTitle'
import VideoFilm from '../components/VideoFilm'
import Episode from '../components/Episode'
import SectionDetailExtra from '../components/SectionDetailExtra'
import Footer from '../components/Footer'

import {Scrollbars} from 'react-custom-scrollbars';

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (


            <div className="detail-page">

                <div className="detail-page__overlay" style={{backgroundImage: `url(${film1})`}}>
                </div>
                <Scrollbars
                    autoHide={true}
                    renderTrackVertical={props => <div {...props} className="scroll-bar__track-vertical"/>}
                    renderThumbVertical={props => <div {...props} className="scroll-bar__thumb-vertical"/>}
                    autoHeight={true}
                    autoHeightMin="100%"
                    autoHeightMax="100%"
                >


                    <FilmTitle/>
                    <VideoFilm/>
                    <Episode/>
                    <SectionDetailExtra/>

                    <Footer/>
                </Scrollbars>
            </div>

        )
    }
}
export default  Detail