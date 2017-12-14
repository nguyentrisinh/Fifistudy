import {
    StyleSheet,
    Dimensions,
} from 'react-native';
import Res from '../Resources/index.js';

const width = Dimensions.get('window').width;
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        top: 80,
    },
    subContainer: {
        width: width*0.82,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 8
    },
    label: {
        minWidth: 90,
        fontWeight: 'bold',
        textAlign: 'right',
        marginRight: 8,
        color: 'rgba(0, 0, 0, 0.5)'
    },
    textInput: {
        flex: 1,
        color: 'rgba(0, 0, 0, 0.6)',
    },
});
export default Styles;