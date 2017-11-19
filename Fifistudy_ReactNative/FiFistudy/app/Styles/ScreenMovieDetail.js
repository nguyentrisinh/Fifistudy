import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 20
    },
    txtHeader: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    txtFilm: {
        fontSize: 15
    },
    rateContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconWithText: {
        flexDirection: 'row'
    },
    icon: {
        width: 15,
        height: 15
    },
    purpletxt: {
        textAlign: 'center',
        color: 'purple',
        marginLeft: 10
    },
    greentxt: {
        textAlign: 'center',
        color: 'green',
        marginLeft: 10,
    },
    italictxt: {
        fontStyle: 'italic'
    },
    horiContainer: {
        flexDirection: 'row'
    },
    spacetxt: {
        marginLeft: 10
    },
    spacetop: {
        marginTop: 20
    },
    boldReview: {
        fontWeight: 'bold'
    },
    scroll: {
        marginTop: 10,
        flex: 1
    }
})

export default styles;