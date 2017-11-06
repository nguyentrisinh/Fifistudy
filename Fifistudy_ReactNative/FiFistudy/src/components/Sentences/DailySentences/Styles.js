import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        flexDirection: 'row',
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textDate: {
        textAlign: 'center',
        color: 'lightskyblue',
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
        fontFamily: 'sans-serif-light',
        color: 'black',
        fontWeight: 'bold'
    },
    icon: {
    }
})

export default styles;