import {
    StyleSheet,
    Dimensions,
} from 'react-native';
import Resources from '../../resources/resources';
import Utils from '../../Utils';

const groupWidth = Dimensions.get('window').width / 2 - 24;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Resources.colors.background,
        width: groupWidth,
        padding: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        elevation: 3,
        margin: 8
    },
    bookmark: {
        position: 'absolute',
        zIndex: 5,
        top: -10
    },
    episodeGroup: {
        position: 'absolute',
        zIndex: 1,
        top: 0,
        right: 0
    },
    filmImg: {
        width: (groupWidth - 6),
        height: (groupWidth - 6) * Utils.RATIO,
        resizeMode: 'cover',
    },
    groupFilmImgLevel: {
        width: (groupWidth - 6),
        height: (groupWidth - 6) * Utils.RATIO,
        margin: -5,
    },
    levelLine: {
        height: 3,
    },
    titleGroup: {
        marginTop: 14,
    },
    titleEnglish: {
        fontFamily: Resources.fonts.common,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    titleVietnamese: {
        fontFamily: Resources.fonts.common,
    }
});

export default styles;