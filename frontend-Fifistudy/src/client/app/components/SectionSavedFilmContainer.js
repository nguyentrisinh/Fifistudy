import React from 'react';
import Actor from './Actor'
import Slider from 'react-slick';
import {connect} from 'react-redux';
import ListActor from './ListActor'
import {getVocabulary, getUserSaveFilm} from '../actions/dataUserpage';
import {withCookies} from 'react-cookie';
import SectionVocabulary  from './SectionVocabulary'
import SectionSavedFilm from '../components/SectionSavedFilm'
class SectionVocabularyContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    componentWillMount = () => {
        let {cookies} = this.props;
        let token = cookies.get("token");
        this.props.getUserSaveFilm(token)
    }

    renderContent = () => {

        let {savedFilm} = this.props;
        if (savedFilm.isLoading) {
            return (
                <div className="list-actor__info"> Đang tải ... </div>
            )
        }
        else {
            if (savedFilm.data.errors == null) {
                if (savedFilm.data.data.length > 0) {
                    return (
                        <SectionSavedFilm data={savedFilm.data.data}/>


                    )
                }
                else {
                    return (
                        <div className="list-actor__info">Chưa có từ vựng</div>
                    )
                }
            }
        }
    };


    render() {
        return (

            <div>
                {
                    this.renderContent()
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        savedFilm: state.dataUserpage.savedFilm
    }
}

export default connect(mapStateToProps, {getUserSaveFilm})(withCookies(SectionVocabularyContainer))
