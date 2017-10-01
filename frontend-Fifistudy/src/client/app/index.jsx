import React from 'react';
import {render} from 'react-dom';

import SliderBanner from './SliderBanner.jsx';
import '../static/css/index.scss'

class App extends React.Component {
    render () {
        return (
            <div>
                <SliderBanner />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
