import React from 'react';
import Actor from './Actor'
import Slider from 'react-slick';
import {connect} from 'react-redux';
import ListActor from './ListActor'

class ListActorContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderContent = () => {

        let {actor} = this.props;
        if (actor.isLoading) {
            return (
                <div className="list-actor__info"> Đang tải ... </div>
            )
        }
        else {
            if (actor.data.errors == null) {
                if (actor.data.data.length > 0) {
                    return (
                        <ListActor data={actor.data.data}/>
                    )
                }
                else {
                    return (
                        <div className="list-actor__info">Chưa cập nhật diễn viên</div>
                    )
                }
            }
        }
    };


    render() {
        return (
            <div className="list-actor">
                <div className="container">
                    {
                        this.renderContent()
                    }

                    <div className="divider"></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        actor: state.dataIntropage.actor
    }
}

export default connect(mapStateToProps)(ListActorContainer)
