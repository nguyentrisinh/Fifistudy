import React from 'react';

class Episode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
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

                            <div className="episode__item">
                                1
                            </div>
                            <div className="episode__item">
                                2
                            </div>
                            <div className="episode__item">
                                3
                            </div>
                            <div className="episode__item">
                                4
                            </div>
                            <div className="episode__item">
                                5
                            </div>
                            <div className="episode__item">
                                6
                            </div>
                            <div className="episode__item">
                                7
                            </div>
                        </div>
                    </div>

                    <div className="divider"></div>
                </div>
            </div>
        )
    }
}
export default Episode