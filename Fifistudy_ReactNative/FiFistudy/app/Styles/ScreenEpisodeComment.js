import {
    StyleSheet,
    Dimensions,
} from 'react-native';
import Resources from '../Resources/index.js';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    commentContainer: {
        flex: 1,
        backgroundColor: Resources.colors.background,
    },
    enterCommentContainer: {
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 20,
        flexDirection: 'row',
    },
    line: {
        backgroundColor: Resources.colors.line,
        marginLeft: 16,
        marginRight: 16,
        height: 1,
    }
});
export default styles;