import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    horizontal: {
        flexDirection: 'row',
    },
    vertical: {
        flexDirection: 'column',
    },
    ava: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },

    commentContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    ic_like: {
        width: 25,
        height: 25,
    }
})

export default styles;