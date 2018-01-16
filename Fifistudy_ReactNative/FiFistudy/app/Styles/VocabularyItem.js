import {StyleSheet} from 'react-native';
import Res from '../Resources/index';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '80%',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 4,
        paddingRight: 4,
        elevation: 6,
        marginTop: 8,
        marginBottom: 8,
        backgroundColor: Res.colors.lightgray
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
    vocabulary: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 4,
        textAlign: 'center'
    },
    meaning: {
        fontFamily: Res.fonts.common,
        textAlign: 'center'
    },
});
export default styles;