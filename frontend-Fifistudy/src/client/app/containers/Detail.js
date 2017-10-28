import React from 'react'
import film1 from '../../static/images/film1.jpg'
import FilmTitle from '../components/FilmTitle'
import PerfectScrollbar from 'react-perfect-scrollbar';
import VideoFilm from '../components/VideoFilm'

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (

            <PerfectScrollbar>
                <div className="detail-page">
                    <div className="detail-page__overlay" style={{backgroundImage: `url(${film1})`}}>
                    </div>


                    <FilmTitle/>
                    <VideoFilm/>

                </div>
            </PerfectScrollbar>
        )
    }
}
export default  Detail