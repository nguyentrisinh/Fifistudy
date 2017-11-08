import React from 'react';

import $ from 'jquery';
import '../../static/css/loading.scss'
import jQuery from 'jquery';
require('imports-loader?jQuery=jquery!letteringjs');
// window.$ = window.jQuery = jQuery;


class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
        $(document).ready(function () {
            $('.loading').lettering();
        })
    }

    render() {
        return (
            <div ref="loading" className="loading">
                Loading...
            </div>
        )
    }
}

export default Loading