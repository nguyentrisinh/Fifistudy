import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: 'column',
    },
    containerRow1: {
        flex: 1,
        flexDirection: 'row',
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'lightcyan',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textDate: {
        textAlign: 'center',
        color: 'royalblue',
        fontSize: 20,
    },
    sentenceContainer: {
        flex: 1,
        marginLeft: 40,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 7
    },

    textSentence: {
        marginLeft: 20,
        fontSize: 20,
        textAlign: 'left',
        fontFamily: 'sans-serif',
        color: 'grey',
    },
    icon:{
    },
    containerBot: {
        marginTop: 5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    containerDropDown: {
        flexDirection: 'column',
        width: 120,
        marginLeft: 40,
        backgroundColor: 'white'
    },

    textSetting: {
        fontSize: 18,
        marginTop: 5,
        marginLeft: 20
    },

    blackLine: {
        flex: 1,
        marginTop: 5,
        margin: 4,
        height: 2,
        backgroundColor: 'gray',
    }
})

export default styles;