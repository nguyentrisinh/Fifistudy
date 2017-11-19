import { DrawerNavigator } from 'react-navigation';
import { ScreenMovies, ScreenNotes } from '../Screens/index.js';

const DrawerApp = DrawerNavigator({
    ScreenMovies: { screen: ScreenMovies },
    ScreenNotes: { screen: ScreenNotes }
})

export default DrawerApp;