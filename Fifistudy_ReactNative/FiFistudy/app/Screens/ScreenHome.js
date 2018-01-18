import React, {Component} from 'react';
import {
    Text,
    Image,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Styles from '../Styles/ScreenHome';
import res from '../Resources/index';
import {ImageButton, ImageSlider} from '../Components/index.js';
import {
    HistoryFilmsContainer,
    TipContainer,
    FilmCardContainer
} from '../Containers/index.js';
import {newestFilms, mostViewedFilm, promotes, historyFilms} from '../Objects/ObjFilms.js';

export default class ScreenHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 1,
            interval: null,
        };
    }
    
    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === promotes.length ? 0 : this.state.position + 1
                });
            }, 2000) // (postion, time to change image)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView
                contentContainerStyle={Styles.container}
                showsVerticalScrollIndicator={false}>
                {/* TOOLBAR SECCTION */}
                <View style={Styles.toolbar}>
                    <ImageButton
                        onPress={() => navigate('DrawerToggle')}
                        source={res.icons.menu}
                        tintColor='white'/>
                    <View style={Styles.searchContainer}>
                        <ImageButton
                            onPress={() => navigate('ScreenSearchFilm')}
                            source={res.icons.search}
                            tintColor='white'/>
                    </View>
                </View>
                {/* SECTION BANNER SLIDER */}
                <View style={Styles.bannerSlider}>
                    <ImageSlider
                        navigation={this.props.navigation}
                        dataSource={promotes}
                        position={this.state.position}
                        onPostionChange={position => this.setState({ position })} />
                </View>

                {/* SECTION HISTORY SLIDER */}
                {/* Title */}
                <View style={Styles.subtitleGroup}>
                    <Text style={Styles.subtitle}>
                        Phim đã xem
                    </Text>
                    <ImageButton source={res.icons.moreArrow} tintColor={res.colors.body}
                        onPress={() => navigate('ScreenListFilm', {title: 'Lịch sử'})}/>
                </View>
                <HistoryFilmsContainer navigation={this.props.navigation} data={historyFilms}/>

                {/* NEWEST FILMS */}
                {/* Title */}
                <View style={Styles.subtitleGroup}>
                    <Text style={Styles.subtitle}>Phim mới</Text>
                    <ImageButton source={res.icons.moreArrow} tintColor={res.colors.body}
                        onPress={() => navigate('ScreenListFilm', {title: 'Phim mới'})}/>
                </View>
                <FilmCardContainer navigation={this.props.navigation} data={newestFilms}/>

                {/* MOST VIEWED FILMS */}
                {/* Title */}
                <View style={Styles.subtitleGroup}>
                    <Text style={Styles.subtitle}>Xem nhiều</Text>
                    <ImageButton source={res.icons.moreArrow} tintColor={res.colors.body}
                        onPress={() => navigate('ScreenListFilm', {title: 'Xem nhiều'})}/>
                </View>
                <FilmCardContainer navigation={this.props.navigation} data={mostViewedFilm}/>

                {/* TIPS */}
                {/* Title */}
                {/* <View style={Styles.subtitleGroup}>
                    <Text style={Styles.subtitle}>Tips</Text>
                    <ImageButton source={res.icons.moreArrow} tintColor={res.colors.blue}
                                 onPress={() => navigate('ScreenTips')}/>
                </View>
                <TipContainer navigation={this.props.navigation} data={tips} numRender={4}/> */}


                {/* FOOTER */}
                {/* About section */}
                <View style={Styles.footer}>
                    <View style={Styles.line}/>
                    <Text style={Styles.devTeam}>Developer team: 2NSLP</Text>
                </View>

            </ScrollView>
        );
    }

}


