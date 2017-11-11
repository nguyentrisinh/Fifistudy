import React from 'react';
import '../../static/css/step.scss'
require('imports-loader?$=jquery!../../static/js/jquery.easing.1.3.js');
import '../../static/css/radio.scss'

export default class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    componentDidMount = () =>{
        //jQuery time
        var current_fs, next_fs, previous_fs; //fieldsets
        var left, opacity, scale; //fieldset properties which we will animate
        var animating; //flag to prevent quick multi-click glitches

        $(".next").click(function(){
            if(animating) return false;
            animating = true;

            current_fs = $(this).parent();
            next_fs = $(this).parent().next();

            //activate next step on progressbar using the index of next_fs
            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

            //show the next fieldset
            next_fs.show();
            //hide the current fieldset with style
            current_fs.animate({opacity: 0}, {
                step: function(now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale current_fs down to 80%
                    scale = 1 - (1 - now) * 0.2;
                    //2. bring next_fs from the right(50%)
                    left = (now * 50)+"%";
                    //3. increase opacity of next_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({
                        'transform': 'scale('+scale+')',
                        'position': 'absolute',
                    });
                    next_fs.css({
                        'left': left,
                        'opacity': opacity
                    });
                },
                duration: 800,
                complete: function(){
                    current_fs.hide();
                    animating = false;
                },
                //this comes from the custom easing plugin
                easing: 'easeInOutBack'
            });
        });

        $(".previous").click(function(){
            if(animating) return false;
            animating = true;

            current_fs = $(this).parent();
            previous_fs = $(this).parent().prev();

            //de-activate current step on progressbar
            $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

            //show the previous fieldset
            previous_fs.show();
            //hide the current fieldset with style
            current_fs.animate({opacity: 0}, {
                step: function(now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale previous_fs from 80% to 100%
                    scale = 0.8 + (1 - now) * 0.2;
                    //2. take current_fs to the right(50%) - from 0%
                    left = ((1-now) * 50)+"%";
                    //3. increase opacity of previous_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({'left': left});
                    previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
                },
                duration: 800,
                complete: function(){
                    current_fs.hide();
                    animating = false;
                },
                //this comes from the custom easing plugin
                easing: 'easeInOutBack'
            });
        });

        $(".submit").click(function(){
            return false;
        })

    }
    render(){
        return (
            <div className="sign-up-page">
                <form id="msform">
                    <ul id="progressbar">
                        <li className="active">Tạo tài khoản</li>
                        <li>Xác nhận tài khoản</li>
                        <li>Nhập thông tin tài khoản</li>
                        <li>Upload avatar</li>
                    </ul>
                    <fieldset>
                        <h2 className="fs-title">Tạo tài khoản</h2>
                        <h3 className="fs-subtitle">Vui lòng nhập đúng email để lấy mã xác nhận</h3>
                        <input type="text" name="userName" placeholder="Tên tài khoản" />
                        <input type="text" name="email" placeholder="Email" />
                        <input type="password" name="pass" placeholder="Mật khẩu" />
                        <input type="password" name="cpass" placeholder="Xác nhận mật khẩu" />
                        <input type="button" name="next" className="next action-button" value="Next" />
                    </fieldset>
                    <fieldset>
                        <h2 className="fs-title">Xác nhận tài khoản</h2>
                        <h3 className="fs-subtitle">Nhập mã xác nhận đã được gửi vào email để xác nhận tài khoản</h3>
                        <input type="text" name="pin" placeholder="Mã xác nhận" />
                        <input type="button" name="next" className="next action-button" value="Next" />
                    </fieldset>
                    <fieldset>
                        <h2 className="fs-title">Nhập thông tin tài khoản</h2>
                        <h3 className="fs-subtitle">Thêm một ít thông tin về bạn</h3>
                        <input type="text" name="fname" placeholder="Họ và tên lót" />
                        <input type="text" name="lname" placeholder="Tên" />
                       <div className="wrap-input">
                           <div className="wrap-input__title">Giới tính</div>
                           <label className="label--radio">
                               <input type="radio" className="radio" checked  name="foo"/>
                               Nam
                           </label>
                           <label className="label--radio">
                               <input type="radio" className="radio" checked  name="foo"/>
                              Nữ
                           </label>
                       </div>
                        <input type="text" name="phone" placeholder="Số điện thoại" />
                        <input type="text" name="phone" placeholder="Ngày sinh" />
                        <input type="text" name="phone" placeholder="Địa chỉ" />

                        <textarea name="address" placeholder="Address"></textarea>
                        <input type="button" name="previous" className="previous action-button" value="Previous" />
                        <input type="button" name="next" className="next action-button" value="Next" />
                    </fieldset>
                    <fieldset>
                        <h2 className="fs-title">Cập nhật ảnh đại diện</h2>
                        <h3 className="fs-subtitle">We will never sell it</h3>
                        <input type="text" name="fname" placeholder="First Name" />
                        <input type="text" name="lname" placeholder="Last Name" />
                        <input type="text" name="phone" placeholder="Phone" />
                        <textarea name="address" placeholder="Address"></textarea>
                        <input type="button" name="previous" className="previous action-button" value="Previous" />
                        <input type="submit" name="submit" className="submit action-button" value="Submit" />
                    </fieldset>
                </form>
            </div>
        )
    }
}