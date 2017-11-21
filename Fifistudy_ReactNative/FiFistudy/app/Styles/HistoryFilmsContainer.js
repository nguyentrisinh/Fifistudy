import {
    StyleSheet,
    Dimensions
} from 'react-native';
import Res from '../Resources/index';

const width = Dimensions.get('window').width;
const styles = {
    listHistoryFilm: {
        width: width,
        elevation: 3,
        backgroundColor: 'white'
    },
    historyFilmImg: {
        resizeMode: 'cover',
        width: width/2.5,
        height: width/2.5*(Res.ratio),
    },
}

export default styles;