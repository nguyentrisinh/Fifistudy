import React from 'react';
import Vocabulary from './Vocabulary'
import {connect} from 'react-redux';
import FlipMove from 'react-flip-move'

class SectionVocabulary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderVocabulary = () => {
        return this.props.data.map(item => {
            return (
                <div key={item.id} className="section-vocabulary__item">

                    <Vocabulary data={item}/>

                </div>

            )
        })
    }

    render() {
        return (
            <div>
                <div className="section-vocabulary__title">
                    TỪ VỰNG ĐÃ LƯU
                </div>
                    <FlipMove enterAnimation="fade" leaveAnimation="fade" className="section-vocabulary">
                        {
                            this.renderVocabulary()
                        }
                    </FlipMove>
            </div>

        )
    }
}

export default SectionVocabulary