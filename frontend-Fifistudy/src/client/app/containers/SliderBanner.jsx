import React from 'react';
import Swiper from 'react-id-swiper';
import film1 from '../../static/images/film1.jpg';
import film2 from '../../static/images/film2.jpeg';
import film3 from '../../static/images/film3.jpg';
import BannerItem from '../components/BannerItem.jsx';

class SliderBanner extends React.Component {
    constructor(props) {
        super(props);
        // this.renderSlides = this.renderSlides.bind(this);
    }

    renderSlides = () => {
        return this.props.data.map((item) => {
            return (
                <div key={item.id} className="slider-banner__slide">
                    <BannerItem data={item}/>
                </div>
            )

        })
    };

    render() {
        let configSwiper = {
            loopAdditionalSlides: 5,
            loop: true,
            speed: 1000,
            autoplay: 5000
        };
        return (

            <div className="slider-banner">
                <Swiper  {...configSwiper} containerClass='slider-banner__container'>
                    {
                        this.renderSlides()
                    }
                </Swiper>
            </div>
        )
    }
}

SliderBanner.defaultProps = {
    data: [
        {
            id: 1,
            image: film1,
            quote: "The best I can give you is a fake smile and dead eyes",
            engName: "How I met your mother",
            viName: "Khi bố gặp mẹ",
            level: 1,
        },
        {
            id: 2,
            image: film2,
            quote: "The best I can give you is a fake smile and dead eyes",
            engName: "How I met your mother",
            viName: "Khi bố gặp mẹ",
            level: 2,
        },
        {
            id: 3,
            image: film3,
            quote: "The best I can give you is a fake smile and dead eyes",
            engName: "How I met your mother",
            viName: "Khi bố gặp mẹ",
            level: 3,
        }
    ]
}

export default SliderBanner;