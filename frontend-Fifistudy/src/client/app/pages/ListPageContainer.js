import React from 'react'
import Footer from '../components/Footer'
import FadeTransition from '../components/FadeTransition'
import Section from '../components/SectionFilm'
import {connect} from 'react-redux';
import {getListPage, resetListFilm} from '../actions/dataListPage';
import Film from '../components/Film';
import {ORDER_BY, MAX_PAGE_LIST} from '../constants/apiPath'

import {Scrollbars} from 'react-custom-scrollbars';

const MAP_ROUTE_TO_ORDER_BY = {
    "lastest": ORDER_BY.createdAtReduce,
    "high-rating": ORDER_BY.reviewNumberReduce,
    "much-interest": ORDER_BY.saveNumberReduce,
}

const MAP_ROUTE_TO_TITLE = {
    "lastest": "PHIM MỚI NHẤT",
    "high-rating": "PHIM HOT NHẤT",
    "much-interest": "PHIM ĐƯỢC QUAN TÂM NHIỀU NHẤT",
}

class ListPageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount = () => {
        this.getData(this.props.match.params.slugList, this.props.dataListPage.nextPage);
    }

    renderFilm = () => {
        return this.props.dataListPage.data.map(item => {
            return (
                <div key={item.id} className="section__item">
                    <Film data={item}/>
                    {/*ahihi*/}
                </div>
            )
        })
    };

    getData = (slugList, nextPage) => {
        this.props.getListPage(slugList, nextPage, MAX_PAGE_LIST, null);
    }
    onClickSeeMore = () => {
        this.getData(this.props.match.params.slugList, this.props.dataListPage.nextPage);
    }
    renderLoadingAndSeeMore = () => {
        if (this.props.dataListPage.isLoading) {
            return (
                <div id="spinner" className="search-result search-result__more">
                    <div className="loader">
                        <div className="inner one"></div>
                        <div className="inner two"></div>
                        <div className="inner three"></div>
                    </div>
                </div>
            )
        }
        else {
            if (this.props.dataListPage.hasMore) {
                return (
                    <div id="see-more" key="search" className="search-result search-result__more">
                        <div onClick={this.onClickSeeMore}
                             className="section-user-info__btn section-user-info__btn--search">Xem
                            thêm <i
                                className="fa fa-caret-down"></i></div>
                    </div>
                )

            }
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.match.params.slugList !== this.props.match.params.slugList) {
            this.props.resetListFilm(nextProps.match.params.slugList, 1, MAX_PAGE_LIST, null);
        }
    }

    render() {
        return (

            <FadeTransition>
                <div className="list-page">
                    <Scrollbars
                        autoHide={true}
                        renderTrackVertical={props => <div {...props} className="scroll-bar__track-vertical"/>}
                        renderThumbVertical={props => <div {...props} className="scroll-bar__thumb-vertical"/>}
                        autoHeight={true}
                        autoHeightMin="100%"
                        autoHeightMax="100%"
                    >

                        <Section title={MAP_ROUTE_TO_TITLE[this.props.match.params.slugList]}>

                            {this.renderFilm()}


                        </Section>
                        {
                            this.renderLoadingAndSeeMore()
                        }
                        <div className="divider"></div>

                        <Footer/>
                    </Scrollbars>
                </div>
            </FadeTransition>

        )
    }
}

const mapStateToProps = state => {
    return {
        dataListPage: state.dataListPage.dataListPage
    }
}
export default  connect(mapStateToProps, {getListPage, resetListFilm})(ListPageContainer)