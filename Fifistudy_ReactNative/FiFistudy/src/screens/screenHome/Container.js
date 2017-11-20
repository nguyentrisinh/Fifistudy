// Container for home screen
import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  Dimensions,
  ScrollView,
  FlatList
} from 'react-native';
import Styles from './style';
import Resources from '../../resources/resources';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import ImageButton from '../../components/ImageButton';
import FilmCard from './FilmCard';
import TipItem from './TipItem';

import Obj from './Object';




export default class HomeScreen extends Component {
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
                    position: this.state.position === Obj.sliderSource.length ? 0 : this.state.position + 1
                });
            }, 2000) // (postion, time to change image)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        const width = Dimensions.get('window').width;
        return (
            <ScrollView 
                contentContainerStyle={Styles.container}
                showsVerticalScrollIndicator={false}>

                {/* TOOLBAR SECCTION */}
                {/* <View style={{
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
                        source={Resources.icons.menu}
                        tintColor='white'/>
                    <ImageButton source={Resources.icons.search} tintColor='white'/>
                </View> */}

                
                
                {/* SECTION BANNER SLIDER */}
                {/* <View 
                    style={Styles.bannerSlider}>
                    <ImageSlider
                        dataSource={Obj.sliderSource}
                        position={this.state.position}
                        onPostionChange={position => this.setState({position})}/>
                </View> */}




                {/* SECTION HISTORY SLIDER */}
                {/* Title */}
                <View style={Styles.subtitleGroup}>
                    <Text style={Styles.subtitle}>Phim đã xem</Text>
                    <ImageButton source={Resources.icons.moreArrow} tintColor={Resources.colors.blue}/>
                </View>

                {/* History films */}
                {/* <View style={Styles.listHistoryFilm}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={Obj.historyFilms}
                        keyExtractor={ID => ID}
                        renderItem={({item}) => (
                            <Image source={{uri: item.url}} style={Styles.historyFilmImg}/>
                        )}/>
                </View> */}




                {/* SECTION GROUP OF NEWEST FILMS */}
                {/* Title */}
                <View style={Styles.subtitleGroup}>
                    <Text style={Styles.subtitle}>Phim mới</Text>
                    <ImageButton source={Resources.icons.moreArrow} tintColor={Resources.colors.blue}/>
                </View>
                
                {/* <FlatList
                    horizontal={false}
                    numColumns={2}
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    data={Obj.newestFilms}
                    keyExtractor={ID => ID}
                    renderItem={({item}) => (
                        <FilmCard data={item}/>
                )}/> */}



                {/* SECTION GROUP OF MOST VIEWED FILMS */}
                {/* Title */}
                <View style={Styles.subtitleGroup}>
                    <Text style={Styles.subtitle}>Xem nhiều</Text>
                    <ImageButton source={Resources.icons.moreArrow} tintColor={Resources.colors.blue}/>
                </View>
                
                {/* <FlatList
                    horizontal={false}
                    numColumns={2}
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    data={Obj.newestFilms}
                    keyExtractor={ID => ID}
                    renderItem={({item}) => (
                        <FilmCard data={item}/>
                )}/> */}




                {/* SECTION GROUP OF TIPS */}
                {/* Title */}
                <View style={Styles.subtitleGroup}>
                    <Text style={Styles.subtitle}>Tips</Text>
                    <ImageButton source={Resources.icons.moreArrow} tintColor={Resources.colors.blue}/>
                </View>

                <FlatList
                    horizontal={false}
                    numColumns={2}
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    data={Obj.tips}
                    keyExtractor={ID => ID}
                    renderItem={({item}) => (
                        <TipItem data={item}/>
                )}/>
            </ScrollView>
        );
    }

}


