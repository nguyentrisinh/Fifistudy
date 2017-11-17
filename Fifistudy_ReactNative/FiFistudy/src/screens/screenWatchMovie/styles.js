import {
    StyleSheet,
    Dimensions,
} from 'react-native';
import Utils from '../../Utils';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    listEpisode: {

    },
    commentContainer: {
        backgroundColor: 'lightgray',
        width: width,
        height: width * Utils.RATIO,
    },
    movieTitle: {

    },
    movieSubTitle: {

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