import {
    StyleSheet,
    Dimensions
} from 'react-native';
import Resources from '../../resources/resources';
import Utils from '../../Utils';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Resources.colors.homePageBackground,
        flexGrow: 1,
        alignItems: 'center'
    },
    bannerSlider: {
        width: width,
        height: width/2,
        backgroundColor: 'lightgray',
        zIndex: 0
    },
    subtitleGroup: {
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
        paddingLeft: 16
    },
    subtitle: {
        fontFamily: Resources.fonts.common,
        fontWeight: 'bold',
        color: Resources.colors.blue,
        fontSize: 17,
    },
    listHistoryFilm: {
        width: width,
        elevation: 3,
        backgroundColor: 'white'
    },
    historyFilmImg: {
        resizeMode: 'cover',
        width: width/2.5,
        height: width/2.5*(Utils.RATIO),
    },

});

export default styles;