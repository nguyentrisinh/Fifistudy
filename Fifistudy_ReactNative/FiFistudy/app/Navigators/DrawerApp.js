import { DrawerNavigator } from 'react-navigation';
import { ScreenMovies } from '../Screens/index.js';

const DrawerApp = DrawerNavigator({
    ScreenMovies: { screen: ScreenMovies },
})

export default DrawerApp;