import { StyleSheet } from 'react-native';

const Dimensions = require('Dimensions');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'ghostwhite'
    },
    img: {
        width: Dimensions.get('window').width,
        height: 200
    },
    tabContainer: {
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 0.8,
        marginTop: 150,
        marginLeft: 20,
        width: Dimensions.get('window').width - 40,
        position: 'absolute',
        height: Dimensions.get('window').height - 180
    },
    buttonFloat: {
        position: 'absolute',
        backgroundColor: 'pink',
        marginTop: 115,
        marginLeft: Dimensions.get('window').width * 3 / 4 - 20,
        borderRadius: 35,
        width: 70,
        height: 70,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtIsMore: {
        textAlign: 'center',
        color: 'white',
        fontSize: 80,
        marginBottom: 10,
    }
})

export default styles;