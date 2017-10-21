import React from 'react';
import SliderBanner from './SliderBanner';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="index-page">
                <SliderBanner/>
            </div>
        )
    }
}