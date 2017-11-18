import React from 'react';
import Logo from './Logo.jsx';
import Menu from './Menu'
// import {Link} from 'react-router';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import {toggleModalLogin} from '../actions/app'
import ReactImageFallback from "react-image-fallback";
import classNames from 'classnames';
import {getLogout} from '../actions/api'
import {connect} from 'react-redux';
import {withCookies} from 'react-cookie'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: null,
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

    onClickAccountSection = () => {
        let {cookies} = this.props;

        if (cookies.get("token")) {
            let token = cookies.get("token");

            getLogout(token).then(res => {
                if (res.data.errors == null) {
                    cookies.remove("token");
                    window.location.reload();
                }
            })

        }
    }

    renderAccountSection = () => {
        if (this.props.userInfo) {

            if (this.props.userInfo.data.errors == null) {
                let userInfo = this.props.userInfo.data.data;
                return (
                    <div className="header__item" onClick={this.onClickAccountSection}>
                        <div className="header__profile">
                            <div className="header__wrap-avatar"
                                 style={{backgroundImage: userInfo.avatar ? `url(http://localhost:8000${userInfo.avatar})` : `url(http://placehold.it/50x50)`}}>
                                {/*<ReactImageFallback*/}
                                {/*src={`http://localhost:8000${userInfo.avatar}`}*/}
                                {/*fallbackImage="http://placehold.it/50x50"*/}
                                {/*initialImage="http://placehold.it/50x50"*/}
                                {/*alt="Avatar"*/}
                                {/*className="" />*/}
                                {/*<img src="http://placehold.it/50x50" alt="Avatar" className="header__avatar"/>*/}
                            </div>
                            <div className="header__name">
                                {
                                    (userInfo.first_name && userInfo.last_name) ? `${userInfo.first_name} ${userInfo.last_name}` : userInfo.username
                                }
                            </div>
                        </div>
                    </div>
                )


            }
        }
        return (<div className="header__item header__item--account">
            <span onClick={this.onClickLogin} className="header__login">Đăng nhập / </span>
            <Link to="/signup" className="header__signup">Đăng kí</Link>
        </div>)
    }

    onClickLogin = () => {
        // this.setState({
        //     isModalOpen: true
        // })
        this.props.toggleModalLogin();
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
                    {this.renderAccountSection()}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        userInfo: state.app.userInfo
    }
}

export default connect(mapStateToProps, {toggleModalLogin})(withCookies(Header));