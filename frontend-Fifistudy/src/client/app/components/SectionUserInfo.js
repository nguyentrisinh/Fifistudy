import React from 'react';
import Vocabulary from './Vocabulary'
import {connect} from 'react-redux';
import FlipMove from 'react-flip-move';
import Input1 from './Input1';

class SectionUserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="section-vocabulary__title">
                    THÔNG TIN CÁ NHÂN
                </div>
                <div className="section-user-info">
                    <div className="section-user-info__row">
                        <div className="section-user-info__item section-user-info__item--first-name">
                            <Input1 label="HỌ"/>
                        </div>
                        <div className="section-user-info__item section-user-info__item--last-name">
                            <Input1 label="TÊN"/>
                        </div>
                    </div>
                    <div className="section-user-info__row">
                        <Input1 label="EMAIL"/>
                    </div>
                    <div className="section-user-info__row">
                        <Input1 label="MẬT KHẨU"/>
                    </div>
                    <div className="section-user-info__row">
                        <div className="user-input__label">
                            GIỚI TÍNH
                        </div>

                        <label className="user-input__label user-input__label--radio"><input type="radio"
                                                                                             className="radio" name="0"
                                                                                             value="on"/>Nam</label>
                        <label className="user-input__label user-input__label--radio"><input type="radio"
                                                                                             className="radio" name="0"
                                                                                             value="on"/>Nữ</label>

                    </div>
                    <div className="section-user-info__row">
                        <Input1 label="SĐT"/>
                    </div>
                    <div className="section-user-info__row">
                        <Input1 label="NGÀY SINH"/>
                    </div>
                    <div className="section-user-info__row">
                        <Input1 label="ĐỊA CHỈ"/>
                    </div>

                </div>
            </div>

        )
    }
}

export default SectionUserInfo