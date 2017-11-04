import React from 'react';
import SliderBanner from './SliderBanner';
import Intro from '../components/Intro';
import Section from '../components/SectionFilm'
import SectionBlog from '../components/SectionBlog'
import Footer from '../components/Footer';
import Film from '../components/Film'

import {Scrollbars} from 'react-custom-scrollbars';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderFilm = () => {
        return [{}, {}, {}, {}, {}, {}, {}, {}].map(item => {
            return (
                <div className="section__item">
                    <Film/>
                </div>
            )
        })
    };

    render() {
        return (
            <div className="index-page">
                <Scrollbars
                    autoHide={true}
                    renderTrackVertical={props => <div {...props} className="scroll-bar__track-vertical"/>}
                    renderThumbVertical={props => <div {...props} className="scroll-bar__thumb-vertical"/>}
                    autoHeight={true}
                    autoHeightMin="100%"
                    autoHeightMax="100%"
                >
                    <SliderBanner/>
                    <Intro/>
                    <Section>
                        {this.renderFilm()}
                    </Section>
                    <SectionBlog/>
                    <Section>
                        {this.renderFilm()}
                    </Section>
                    <Footer/>
                </Scrollbars>
            </div>
        )
    }
}
export default  Index