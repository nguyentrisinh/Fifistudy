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
    ScreenVocabulary,
    ScreenMovies,
    ScreenListFilm,
    ScreenSearchFilm,
    ScreenTips,
} from '../Screens/index.js';

import PopupListEpisode from '../Components/PopupListEpisode.js';

const DrawerApp = DrawerNavigator({
    ScreenNotes: { screen: ScreenNotes },
    ScreenHome: { screen: ScreenHome },
    ScreenLevels: {screen: ScreenLevels},
    ScreenWatchMovie: {screen: ScreenWatchMovie},
    ScreenEpisodeComment: {screen: ScreenEpisodeComment},
    ScreenMovieComment: {screen: ScreenMovieComment},
    ScreenVocabulary: {screen: ScreenVocabulary},
    ScreenSearchFilm: { screen: ScreenSearchFilm },
    ScreenListFilm: { screen: ScreenListFilm },
    PopupListEmpisode: { screen: PopupListEpisode },
    ScreenMovies: { screen: ScreenMovies },
    ScreenTips: {screen: ScreenTips},
    
}, {
        headerMode: 'none',
        initialRouteName: 'ScreenHome',
        contentComponent: DrawerMenu,
    });

export default DrawerApp;