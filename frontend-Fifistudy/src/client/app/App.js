import React from 'react';
import Header from './components/Header';

import DetailPageContainer from './pages/DetailContainer'
import Index from './pages/Index.jsx';
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {Switch} from 'react-router'

import FilmIntroContainer from './pages/FilmIntroContainer'
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


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: false};
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
                <div>
                    <Header/>
                    <TransitionGroup>
                        <Switch>
                            <Route exact path="/" component={Index}/>
                            <Route exact path="/film/:filmSlug/:episodeId" component={DetailPageContainer}/>
                            <Route exact path="/film/:slug" component={FilmIntroContainer}/>
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

export default App