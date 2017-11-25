import React from 'react';
import onClickOutside from 'react-onclickoutside';

import Film1 from '../components/Film1';
import {connect} from 'react-redux';
import ScrollBar from './ScrollBar';
import FlipMove from 'react-flip-move'
import ReactDOM from 'react-dom';

class SearchResult extends React.Component {
    handleClickOutside = () => {
        this.props.closeSearchContainer();
    }
    renderItem = () => {
        return this.props.data.map(item => {
            return <div id={`item${item.id}`} key={item.id} className="search-result__item">
                <Film1 data={item}/>
            </div>
        });
    }

    calcHeight = (data) => {
        let height = 0;
        data.map(item => {
            // console.log(this.refs['item' + item.id])
            // document.getElementById('item' + item.id).clientHeight;
            // console.log()
            height += document.getElementById('item' + item.id).clientHeight;
        });
        this.setState({height});
    }

    // componentWillReceiveProps = (nextProps) =>{
    //     this.calcHeight(nextProps.data);
    // }

    componentDidMount = () => {
        this.calcHeight(this.props.data);
    }
    componentDidUpdate = () => {
        this.calcHeight(this.props.data);
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        // if (this.preventUpdate===true ) return false;
        return this.props.data !== nextProps.data || this.state.height !== nextState.height || this.props.isOpen !== nextProps.isOpen
    }

    constructor(props) {
        super(props);
        this.state = {
            height: 0,
        }
    }

    render() {
        return (
            <div style={{height: (this.props.isOpen === false) ? 0 : this.state.height}} className="search-result"
                 ref="search">
                <ScrollBar>
                    <FlipMove enterAnimation="fade" leaveAnimation="fade">
                        {/*<div>*/}


                        {
                            this.renderItem()
                        }
                        <div key="search" className="search-result search-result__more">
                            <div className="section-user-info__btn section-user-info__btn--search">Xem thêm <i
                                className="fa fa-caret-down"></i></div>
                        </div>
                    </FlipMove>

                </ScrollBar>
            </div>

        )
    }
}
export

default(onClickOutside(SearchResult))