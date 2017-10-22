import React from 'react';
import SliderBanner from './SliderBanner';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Section from '../components/Section'

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="index-page">
                <Header/>
                <SliderBanner/>
                <Intro/>
                <Section/>
            </div>
        )
    }
}
export default  Index