import React from 'react';
import {serverDomain} from '../config/server';
import {deleteVocabulary} from '../actions/api';
import {getVocabulary} from '../actions/dataUserpage';
import {connect} from 'react-redux';
import {withCookies} from 'react-cookie';


class Vocabulary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onClickDelete = () => {
        let {vocabulary, episode, film} = this.props.data;
        let {cookies} = this.props;
        let token = cookies.get("token")
        deleteVocabulary(vocabulary.id, token).then(response => {
            if (response.data.errors == null) {
                this.props.getVocabulary(token);
            }
            else {
                alert("Xóa thất bại")
            }
        })
    }

    render() {

        let {vocabulary, episode, film} = this.props.data;
        return (
            <div className="vocabulary" style={{backgroundImage: `url(${serverDomain + film.thumbnail})`}}>
                <div className="vocabulary__overlay">

                </div>
                <div className="vocabulary__control-overlay">

                </div>
                <div className="vocabulary__content">
                    <div className="vocabulary__en-name">
                        {vocabulary.vocabulary}
                    </div>
                    <div className="vocabulary__vi-name">
                        {vocabulary.meaning}
                    </div>
                </div>
                <div className="vocabulary__control">
                    <i className="material-icons vocabulary__icon">ondemand_video</i>
                    <i className="material-icons vocabulary__icon">edit</i>
                    <i onClick={this.onClickDelete} className="material-icons vocabulary__icon">
                        delete
                    </i>
                </div>
            </div>
        )
    }
}

export default connect(null, {getVocabulary})(withCookies(Vocabulary))