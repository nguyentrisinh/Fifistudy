import {
    StyleSheet,
    Dimensions,
} from 'react-native';
import Res from '../Resources/index.js';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    videoContainer: {
        backgroundColor: 'black',
        width: width,
        height: width * Res.ratio,
    },
    controlMask: {
        width: width,
        height: width * Res.ratio,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    playPauseBackForwardContainer: {
        flexDirection: 'row',
        width: width * 0.5,
        justifyContent: 'space-between'
    },
    bottomControlsContainer: {
        flexDirection: 'row',
        position: 'absolute',
        alignItems: 'center',
        left: 8,
        bottom: 0
    },
    slider: {
        width: width * 0.7,
        margin: 8,
    },
    track: {
        backgroundColor: '#757575'
    },
    thumb: {
        backgroundColor: 'white',
    },



    titleContainer: {
        marginTop: 16,
        marginBottom: 12,
        marginLeft: 16,
        marginRight: 16,
    },
    title: {
        fontFamily: Res.fonts.common,
        color: Res.colors.blue,
        fontSize: 24,
        marginBottom: 8
    },
    subtitle: {
        fontFamily: Res.fonts.common,
        color: Res.colors.subtitle,
        fontSize: 16
    },
    toolbar: {
        flexDirection: 'row',
        paddingLeft: 6,
        paddingRight: 6,
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        right: 0,
        backgroundColor: '#fafafa',
        borderRadius: 6,
        elevation: 8,
        margin: 8
    },
    listEpisode: {
        marginBottom: 48,
        alignSelf: 'center'
    },
    btnBackToHome: {
        position: 'absolute',
        right: 0,
        top: 0,
        marginTop: 8,
        marginRight: 12
    }
});
export default styles;