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
    ScreenListFilm,
    ScreenSearchFilm
} from '../Screens/index.js';

import PopupListEpisode from '../Components/PopupListEpisode.js';

const DrawerApp = DrawerNavigator({
    ScreenSearchFilm: { screen: ScreenSearchFilm },
    ScreenListFilm: { screen: ScreenListFilm },
    PopupListEmpisode: { screen: PopupListEpisode },
    ScreenLevels: { screen: ScreenLevels },
    ScreenMovieComment: { screen: ScreenMovieComment },
    ScreenEpisodeComment: { screen: ScreenEpisodeComment },
    ScreenVolcabulary: { screen: ScreenVolcabulary },
    ScreenHome: { screen: ScreenHome },
    ScreenWatchMovie: { screen: ScreenWatchMovie },
    ScreenMovies: { screen: ScreenMovies },
    ScreenNotes: { screen: ScreenNotes }
}, {
        headerMode: 'none',
        initialRouteName: 'ScreenHome',
        contentComponent: DrawerMenu,
    });

export default DrawerApp;