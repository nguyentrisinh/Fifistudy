import React, { Component } from 'react';
import {
    Text,
    Image,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import {ImageButton} from '../Components/index.js';
import Res from '../Resources/index.js';

export default class ScreenRegister extends Component{
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={Styles.container}>
                {/* Header */}
                {/* <Image source={Res.images.login_background[1]} blurRadius={2}/> */}
                {/* <View style={Styles.titleContainer}>
                    <ImageButton source={Res.icons.back} tintColor={Res.colors.blue}
                        onPress={() => this.props.navigation.navigate('ScreenHome')}/>
                    <Text style={Styles.title}>Đăng kí</Text>
                </View> */}
                <View style={Styles.stepsContainer}>
                    <View style={Styles.stepLine}>
                        <View style={{
                            height: 4,
                            width: '28%',
                            backgroundColor: Res.colors.blue
                        }}/>
                    </View>

                    <View style={Styles.stepContainer}>
                        <View style={Styles.circleContainer}>
                            {/* <View style={Styles.circleAnimation}/> */}
                            <View style={[Styles.circleStep, {backgroundColor: Res.colors.blue}]}>
                                <Text style={Styles.stepNumber}>1</Text>
                            </View>
                        </View>
                        <Text style={[Styles.stepContent, {color: Res.colors.blue}]}>Tạo tài khoản</Text>
                    </View>
                    <View style={Styles.stepContainer}>
                        <View style={Styles.circleContainer}>
                            <View style={Styles.circleAnimation}/>
                            <View style={[Styles.circleStep, {backgroundColor: Res.colors.blue}]}>
                                <Text style={Styles.stepNumber}>2</Text>
                            </View>
                        </View>
                        <Text style={[Styles.stepContent, {color: Res.colors.blue}]}>Xác nhận</Text>
                    </View>
                    <View style={Styles.stepContainer}>
                        <View style={Styles.circleContainer}>
                            {/* <View style={Styles.circleAnimation}/> */}
                            <View style={[Styles.circleStep, {backgroundColor: Res.colors.lightgray}]}>
                                <Text style={Styles.stepNumber}>3</Text>
                            </View>
                        </View>
                        <Text style={[Styles.stepContent, {color: Res.colors.lightgray}]}>Nhập thông tin</Text>
                    </View>
                    <View style={Styles.stepContainer}>
                        <View style={Styles.circleContainer}>
                            {/* <View style={Styles.circleAnimation}/> */}
                            <View style={[Styles.circleStep, {backgroundColor: Res.colors.lightgray}]}>
                                <Text style={Styles.stepNumber}>4</Text>
                            </View>
                        </View>
                        <Text style={[Styles.stepContent, {color: Res.colors.lightgray}]}>Hoàn thành</Text>
                    </View>
                </View>

                {/* Body */}
                <View style={{
                    flex: 1
                }}>
                </View>

                {/* Footer */}
                <View style={Styles.footer}>
                    <TouchableOpacity onPress={() => navigate('ScreenLogin')}>
                        <View style={Styles.btnContainer}>
                            <Image style={Styles.icon} source={Res.icons.back}/>
                            <Text style={Styles.btnContent}>Quay lại</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={Styles.btnContainer}>
                            <Text style={Styles.btnContent}>Tiếp theo</Text>
                            <Image style={Styles.icon} source={Res.icons.moreArrow}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Res.colors.background
    },
    titleContainer: {
        flexDirection: 'row',
        paddingLeft: 16,
        paddingRight: 16,
        alignItems: 'center',
        height: 56,
        zIndex: 3,
    },
    title: {
        fontFamily: Res.fonts.common,
        left: 72,
        fontSize: 21,
        color: Res.colors.blue,
        position: 'absolute'
    },
    stepsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        top: 30,
        margin: 4
    },
    stepContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    stepLine: {
        marginTop: 18,
        position: 'absolute',
        height: 3,
        width: '75%',
        backgroundColor: Res.colors.lightgray
    },
    circleContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    circleAnimation: {
        height: 50,
        width: 50,
        borderRadius: 30,
        backgroundColor: Res.colors.blue,
        opacity: 0.3,
        position: 'absolute'
    },
    circleStep: {
        // backgroundColor: Res.colors.blue,
        borderRadius: 30,
        width: 38,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center'
    },
    stepNumber: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white'
    },
    stepContent: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: 'bold',
        // color: Res.colors.blue
    },
    btnContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        tintColor: Res.colors.blue,
        width: 20,
        height: 20,
    },
    btnContent: {
        color: Res.colors.blue,
        fontSize: 17,
        marginLeft: 8,
        marginRight: 8
    },
    footer: {
        width: '100%',
        flexDirection: 'row',
        bottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        justifyContent: 'space-between',
    }
});