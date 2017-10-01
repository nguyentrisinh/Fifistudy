import React from 'react';
import Swiper from 'react-id-swiper';
import film1 from '../static/images/film1.jpg'

import film2 from '../static/images/film2.jpeg'

import film3 from '../static/images/film3.jpg'

class SliderBanner extends React.Component {
    render() {
        return (
            <div  className="slider-banner">
                <div className="slider-banner__overlay"></div>
                <Swiper loop = {true} loopAdditionalSlides={1} speed={1000} autoplay={5000} containerClass= 'slider-banner__container' >
                    <div className="slider-banner__slide">
                        <img className="slider-banner__img" src={film1} alt=""/>
                    </div>
                    <div className="slider-banner__slide"><img className="slider-banner__img" src={film2} alt=""/></div>
                    <div className="slider-banner__slide"><img className="slider-banner__img" src={film3} alt=""/></div>
                </Swiper>
            </div>
        )
    }
}

export default SliderBanner;