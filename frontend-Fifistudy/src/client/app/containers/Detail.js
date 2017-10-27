import React from 'react'
import film1 from '../../static/images/film1.jpg'
import FilmTitle from '../components/FilmTitle'
import PerfectScrollbar from 'react-perfect-scrollbar';

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

                </div>
            </PerfectScrollbar>
        )
    }
}
export default  Detail