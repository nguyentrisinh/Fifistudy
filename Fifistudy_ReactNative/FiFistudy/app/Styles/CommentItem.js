import { StyleSheet } from 'react-native';

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
        width: 70,
        height: 70,
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
        flexDirection: 'column',
        //justifyContent: 'space-between',
        //alignItems: 'center'
    },
    txtCommentContainer: {
        height: 40
    },
    ic_like: {
        width: 20,
        height: 20,
        marginLeft: 15,
    },
    blackLine: {
        flex: 1,
        height: 2,
        marginTop: 10,
        backgroundColor: 'lavender',
    }
})

export default styles;