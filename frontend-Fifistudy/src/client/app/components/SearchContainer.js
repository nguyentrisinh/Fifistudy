import React from 'react';
import {getSearch} from '../actions/app';
import {connect} from 'react-redux';
import {ORDER_BY} from '../constants/apiPath';
import SearchResult from './SearchResult';

class SearchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: "",
            isOpen: false
        };
    }

    openSearchContainer = () => {
        this.setState({
            isOpen: true
        })
    }

    renderSearchResult = () => {
        if (this.props.searchResult) {
            if (this.props.searchResult.errors == null) {
                if (this.props.searchResult.data) {
                    return (
                        <SearchResult closeSearchContainer={this.closeSearchContainer} isOpen={this.state.isOpen}
                                      outsideClickIgnoreClass="header__item--search"
                                      data={this.props.searchResult.data}/>
                    )
                }
            }
        }
        return null
    }

    onTextSearchChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        this.props.getSearch(e.target.value, ORDER_BY.createdAtIncrease, 1, 5)
    }

    closeSearchContainer = () => {
        this.setState({
            isOpen: false
        })
    }

    render() {
        return (
            <div className="header__item header__item--search">
                <input onClick={this.openSearchContainer} name="searchValue" onChange={this.onTextSearchChange}
                       className="header__search" type="text"
                       placeholder="search"/>
                {
                    this.renderSearchResult()
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        searchResult: state.app.searchResult,
        isLogin: state.app.isLogin
    }
}

export default connect(mapStateToProps, {getSearch})(SearchContainer)