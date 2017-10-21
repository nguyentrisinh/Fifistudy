import React from 'react';
import Swiper from 'react-id-swiper';
import film1 from '../../static/images/film1.jpg';

import film2 from '../../static/images/film2.jpeg';

import film3 from '../../static/images/film3.jpg';

class Header extends React.Component {
    render() {
        let configSwiper = {
            loopAdditionalSlides: 5,
            loop: true,
            speed: 1000,
            autoplay: 5000
        }
        return (

            <div className="slider-banner">
                <Swiper  {...configSwiper} containerClass='slider-banner__container'>
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

export default Header;