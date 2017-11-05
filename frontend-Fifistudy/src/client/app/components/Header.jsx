import React from 'react';
import Logo from './Logo.jsx';
import Menu from './Menu'
import {Link} from 'react-router';
import classNames from 'classnames'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: null
        };
    }

    onClickMenu = (menu) => {
        this.setState({
            open: menu
        })
    }

    closeMenu = () => {
        this.setState({
            open: null
        })
    }

    render() {
        return (
            <div className="header">
                <div className="container header__container">
                    <Link to="/" className="header__item">
                        <Logo/>
                    </Link>
                    <div
                        onClick={this.onClickMenu.bind(this, "phim")}
                        className={classNames("header__item header__item--has-children", {"header__item--open": this.state.open === "phim"})}
                    >
                        Phim
                        <Menu closeMenu={this.closeMenu} outsideClickIgnoreClass="header__item--has-children"
                              isOpen={this.state.open === "phim"}/>
                    </div>
                    <div
                        onClick={this.onClickMenu.bind(this, "blog")}
                        className={classNames("header__item header__item--has-children", {"header__item--open": this.state.open === "blog"})}
                    >
                        Blog
                        <Menu closeMenu={this.closeMenu} outsideClickIgnoreClass="header__item--has-children"
                              isOpen={this.state.open === "blog"}/>
                    </div>
                    <div className="header__item header__item--search">
                        <input className="header__search" type="text" placeholder="search"/>

                    </div>
                    <div className="header__item">
                        <div className="header__profile">
                            <div className="header__wrap-avatar">
                                <img src="http://placehold.it/50x50" alt="Avatar" className="header__avatar"/>
                            </div>
                            <div className="header__name">
                                Nguyễn Thanh Liêm
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;