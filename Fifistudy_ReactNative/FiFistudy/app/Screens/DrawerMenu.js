import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ScrollView,
  View,
} from 'react-native';
import {NavigationActions} from 'react-navigation';
import Res from '../Resources/index.js';
import Styles from '../Styles/DrawerMenu.js';
import {DrawerMenuItem} from '../Components/index.js';

export default class DrawerMenu extends Component {
    navigateToScreen(route){
        this.setState({route: route});
        let navigationAction = NavigationActions.navigate({routeName: route});
        this.props.navigation.dispatch(navigationAction);
    }

    render() {
        return (
            <ScrollView style={Styles.container} showsVerticalScrollIndicator={false}>
                {/* SECTION USER BANNER */}
                <View style={Styles.userBanner}>
                    <Image source={Res.images.avatar} style={Styles.avatar}/>
                    <View style={Styles.fullnameEmailContainer}>
                        <Text style={Styles.fullname}>Hoàng Gia Mẫn</Text>
                        <Text>manhg.14@gmail.com</Text>
                    </View>
                </View>

                {/* SECTION MENU'S ITEM */}
                <View>
                    <DrawerMenuItem image={Res.icons.filmType} lable='Thể loại'
                        onPress={() => this.navigateToScreen('ScreenLevels')}/>
                    <DrawerMenuItem image={Res.icons.level} lable='Độ khó'/>
                    <DrawerMenuItem image={Res.icons.tip} lable='Tip'/>
                    <DrawerMenuItem image={Res.icons.search} lable='Tìm kiếm'/>

                    {/* LINE */}
                    <View style={Styles.line}/>
                    
                    <Text style={Styles.lable}>Cá nhân</Text>
                    <DrawerMenuItem image={Res.icons.history} lable='Lịch sử'/>
                    <DrawerMenuItem image={Res.icons.bookmarks} lable='Đánh dấu'/>
                    <DrawerMenuItem image={Res.icons.note} lable='Sổ tay'/>
                </View>
            </ScrollView>
        );
    }
}