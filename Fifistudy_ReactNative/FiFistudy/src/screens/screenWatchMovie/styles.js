import {
    StyleSheet,
    Dimensions,
} from 'react-native';
import Utils from '../../Utils';
import Resources from '../../resources/resources';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    listEpisode: {
    },
    commentContainer: {
        width: width,
    },
    titleContainer: {
        marginTop: 16,
        marginBottom: 12,
        marginLeft: 16,
        marginRight: 16,
    },
    title: {
        fontFamily: Resources.fonts.common,
        color: Resources.colors.blue,
        fontSize: 24,
        marginBottom: 8
    },
    subtitle: {
        fontFamily: Resources.fonts.common,
        color: Resources.colors.subtitle,
        fontSize: 16
    },
    text: {
        fontWeight: 'bold'
    },
    enterCommentContainer: {
        flexDirection: 'row',
        width: Dimensions.get('window').width,
    }

});
export default styles;