import {
    StyleSheet,
    Dimensions
} from 'react-native';
import Res from '../Resources/index';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Res.colors.homePageBackground,
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
        fontFamily: Res.fonts.common,
        fontWeight: 'bold',
        color: Res.colors.blue,
        fontSize: 17,
    },
});

export default styles;