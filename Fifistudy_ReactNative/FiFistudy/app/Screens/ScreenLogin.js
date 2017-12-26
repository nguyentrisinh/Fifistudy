import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Text,
    Image,
    View,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
    ToastAndroid
} from 'react-native';
import Res from '../Resources/index.js';
import Styles from "../Styles/ScreenLogin.js";
import { login } from '../Redux/actions/authorization';
//import urls from '../Server/Urls.js';
const url_login = 'http://128.199.159.54:6100/api/auth/login/'
class ScreenLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthorizing: false,
            username: '',
            password: '',
            token: '',
            imageBackgroundIndex: Math.floor(Math.random() * (Res.images.login_background.length))
        }
    }

    getImagebackground() {
        //let index = Math.floor(Math.random() * (Res.images.login_background.length));
        let index = this.state.imageBackgroundIndex;
        return Res.images.login_background[index];
    }

    onClickLogin() {
        console.log('ScreenLogin: Username is: ' + this.state.username + " - Password is: " + this.state.password)

        if (this.state.username == '' || this.state.password == '')
            ToastAndroid.show('Không được để trống tài khoản và mật khẩu', ToastAndroid.SHORT)

        //Render indicator while authorizing
        this.setState({
            isAuthorizing: true
        })

        return fetch(url_login, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("Login - response json is" + responseJson);

                //need to send token into redux? (don't know how) then navigate to next screen
                let data = responseJson.data;

                //If data return null, then show short toast - case wrong username or password
                if (data == null)
                    return (
                        this.setState({
                            isAuthorizing: false
                        }),
                        ToastAndroid.show('Bạn nhập sai tài khoản hoặc mật khẩu', ToastAndroid.SHORT)
                    )

                this.setState({
                    token: data.token,
                })
                this.props.navigation.navigate('ScreenHome');
            })
            .catch((err) => {
                this.setState({
                    isAuthorizing: false
                }),
                ToastAndroid.show('Mong bạn kiểm tra lại đường truyền mạng', ToastAndroid.SHORT)
            })
    }

    renderButtonLoginOrIndicator() {
        if (this.state.isAuthorizing)
            return <ActivityIndicator />
        else
            return <Text style={Styles.btnContent}>Đăng nhập</Text>

    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>
                <Image style={Styles.imgBackground} blurRadius={2}
                    source={this.getImagebackground()} />
                <View style={Styles.blackMask}>
                    {/* Header */}
                    <View style={Styles.header}>
                        <Image source={Res.images.logo_full}
                            style={Styles.logo} />
                        <View style={Styles.welcomeContainer}>
                            <Text style={Styles.welcomeContent}>Chào mừng bạn đến với</Text>
                            <Text style={Styles.welcomeContent}>ứng dụng học tiếng anh Fifi study!</Text>
                        </View>
                    </View>

                    <View style={Styles.boxesContainer}>
                        {/* Username box */}
                        <View style={Styles.box}>
                            <Image style={Styles.icon} source={Res.icons.profile} />
                            <TextInput style={Styles.textInput}
                                placeholderTextColor='rgba(255,255,255, 0.6)'
                                underlineColorAndroid='rgba(255,255,255, 0.6)'
                                placeholder='Tài khoản'
                                onChangeText={(text) => { this.setState({ username: text }) }}
                            />
                        </View>
                        {/* Password box */}
                        <View style={Styles.box}>
                            <Image style={Styles.icon} source={Res.icons.password} />
                            <TextInput style={Styles.textInput}
                                secureTextEntry={true}
                                placeholderTextColor='rgba(255,255,255, 0.6)'
                                underlineColorAndroid='rgba(255,255,255, 0.6)'
                                placeholder='Mật khẩu'
                                onChangeText={(text) => { this.setState({ password: text }) }}
                            />
                        </View>

                        <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
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
                        <TouchableOpacity style={[Styles.button, { backgroundColor: Res.colors.blue }]}
                            onPress={(e) => this.onClickLogin()}>
                            {this.renderButtonLoginOrIndicator()}
                        </TouchableOpacity>
                        {/* Resigter btn */}
                        <TouchableOpacity style={[Styles.button, { backgroundColor: 'rgba(255,255,255, 0.38)' }]}
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
        onLogin: (username, password) => { dispatch(login(username, password)); }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenLogin);