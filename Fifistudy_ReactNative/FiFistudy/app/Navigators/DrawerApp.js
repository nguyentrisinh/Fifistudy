import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import { 
    ScreenNotes,
    ScreenHome,
    DrawerMenu,


    ScreenLevels,
    ScreenWatchMovie,
    ScreenEpisodeComment,
    ScreenMovieComment,
    ScreenVolcabulary,
    ScreenMovies,
} from '../Screens/index.js';

const DrawerApp = DrawerNavigator({
    ScreenLevels: {screen: ScreenLevels},
    ScreenMovieComment: {screen: ScreenMovieComment},
    ScreenEpisodeComment: {screen: ScreenEpisodeComment},
    ScreenVolcabulary: {screen: ScreenVolcabulary},
    ScreenHome: { screen: ScreenHome },
    ScreenWatchMovie: {screen: ScreenWatchMovie},
    ScreenMovies: { screen: ScreenMovies },
    ScreenNotes: { screen: ScreenNotes }
}, {
    headerMode: 'none',
    // initialRouteName: 'ScreenHome',
    initialRouteName: 'ScreenHome',
    contentComponent: DrawerMenu,
});

export default DrawerApp;