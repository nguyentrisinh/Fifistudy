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
    toolbar: {
        flexDirection: 'row',
        width: width,
        height: 56,
        justifyContent: 'space-between',
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 4,
        paddingBottom: 4,
        position: 'absolute',
        zIndex: 5,
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