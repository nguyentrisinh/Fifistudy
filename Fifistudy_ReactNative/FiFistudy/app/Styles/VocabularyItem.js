import {StyleSheet} from 'react-native';
import Res from '../Resources/index';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '85%',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        paddingTop: 8,
        paddingBottom: 8,
        elevation: 6,
        marginTop: 8,
        marginBottom: 8,
        backgroundColor: Res.colors.lightgray
    },
    contentContainer: {
        flex: 1,
        marginLeft: 4,
        marginRight: 4,
        alignItems: 'center',
    },
    vocabulary: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
        textAlign: 'center'
    },
    vocabularySpecial: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
        textAlign: 'center',
        color: Res.colors.levelEasy
    },
    meaning: {
        fontFamily: Res.fonts.common,
        textAlign: 'center'
    },
});
export default styles;