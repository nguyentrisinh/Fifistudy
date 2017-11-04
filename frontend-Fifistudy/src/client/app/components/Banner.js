import React from 'react';
import film from '../../static/images/HowIMetUrMother.jpg'
import Level from '../components/Level';
import Star from '../components/Star'

class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="banner">
                <div className="container">
                    <div className="banner__wrap">
                        <img src={film} alt="" className="banner__image"/>
                        <div className="banner__overlay">
                        </div>
                        <div className="banner__info">
                            <div className="banner__eng-name">
                                <i className="fa fa-bookmark-o banner__bookmark"></i>
                                &nbsp;
                                How I met your mother
                            </div>
                            <div className="banner__vi-name">
                                Khi bố gặp mẹ
                            </div>
                            <div className="banner__detail">

                                <div className="banner__pieces">
                                    <div className="banner__level">
                                        <Level level={2}></Level>
                                    </div>
                                    <div className="banner__title">Số tập: <span
                                        className="banner__content">15/35 tập</span></div>
                                    <div className="banner__title">Thời lượng: <span className="banner__content">45 phút/tập</span>
                                    </div>
                                    <div className="banner__star">
                                        <Star score={4}></Star>
                                    </div>
                                </div>
                                <div className="banner__wrap-des">
                                    <div className="banner__description">
                                        Phim tập hợp đội siêu anh hùng nổi tiếng nhất - Iron Man, Hulk, Captain America,
                                        Thor, Hawkeye và Black Widow, cùng với người mới Falcon, đánh dấu sự khác biệt
                                        của
                                        biệt đội anh hùng lần đầu tiên trong lịch sử phim hoạt hình. Dẫn đầu là Iron
                                        Man,
                                        những anh hùng được đào tạo và sống chung với nhau tại trụ sở mới của họ trong
                                        tháp
                                        Avengers. Nhân vật phản diện nguy hiểm nhất hành tinh thừa cơ hội khi Avengers
                                        tập
                                        hợp - dù họ chặn đứng Tiến sĩ Doom khi chinh phục Asgard, Attuma lái xe quân đội
                                        Atlantis vào thành phố New York hay Dracula giải thoát lũ ma cà rồng, Avengers
                                        phải
                                        chiến đấu cùng nhau hoàn thành nhiệm vụ.
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                </div>
            </div>
        )
    }
}

export default Banner