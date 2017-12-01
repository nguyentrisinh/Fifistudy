import { StyleSheet } from 'react-native';
import windows from '../Themes/Window.js';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    textInput: {
        width: 250,
        height: 40
    },

    searchContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    itemContainer: {
        flexDirection: 'row',
        backgroundColor: 'transparent'
    },
    bannerFilm: {
        width: windows.width * 1 / 3,
        height: windows.width * 1 / 4,
        margin: 10,
        borderRadius: 10,
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    titleEng: {
        fontSize: 18,
        color: 'cornflowerblue'
    },
    titleVn: {
        fontSize: 16,
        color: 'grey'
    },

    lineColor: {
        margin: 10,
        height: 1,
        backgroundColor: 'grey'
    },
    blackLine:{
        height: 2,
        margin: 10,
        backgroundColor: 'black'
    }
})