import React from 'react';
import Header from './components/HeaderContainer';
import DetailPageContainer from './pages/DetailContainer'
import Index from './pages/Index.jsx';
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {Switch} from 'react-router'
import {withCookies} from 'react-cookie'
import {instanceOf} from 'prop-types';
import {getUserInfo} from './actions/app'
import FilmIntroContainer from './pages/FilmIntroContainer';
import {connect} from 'react-redux';
import SignUp from './pages/SignUp';
import App from './App'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
// import {Transition} from 'react-transition-group'

//
// const duration = 300;
// const defaultStyle = {
//     transition: `opacity ${duration}ms ease-in-out`,
//     opacity: 0,
// }
//
// const transitionStyles = {
//     entering: {opacity: 0},
//     entered: {opacity: 1},
// };


class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: false};
    }

    componentWillMount = () => {
        const {cookies} = this.props;
        if (cookies.get("token")) {
            this.props.getUserInfo(cookies.get("token"));
        }
    }

    //
    // componentWillMount() {
    //    console.log(this.props,'location');
    // }
    //
    // componentWillUnmount() {
    //     console.log('unmount');
    // }

    // handleToggle() {
    //     this.setState(({ show }) => ({
    //         show: !show
    //     }))
    // }

    render() {
        // const { show } = this.state;


        return (
            <Router>
                <div className="app">
                    <Header/>
                    <TransitionGroup>
                        <Switch>
                            <Route exact path="/" component={Index}/>
                            <Route exact path="/film/:filmSlug/:episodeId" component={DetailPageContainer}/>
                            <Route exact path="/film/:slug" component={FilmIntroContainer}/>
                            <Route exact path="/signup" component={SignUp}/>
                        </Switch>
                    </TransitionGroup>


                    {/*<Transition in={true} timeout={duration}>*/}
                    {/*{(state) => (*/}
                    {/*<div style={{*/}
                    {/*...defaultStyle,*/}
                    {/*...transitionStyles[state]*/}
                    {/*}}>*/}
                    {/*{*/}
                    {/*this.props.children*/}
                    {/*}*/}
                    {/*</div>*/}
                    {/*)}*/}
                    {/*</Transition>*/}
                </div>
            </Router>
        )
    }
}


export default withCookies(connect(null, {getUserInfo})(AppContainer))