import {
    StyleSheet,
    Dimensions
} from 'react-native';
import Res from '../Resources/index';

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Res.colors.background,
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
    image: {
        width: width,
        height: width * Res.ratio,
        resizeMode: 'cover',
    },
    imgGradient: {
        flex: 1
    },
    tabContainer: {
        borderRadius: 8,
        backgroundColor: 'white',
        top: width * Res.ratio - 50,
        bottom: 0,
        left: 16,
        right: 16,
        position: 'absolute',
        elevation: 6,
    },
    buttonFloat: {
        position: 'absolute',
        right: 36,
        top: width * Res.ratio - 85,
        width: 70,
        height: 70,
        elevation: 6,
    },
})

export default styles;