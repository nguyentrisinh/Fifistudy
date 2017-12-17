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
    ScreenListFilm,
    ScreenSearchFilm,
    ScreenTips,
    DrawerMenu,
    FullScreenWatch,
    ScreenCategories,
    ScreenMovieContainer,
    ScreenWatchMovieContainer
} from '../Screens/index.js';

import PopupListEpisode from '../Components/PopupListEpisode.js';

const DrawerApp = DrawerNavigator({
    ScreenNotes: { screen: ScreenNotes },
    ScreenHome: { screen: ScreenHome },
    ScreenLevels: {screen: ScreenLevels},
    ScreenWatchMovie: {screen: ScreenWatchMovieContainer},
    ScreenEpisodeComment: {screen: ScreenEpisodeComment},
    ScreenMovieComment: {screen: ScreenMovieComment},
    ScreenVocabulary: {screen: ScreenVocabulary},
    PopupListEmpisode: { screen: PopupListEpisode },
    ScreenMovies: { screen: ScreenMovieContainer },
    ScreenSearchFilm: { screen: ScreenSearchFilm },
    ScreenListFilm: { screen: ScreenListFilm },
    ScreenTips: {screen: ScreenTips},
    FullScreenWatch: {screen: FullScreenWatch},
    ScreenCategories: {screen: ScreenCategories}
}, {
        headerMode: 'none',
        initialRouteName: 'ScreenHome',
        contentComponent: DrawerMenu,
    });

export default DrawerApp;