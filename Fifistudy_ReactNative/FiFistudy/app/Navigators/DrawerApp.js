import { DrawerNavigator } from 'react-navigation';
import { 
    ScreenMovies,
    ScreenNotes,
    ScreenHome,
    ScreenWatchMovie
} from '../Screens/index.js';

const DrawerApp = DrawerNavigator({
    ScreenWatchMovie: {screen: ScreenWatchMovie},
    //ScreenHome: { screen: ScreenHome },
    ScreenMovies: { screen: ScreenMovies },
    ScreenNotes: { screen: ScreenNotes }
})

export default DrawerApp;