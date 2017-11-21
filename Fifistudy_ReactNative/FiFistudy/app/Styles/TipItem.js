import {
    StyleSheet,
    Dimensions
} from 'react-native';
import Res from '../Resources/index';
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        width: width - 32,
        margin: 16,
        flexDirection: 'row',
        backgroundColor: Res.colors.background,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        elevation: 3,
        alignItems: 'center'
    },
    image: {
        marginTop: 3,
        marginRight: 3,
        marginLeft: 6,
        marginRight: 6,
        resizeMode: 'cover',
        width: 80,
        height: 60
    },
    line: {
        width: 1,
        backgroundColor: Res.colors.line,
        height: '82%'
    },
    contentContainer: {
        padding: 8,
    },
    title: {
        fontFamily: Res.fonts.common,
        fontWeight: 'bold',
        marginBottom: 6
    },
    content: {
        fontFamily: Res.fonts.common,
    }
});
export default styles;