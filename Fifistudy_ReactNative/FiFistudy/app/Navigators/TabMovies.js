import { TabNavigator } from 'react-navigation';

//Below import lines not working!!
// import {
//     ScreenMovieDetail,
//     ScreenMovieComment
// } from '../Screens/index.js';

import ScreenMovieDetail from '../Screens/ScreenMovieDetail.js';
import ScreenMovieComment from '../Screens/ScreenMovieComment.js';

const TabMovies = TabNavigator({
    ScreenMovieDetail: { screen: ScreenMovieDetail },
    ScreenMovieComment: { screen: ScreenMovieComment }
}, {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: 'white',
            labelStyle: {
                color: 'blue',
                fontSize: 13
            },
            style: {
                backgroundColor: 'white'
            }
        }
    });

export default TabMovies;