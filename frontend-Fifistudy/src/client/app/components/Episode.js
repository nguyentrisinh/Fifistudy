import React from 'react';

class Episode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderEpisode = () => {
        let {data} = this.props;
        let arr = data.episodes.map(item => {
            return item.number
        })
        return arr.map(item => {
            return (

                <div className="episode__item">
                    {item}
                </div>
            )

        })
    }

    render() {
        return (


            <div className="episode">
                <div className="container">
                    <div className="episode__wrap ">
                        <div className="episode__title">
                            CÁC TẬP PHIM
                        </div>
                        <div className="episode__content">

                            {
                                this.renderEpisode()
                            }
                        </div>
                    </div>

                    <div className="divider"></div>
                </div>
            </div>
        )
    }
}
export default Episode