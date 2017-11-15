import {TabNavigator} from 'react-navigation';

import ScreenMovieDetail from '../Screens/ScreenMovieDetail.js';
import ScreenMovieComment from '../Screens/ScreenMovieComment.js';

const TabMovies = TabNavigator({
    ScreenMovieDetail: {screen: ScreenMovieDetail},
    ScreenMovieComment: {screen: ScreenMovieComment}
})

export default TabMovies;