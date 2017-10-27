import React from 'react';
import SliderBanner from './SliderBanner';
import Intro from '../components/Intro';
import Section from '../components/SectionFilm'
import SectionBlog from '../components/SectionBlog'
import Footer from '../components/Footer';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="index-page">
                {/*<Header/>*/}
                <SliderBanner/>
                <Intro/>
                <Section/>
                <SectionBlog/>
                <Section/>
                <Footer/>
            </div>
        )
    }
}
export default  Index