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
    ScreenLogin,
    ScreenRegister,
    ScreenRegister_Step2,
    ScreenRegister_Step3,
    ScreenRegister_Step4,
} from '../Screens/index.js';
import ScreenRegister_Step1 from '../Screens/ScreenRegister_Step1';

const DrawerApp = DrawerNavigator({
    ScreenNotes: { screen: ScreenNotes },
    ScreenHome: { screen: ScreenHome },
    ScreenLevels: { screen: ScreenLevels },
    ScreenWatchMovie: { screen: ScreenWatchMovie },
    ScreenEpisodeComment: { screen: ScreenEpisodeComment },
    ScreenMovieComment: { screen: ScreenMovieComment },
    ScreenVocabulary: { screen: ScreenVocabulary },
    ScreenMovies: { screen: ScreenMovies },
    ScreenSearchFilm: { screen: ScreenSearchFilm },
    ScreenListFilm: { screen: ScreenListFilm },
    ScreenTips: { screen: ScreenTips },
    FullScreenWatch: { screen: FullScreenWatch },
    ScreenCategories: { screen: ScreenCategories },
    ScreenLogin: { screen: ScreenLogin },
    ScreenRegister: { screen: ScreenRegister },

    //Add below to fix navigation
    Step1: {screen: ScreenRegister_Step1},
    Step2: {screen:ScreenRegister_Step2},
    Step3: {screen: ScreenRegister_Step3},
    Step4: {screen: ScreenRegister_Step4}

}, {
        headerMode: 'none',
        initialRouteName: 'ScreenLogin',
        contentComponent: DrawerMenu,
    });

export default DrawerApp;