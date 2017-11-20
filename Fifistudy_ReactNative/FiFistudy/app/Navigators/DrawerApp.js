import { DrawerNavigator } from 'react-navigation';
import { ScreenMovies, ScreenNotes, ScreenHome } from '../Screens/index.js';

const DrawerApp = DrawerNavigator({
    ScreenHome: { screen: ScreenHome },
    ScreenMovies: { screen: ScreenMovies },
    ScreenNotes: { screen: ScreenNotes }
})

export default DrawerApp;