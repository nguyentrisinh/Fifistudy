import React from 'react';
import Banner from '../components/Banner'

import {Scrollbars} from 'react-custom-scrollbars';
import film from '../../static/images/HowIMetUrMother.jpg'
import ListActor from '../components/ListActor'

import SectionDetailExtra from '../components/SectionDetailExtra'
import Footer from '../components/Footer'

class FilmIntro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="film-intro-page">

                <div className="detail-page__overlay" style={{backgroundImage: `url(${film})`}}>
                </div>
                <Scrollbars
                    autoHide={true}
                    renderTrackVertical={props => <div {...props} className="scroll-bar__track-vertical"/>}
                    renderThumbVertical={props => <div {...props} className="scroll-bar__thumb-vertical"/>}
                    autoHeight={true}
                    autoHeightMin="100%"
                    autoHeightMax="100%"
                >
                    <Banner/>
                    <ListActor/>
                    <SectionDetailExtra/>

                    <Footer/>


                </Scrollbars>
            </div>
        )
    }
}

export default FilmIntro