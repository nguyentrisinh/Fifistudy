import SectionFilm from '../components/SectionFilm';
import React from 'react';
import Film from '../components/Film'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import FadeTransition from '../components/FadeTransition';
import UserAvatar from '../components/UserAvatar';
import ScrollBar from '../components/ScrollBar';
import SectionVocabularyContainer from '../components/SectionVocabularyContainer'

import {connect} from 'react-redux';


class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <FadeTransition>
                <div className="container">
                    <div className="user-page clearfix">
                        <ScrollBar>

                            <Tabs>
                                <div className="user-page__menu">
                                    <UserAvatar/>
                                    <div className="user-menu">
                                        <TabList className="user-menu__ul">
                                            <Tab selectedClassName="user-menu__li--selected" className="user-menu__li">
                                                <i className="fa fa-user-o user-menu__icon"></i>
                                                <span className="user-menu__text">
                                            THÔNG TIN CÁ NHÂN
                                        </span>
                                            </Tab>
                                            <Tab selectedClassName="user-menu__li--selected" className="user-menu__li">
                                                <i className="fa fa-film user-menu__icon"></i>
                                                <span className="user-menu__text">
                                           phim đã lưu
                                        </span></Tab>
                                            <Tab selectedClassName="user-menu__li--selected" className="user-menu__li">
                                                <i className="fa fa-pencil-square-o user-menu__icon"></i>
                                                <span className="user-menu__text">
                                           từ vựng đã lưu
                                        </span></Tab>
                                            <Tab selectedClassName="user-menu__li--selected" className="user-menu__li">
                                                <i className="fa fa-sticky-note-o user-menu__icon"></i>
                                                <span className="user-menu__text">
                                           ghi chú của tôi
                                        </span></Tab>
                                        </TabList>
                                    </div>

                                </div>
                                <div className="user-page__content">
                                    <TabPanel>
                                        User Info
                                    </TabPanel>
                                    <TabPanel>
                                        Phim da luu
                                    </TabPanel>
                                    <TabPanel>
                                        <SectionVocabularyContainer/>
                                    </TabPanel>
                                    <TabPanel>
                                        GHi chu
                                    </TabPanel>
                                </div>
                            </Tabs>


                        </ScrollBar>
                    </div>
                </div>
            </FadeTransition>
        )

    }
}

export default  UserPage