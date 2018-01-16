import React, {Component} from 'react';
import { TabNavigator } from 'react-navigation';
import Res from '../Resources/index.js';
import ScreenMovieDetail from '../Screens/ScreenMovieDetail.js';
import ScreenMovieComment from '../Screens/ScreenMovieComment.js';

const mapNavigationStateParamsToProps = (SomeComponent) => {
    return class extends Component {
        static navigationOptions = SomeComponent.navigationOptions; // better use hoist-non-react-statics
        render() {
            const {navigation: {state: {params}}} = this.props
            return <SomeComponent {...params} {...this.props} />
        }
    }
}

const TabMovies = TabNavigator({
    'Thông tin': { screen: mapNavigationStateParamsToProps(ScreenMovieDetail) },
    'Bình luận': { screen: mapNavigationStateParamsToProps(ScreenMovieComment)}
}, {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: Res.colors.blue,
            inactiveTintColor: 'white',
            labelStyle: {
                color: Res.colors.blue,
                fontSize: 14,
                fontWeight: 'bold',
            },
            style: {
                backgroundColor: Res.colors.background,
            }
        }
    });

export default TabMovies;