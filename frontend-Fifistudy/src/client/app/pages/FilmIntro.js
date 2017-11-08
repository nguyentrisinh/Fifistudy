import React from 'react';
import Banner from '../components/Banner'
import {connect} from 'react-redux';

import FadeTransition from '../components/FadeTransition'

import {Scrollbars} from 'react-custom-scrollbars';
import film from '../../static/images/HowIMetUrMother.jpg'
import ListActor from '../components/ListActor'

import SectionDetailExtra from '../components/SectionDetailExtra'
import Footer from '../components/Footer'

export default class FilmIntro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {in: true}
    }


    componentWillUnmount() {
        this.setState({in: false})
    }

    componentWillMount = () => {

    }

    render() {
        return (
            <FadeTransition timeout={350}
                            classNames="fade"
                            shouldShow={this.state.in}>
                <div className="film-intro-page">

                    <div className="detail-page__overlay"
                         style={{backgroundImage: `url(http://localhost:8000${this.props.data.thumbnail})`}}>
                    </div>
                    <Scrollbars
                        autoHide={true}
                        renderTrackVertical={props => <div {...props} className="scroll-bar__track-vertical"/>}
                        renderThumbVertical={props => <div {...props} className="scroll-bar__thumb-vertical"/>}
                        autoHeight={true}
                        autoHeightMin="100%"
                        autoHeightMax="100%"
                    >
                        <Banner data={this.props.data}/>
                        <ListActor/>
                        <SectionDetailExtra/>

                        <Footer/>


                    </Scrollbars>
                </div>
            </FadeTransition>
        )
    }
}
//
// const mapStateToProps = state => {
//     return {
//         data: state.dataIntropage.film.data.data
//     }
// }
//
//
// export default connect(mapStateToProps)(FilmIntro)