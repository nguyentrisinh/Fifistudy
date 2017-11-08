import {
    StyleSheet,
} from 'react-native';


const styles = StyleSheet.create({
    container: {
        paddingTop: 8
    },
    bookmarkIcon: {
        width: 16,
        height: 16,
        marginLeft: 8,
        tintColor: '#FF9800',
        position: 'absolute',
        zIndex: 1,
    },
    filmImgGroup: {
        padding: 6,
        alignSelf: 'flex-end',
        position: 'absolute',
        zIndex: 3,
    },
    episodeNumCircle: {
        backgroundColor: '#2196F3',
        borderRadius: 50,
        height: 32,
        width: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    filmImg: {
        flex: 1,
        resizeMode: 'contain',
        height: null,
        width: null,
    },
    titleGroup: {
        backgroundColor: '#fafafa',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        flexDirection: 'row',
        elevation: 3
    },
    titleTextGroup: {
        flex: 1,
        marginLeft: 10,
        marginRight:10,
        marginTop: 6,
        marginBottom: 10
    }
});

export default styles;