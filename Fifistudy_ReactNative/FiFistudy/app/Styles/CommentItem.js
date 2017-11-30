import { 
    StyleSheet,
    Dimensions
 } from 'react-native';
import Res from '../Resources/index.js';



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 10,

    },
    horizontal: {
        flexDirection: 'row',
    },

    containerIconLike: {
        flexDirection: 'row',
    },

    vertical: {
        flexDirection: 'column',
    },
    ava: {
        width: 60,
        height: 60,
        borderRadius: 35,
    },
    liked: {
        marginLeft: 10,
        textAlign: 'center'
    },
    txtComment: {
        marginLeft: 10,
        marginTop: 5
    },
    commentContainer: {
        marginTop: 8,
        marginLeft: 20,
        width: '72%'
    },
    comment: {
        fontFamily: Res.fonts.common,
        color: Res.colors.body,
        marginRight: 16,
    },
    likedContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8,
        marginBottom: 8,
    },
    likedNum: {
        fontFamily: Res.fonts.common,
    },
    line: {
        backgroundColor: Res.colors.line,
        height: 1,
    }
})

export default styles;