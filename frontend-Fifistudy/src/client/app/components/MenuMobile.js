import React from 'react';
import PropTypes from 'prop-types';

export default class MenuMobile extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return (
            <div className="menu-mobile">
                <div className="menu-mobile__row">
                    <div onClick={this.props.onClickBurgerButton} className="menu-mobile__item menu-mobile__burger">
                        <i className="fa fa-bars"></i>
                    </div>
                    <div className="menu-mobile__item menu-mobile__logo">
                        <div className="logo menu-mobile__logo-mobile">FifiStudy</div>
                    </div>

                    <div className="menu-mobile__item menu-mobile__avatar">
                        <img className="menu-mobile__img-avatar" src="http://placehold.it/30x30" alt=""/>
                    </div>
                </div>
                <div className="menu-mobile__row">
                    <div className="menu-mobile__item menu-mobile__search">
                        <input className="menu-mobile__input-search" type="text" placeholder="Tìm kiếm..."/>
                    </div>
                </div>
               
            </div>
        )
    }
}

MenuMobile.PropTypes = {
    onClickBurgerButton:PropTypes.func.isRequired,
}