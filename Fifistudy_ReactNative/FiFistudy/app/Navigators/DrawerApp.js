import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import { 
    ScreenHome,
    ScreenNotes,
    ScreenLevels,
    ScreenWatchMovie,
    ScreenEpisodeComment,
    ScreenMovieComment,
    ScreenVocabulary,
    ScreenMovies,
    DrawerMenu,
} from '../Screens/index.js';

const DrawerApp = DrawerNavigator({
    ScreenHome: { screen: ScreenHome },
    ScreenNotes: { screen: ScreenNotes },
    ScreenLevels: {screen: ScreenLevels},
    ScreenWatchMovie: {screen: ScreenWatchMovie},
    ScreenEpisodeComment: {screen: ScreenEpisodeComment},
    ScreenMovieComment: {screen: ScreenMovieComment},
    ScreenVocabulary: {screen: ScreenVocabulary},
    ScreenMovies: { screen: ScreenMovies },
    
}, {
    headerMode: 'none',
    // initialRouteName: 'ScreenHome',
    initialRouteName: 'ScreenVocabulary',
    contentComponent: DrawerMenu,
});

export default DrawerApp;