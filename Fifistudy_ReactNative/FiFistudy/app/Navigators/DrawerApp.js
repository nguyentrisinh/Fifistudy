import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import { 
    ScreenNotes,
    ScreenHome,
    ScreenLevels,
    ScreenWatchMovie,
    ScreenEpisodeComment,
    ScreenMovieComment,
    ScreenVocabulary,
    ScreenMovies,
    DrawerMenu,
} from '../Screens/index.js';


const DrawerApp = DrawerNavigator({
    ScreenNotes: { screen: ScreenNotes },
    ScreenHome: { screen: ScreenHome },
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