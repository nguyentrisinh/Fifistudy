import React from 'react';
import FadeTransition from'../components/FadeTransition';
import $ from 'jquery';
import '../../static/css/loading.scss'
import jQuery from 'jquery';
require('imports-loader?jQuery=jquery!letteringjs');
// window.$ = window.jQuery = jQuery;


class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            in:true
        };
    }

    componentDidMount = () => {
        $(document).ready(function () {
            $('.loading').lettering();
        })
    }

    componentWillUnmount = () => {
        this.setState({
            in: false
        })
    }

    render() {
        return (
            <FadeTransition timeout={350}
                            classNames="fade"
                            shouldShow={this.state.in}>
            <div ref="loading" className="loading">
                Loading...
            </div>
            </FadeTransition>
        )
    }
}

export default Loading