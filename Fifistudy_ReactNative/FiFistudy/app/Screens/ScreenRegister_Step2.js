import React, { Component } from 'react';
import {
    Text,
    Image,
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import Res from '../Resources/index.js';
import Styles from '../Styles/ScreenRegister_Step2.js';

export default class ScreenRegister_Step2 extends Component{
    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.body}>
                    <View style={Styles.inputContainer}>
                        <Text style={Styles.title}>Mã xác nhận đã được gửi tới email của bạn</Text>
                        <TouchableOpacity>
                            <Text style={Styles.titleBtn}>Ấn vào đây nếu bạn không nhận được</Text>
                        </TouchableOpacity>

                        <TextInput style={Styles.textInput}
                            placeholder='Mã xác nhận'
                            placeholderTextColor={Res.colors.gray}
                            underlineColorAndroid='transparent'
                        />
                    </View>

                    {/* <View style={Styles.resultContainer}>
                        <View style={[Styles.animationCircle, {backgroundColor: Res.colors.blue}]}/>
                        <Image style={Styles.resultImage}
                            source={Res.images.success}/>
                    </View>
                    <Text style={[Styles.resultText, {color: Res.colors.blue}]}>
                        Xác nhận thành công!
                    </Text> */}
                </View>

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