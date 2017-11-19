import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ScrollView,
  View,
  Dimensions
} from 'react-native';
import MenuItem from './MenuItem';

export default class HamburgerMenu extends Component {
    render() {
        const width = Dimensions.get('window').width;
        const iconLocation = '../../resources/icons/';

        return (
            <View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
                {/* SECTION USER BANNER */}
                <View style={{
                    flexDirection: 'row',
                    height: 100,
                    width: width,
                    paddingLeft: 16,
                    paddingRight: 16,
                    alignItems: 'center'
                    }}>

                    {/* USER'S AVATAR */}
                    <Image source={require('./gai_dep_2.png')}
                            style={{
                                height: 56,
                                width: 56,
                                margin: 2,
                                borderRadius: 200,
                                resizeMode: 'contain',
                                padding: 2}}/>

                    {/* USER'S NAME & EMAIL */}
                    <View style={{
                        flexDirection: 'column',
                        marginLeft: 20}}>
                        <Text style={{fontWeight: 'bold'}}>Hoàng Gia Mẫn</Text>
                        <Text>manhg.14@gmail.com</Text>
                    </View>
                </View>

                {/* SECTION MENU'S ITEM */}
                <View>
                    <MenuItem image={require('../../resources/icons/ic_box.png')} lable='Thể loại'/>
                    <MenuItem image={require('../../resources/icons/ic_level.png')} lable='Độ khó'/>
                    <MenuItem image={require('../../resources/icons/ic_tip.png')} lable='Tip'/>
                    <MenuItem image={require('../../resources/icons/ic_search.png')} lable='Tìm kiếm'/>

                    {/* LINE */}
                    <View style={{
                        height: 1,
                        width: width * 0.8,
                        backgroundColor: '#BDBDBD',
                        alignSelf: 'center',
                        marginTop: 6,
                        marginBottom: 6}}/>
                    
                    <Text style={{marginLeft: 16, marginTop: 8, color: '#9E9E9E'}}>Cá nhân</Text>
                    <MenuItem image={require('../../resources/icons/ic_history.png')} lable='Lịch sử'/>
                    <MenuItem image={require('../../resources/icons/ic_bookmarks.png')} lable='Đánh dấu'/>
                    <MenuItem image={require('../../resources/icons/ic_note.png')} lable='Sổ tay'/>
                </View>
            </View>
        );
    }
}