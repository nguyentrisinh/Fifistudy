import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import { 
    ScreenMovies,
    ScreenNotes,
    ScreenHome,
    ScreenWatchMovie,
    DrawerMenu
} from '../Screens/index.js';

const DrawerApp = DrawerNavigator({
    ScreenHome: { screen: ScreenHome },
    ScreenWatchMovie: {screen: ScreenWatchMovie},
    ScreenMovies: { screen: ScreenMovies },
    ScreenNotes: { screen: ScreenNotes }
}, {
    headerMode: 'none',
    contentComponent: props => <DrawerMenu/>
});

export default DrawerApp;