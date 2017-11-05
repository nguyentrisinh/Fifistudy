import React from 'react';
import Comments from './Comments';
import RelatedFilm from './SectionRelatedFilm'

class SectionDetailExtra extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <div className="detail-extra">
                    <div className="detail-extra__item">
                        <div className="detail-extra__title">
                            BÌNH LUẬN
                        </div>
                        <Comments/>
                    </div>
                    <div className="detail-extra__item">
                        <div className="detail-extra__title">
                            PHIM CÙNG CẤP ĐỘ
                        </div>
                        <RelatedFilm/>
                    </div>

                </div>
            </div>
        )
    }
}
export default SectionDetailExtra