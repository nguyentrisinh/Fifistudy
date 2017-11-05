import React from 'react';
import SliderBannerContainer from '../containers/SliderBannerContainer';
import Intro from '../components/Intro';
import Section from '../components/SectionFilm'
import SectionBlog from '../components/SectionBlog'
import Footer from '../components/Footer';
import Film from '../components/Film'
import MostViewContainer from '../containers/MostViewContainer'
import {connect} from 'react-redux';
import {getPromotes, getMostSave, getMostView} from '../actions/dataHomepage'

import {Scrollbars} from 'react-custom-scrollbars';

class Index extends React.Component {
    componentWillMount = () => {
        this.props.getPromotes();
        this.props.getMostSave();
        this.props.getMostView();
    }

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
                    <SliderBannerContainer/>
                    <Intro/>
                    <MostViewContainer/>
                    <SectionBlog/>
                    {/*<Section title="PHIM ĐƯỢC QUAN TÂM NHIỀU NHẤT">*/}
                    {/*{this.renderFilm()}*/}
                    {/*</Section>*/}
                    <Footer/>
                </Scrollbars>
            </div>
        )
    }
}
export default  connect(null, {getPromotes, getMostSave, getMostView})(Index)