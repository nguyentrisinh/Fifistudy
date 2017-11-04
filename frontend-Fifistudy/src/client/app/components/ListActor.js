import React from 'react';
import Actor from './Actor'
import Slider from 'react-slick';

function NextArrow(props) {
    const {className, style, onClick} = props
    return (
        <div
            className={className + " list-actor__button list-actor__button--next"}
            onClick={onClick}
        >
        </div>
    );
}
function PrevArrow(props) {
    const {className, style, onClick} = props
    return (
        <div
            className={className + " list-actor__button list-actor__button--prev"}
            onClick={onClick}
        >
        </div>
    );
}

export default class ListActor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderActor = () => {
        return this.props.data.map(item => {
            return (
                <div>
                    <Actor data={item}/>
                </div>)

        })
    }

    render() {
        var settings = {
            dots: false,
            speed: 1000,
            slidesToShow: 6,
            slidesToScroll: 2,
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>,
            autoplay: true,
            infinite: true,
        };
        return (
            <div className="list-actor">
                <div className="container">
                    <div className="list-actor__wrap">
                        <div className="list-actor__title">
                            DIỄN VIÊN
                        </div>
                        <div className="divider"></div>
                        <div className="list-actor__actors">

                            <Slider {...settings}>
                                {
                                    this.renderActor()
                                }
                            </Slider>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ListActor.defaultProps = {
    data: [{
        realName: "Scarlett Johansson",
        asName: "Qủa phụ áo đen",
        image: "https://images.wallpapersden.com/image/download/scarlett-johansson-sexy-wallpapers_50794_360x640.jpg"
    },
        {
            image: "https://wallpaperscraft.com/image/chris_evans_actor_guy_charming_smile_19106_360x640.jpg",
            realName: "Chris Evans",
            asName: "Captain American"
        },
        {
            image: "https://wallpaperscraft.com/image/chris_hemsworth_long_hair_jacket_look_61412_360x640.jpg",
            realName: "Chris Hemsworth",
            asName: "Thor"
        },
        {
            image: "https://www.desktopbackground.org/download/360x640/2014/12/04/865849_tom-hiddleston-hd-wallpapers_1920x1080_h.jpg",
            realName: "Tom Hiddleston",
            asName: "Loki"
        },
        {
            image: "data:image/jpeg;base64,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",
            realName: "Jeremy Renner",
            asName: "Clint Barton"
        }, {
            image: "http://www.desktop-background.com/download/360x640/2015/09/16/1012115_robert-downey-jr-photos_1000x1342_h.jpg",
            realName: "Robert Downey Jr",
            asName: "Tony Stark"
        },


    ]
}