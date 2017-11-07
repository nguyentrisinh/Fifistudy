import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
} from 'react-native';
import Resources from '../../resources/resources';
import ImageButton from '../../components/ImageButton';

export default class FilmGroup extends Component {
    render() {
        const groupWidth = 200;
        return(
            <View style={{width: groupWidth, paddingTop: 8}}>
                {/* Bookmark */}
                <Image source={Resources.icons.bookmarkFull}
                        style={{
                            width: 16,
                            height: 16,
                            marginLeft: 8,
                            tintColor: '#FF9800',
                            position: 'absolute',
                            zIndex: 1,
                        }}/>
                <View style={{
                    width: groupWidth,
                    height: groupWidth * (9 / 16),
                    }}>
                    {/* Episode Group */}
                    <View style={{
                        padding: 6,
                        alignSelf: 'flex-end',
                        position: 'absolute',
                        zIndex: 3,}}>
                    <View style={{
                        backgroundColor: '#2196F3',
                        borderRadius: 50,
                        height: 32,
                        width: 32,
                        justifyContent: 'center',
                        alignItems: 'center',
                        }}>
                        <Text style={{
                            fontWeight: 'bold',
                            color: 'white',
                            }}>8</Text>
                    </View>
                    </View>
                    {/* Film's image */}
                    <Image source={require('../../resources/films/the_last_ship.png')}
                            style={{
                                flex: 1,
                                resizeMode: 'contain',
                                height: null,
                                width: null,
                            }}/>
                </View>
                {/* Level line */}
                <View style={{
                    backgroundColor: '#9C27B0',
                    height: 3,
                    width: groupWidth}}/>


                {/* Title group */}
                    <View style={{
                        width: groupWidth,
                        backgroundColor: '#fafafa',
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
                        flexDirection: 'row',
                        elevation: 3}}>
                        <View style={{
                            flex: 1,
                            marginLeft: 10,
                            marginRight:10,
                            marginTop: 6,
                            marginBottom: 10
                            }}>
                            <Text style={{fontWeight: 'bold',}}>Tiêu đề gốc</Text>
                            <Text>Tiêu đề Việt</Text>
                        </View>
                        <ImageButton source={Resources.icons.moreDot}/>                        
                    </View>
            </View>
        ); 
    }
}