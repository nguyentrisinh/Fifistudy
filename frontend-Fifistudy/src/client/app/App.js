import React from 'react';

import Header from './components/Header';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
            </div>
        )
    }
}

export default App