import {
    StyleSheet,
    Dimensions,
} from 'react-native';
import Res from '../Resources/index.js';

const width = Dimensions.get('window').width;
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        width: width*0.6,
        fontSize: 17,
        color: Res.colors.blue,
        fontWeight: 'bold'
    },
    titleBtn: {
        textAlign: 'center',
        fontSize: 14,
        color: Res.colors.gray,
        marginTop: 8,
    },
    textInput: {
        fontSize: 21,
        paddingTop: 10,
        marginTop: 50,
        width: width*0.45,
        textAlign: 'center',
        color: Res.colors.blue,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: Res.colors.blue
    }
});
export default Styles;