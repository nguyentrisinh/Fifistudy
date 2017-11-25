import React from 'react'
import Footer from '../components/Footer'
import Section from '../components/SectionFilm'
import Film from '../components/Film'

import {Scrollbars} from 'react-custom-scrollbars';

class ListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderFilm = () => {
        return [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}].map(item => {
            return (
                <div className="section__item">
                    {/*<Film/>*/}
                    ahihi
                </div>
            )
        })
    };

    render() {
        return (


            <div className="list-page">
                <Scrollbars
                    autoHide={true}
                    renderTrackVertical={props => <div {...props} className="scroll-bar__track-vertical"/>}
                    renderThumbVertical={props => <div {...props} className="scroll-bar__thumb-vertical"/>}
                    autoHeight={true}
                    autoHeightMin="100%"
                    autoHeightMax="100%"
                >

                    <Section>
                        {this.renderFilm()}
                    </Section>


                    <Footer/>
                </Scrollbars>
            </div>

        )
    }
}
export default  ListPage