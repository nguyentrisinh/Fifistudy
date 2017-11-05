import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Button,
  View,
  Dimensions,
  ScrollView
} from 'react-native';
import Styles from './style';
import Resources from '../../resources/resources';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import ImageButton from '../../components/ImageButton';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: 1,
            interval: null,
            bannerSliderSource: [
              {
                title: 'Spider Man 1',
                caption: 'Người nhện 1',
                url: 'https://i.ytimg.com/vi/qGmHrPGylho/maxresdefault.jpg',
              }, {
                title: 'Star Wars',
                caption: 'Chiến tranh giữa các vì sao',
                url: 'https://mediacdns.karnaval.com/media/news_media/images/thumbnail_475768.jpg?v=220816122701',
              }, {
                title: 'Thor: Ragnarok',
                caption: 'Thời khắc tận thế',
                url: 'https://i.ytimg.com/vi/r-7Grp4kbgA/maxresdefault.jpg',
              },
            ],
            historyFilms: [
                { url: 'https://i.ytimg.com/vi/OK-7IOkIFWQ/maxresdefault.jpg', },
                { url: 'https://i.ytimg.com/vi/gvDlOCxDopA/maxresdefault.jpg', },
                { url: 'https://i.ytimg.com/vi/qGmHrPGylho/maxresdefault.jpg', },
                { url: 'https://i.ytimg.com/vi/c4as9E4Pi_Y/maxresdefault.jpg', },
                { url: 'https://i.ytimg.com/vi/eHM1f3OEnyI/maxresdefault.jpg', },

            ]
          };
    }

    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === this.state.bannerSliderSource.length ? 0 : this.state.position + 1
                });
            }, 2000) // (postion, time to change image)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    createHistoryListItem(url){
        return (
            <Image source={{uri: url}}
                        style={{
                            resizeMode: 'contain',
                            width: Dimensions.get('window').width/3,
                            height: Dimensions.get('window').width * (9 / 16),
                        }}/>
        );
    }

    static navigationOptions = {
        drawerLabel: 'HomeScreen',
        
    };

    render() {
        const {navigate } = this.props.navigation;
        const width = Dimensions.get('window').width;

        return (
            <View style={{
                backgroundColor: 'lightskyblue',
                flex: 1
                }}>
                {/* SECTION TOOL BAR */}
                <View style={{
                    flexDirection: 'row',
                    width: Dimensions.get('window').width,
                    height: 56,
                    justifyContent: 'space-between',
                    paddingLeft: 12,
                    paddingRight: 12,
                    paddingTop: 4,
                    paddingBottom: 4,
                    position: 'absolute',
                    zIndex: 5,
                    }}>
                    <ImageButton
                        onPress={() => this.props.navigation.navigate('DrawerToggle')}
                        source={Resources.homePage.icMenu}
                        tintColor='white'/>
                    <ImageButton source={Resources.homePage.icSearch} tintColor='#fafafa'/>
                </View>

                {/* SECTION BANNER */}
                <View 
                    style={{
                        width: width,
                        height: width/2,
                        backgroundColor: 'lightgray',
                        zIndex: 0
                    }}>

                    <ImageSlider
                        dataSource={this.state.bannerSliderSource}
                        position={this.state.position}
                        onPostionChange={position => this.setState({position})}
                    />
                </View>




                {/* SECTION HISTORY SLIDER */}
                <View style={{
                    width: width,
                    paddingTop: 8,
                    paddingBottom: 16,
                    }}>
                    {/* TITLE */}
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginLeft: 16,
                        marginRight: 6}}>
                        <Text style={{fontWeight: 'bold'}}>Phim đã xem</Text>
                        
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text>Xem thêm</Text>
                            <ImageButton source={Resources.homePage.icMore}/>
                        </View>
                    </View>

                    {/* LIST FILM */}
                    <View style={{elevation: 3, backgroundColor: 'white'}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {
                                this.state.historyFilms.map((film, index) => (
                                    //return createHistoryListItem(film.url);
                                    <View key={index}>
                                        <Image source={{uri: film.url}}
                                            style={{
                                                resizeMode: 'contain',
                                                width: width/2.5,
                                                height: width/2.5*(9/16),
                                        }}/>
                                    </View>
                                ))
                            }
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }

}