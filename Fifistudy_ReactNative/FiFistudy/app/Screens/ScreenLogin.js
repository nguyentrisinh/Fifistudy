import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
    Text,
    Image,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import Res from '../Resources/index.js';
import Styles from "../Styles/ScreenLogin.js";
import {login} from '../Redux/actions/authorization';

class ScreenLogin extends Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            imageBackgroundIndex: Math.floor(Math.random() * (Res.images.login_background.length))
        }
    }

    getImagebackground(){
        //let index = Math.floor(Math.random() * (Res.images.login_background.length));
        let index = this.state.imageBackgroundIndex;
        return Res.images.login_background[index];
    }

    onUserLogin(e){
        this.props.onLogin(this.state.username, this.state.password);
        e.preventDefault();
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <Image style={Styles.imgBackground} blurRadius={2}
                    source={this.getImagebackground()}/>
                <View style={Styles.blackMask}>
                    {/* Header */}
                    <View style={Styles.header}>
                        <Image source={Res.images.logo_full}
                            style={Styles.logo}/>
                        <View style={Styles.welcomeContainer}>
                            <Text style={Styles.welcomeContent}>Chào mừng bạn đến với</Text>
                            <Text style={Styles.welcomeContent}>ứng dụng học tiếng anh Fifi study!</Text>
                        </View>
                    </View>

                    <View style={Styles.boxesContainer}>
                        {/* Username box */}
                        <View style={Styles.box}>
                            <Image style={Styles.icon} source={Res.icons.profile}/>
                            <TextInput style={Styles.textInput}
                                placeholderTextColor='rgba(255,255,255, 0.6)'
                                underlineColorAndroid='rgba(255,255,255, 0.6)'
                                placeholder='Tài khoản'
                                onChangeText={(text) => {this.setState({username: text})}}
                            />
                        </View>
                        {/* Password box */}
                        <View style={Styles.box}>
                            <Image style={Styles.icon} source={Res.icons.password}/>
                            <TextInput style={Styles.textInput}
                                secureTextEntry={true}
                                placeholderTextColor='rgba(255,255,255, 0.6)'
                                underlineColorAndroid='rgba(255,255,255, 0.6)'
                                placeholder='Mật khẩu'
                                onChangeText={(text) => {this.setState({password: text})}}
                            />
                        </View>

                        <TouchableOpacity style={{alignSelf: 'flex-end'}}>
                            <Text style={{
                                color: 'white',
                                marginTop: 8,
                                marginRight: 16,
                                opacity: 0.8
                            }}>Quên mật khẩu?</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Buttons */}
                    <View style={{
                        marginTop: 30,
                    }}>
                        {/* Login btn */}
                        <TouchableOpacity style={[Styles.button, {backgroundColor: Res.colors.blue}]}
                            onPress={(e) => this.onUserLogin(e)}>
                            <Text style={Styles.btnContent}>Đăng nhập</Text>
                        </TouchableOpacity>
                        {/* Resigter btn */}
                        <TouchableOpacity style={[Styles.button, {backgroundColor: 'rgba(255,255,255, 0.38)'}]}
                            onPress={() => navigate('Step1')}>
                            <Text style={Styles.btnContent}>Đăng kí</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
    };
}

mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, password) => {dispatch(login(username, password));}
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenLogin);