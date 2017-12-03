import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  ScrollView,
} from 'react-native';
import Styles from '../Styles/ScreenHome';
import Res from '../Resources/index';
import {ImageButton, ImageSlider} from '../Components/index.js';
import {
    HistoryFilmsContainer,
    FilmCardContainer,
    TipContainer,
} from '../Containers/index.js';

import Obj from '../Objects/ObjTemp.js';

export default class ScreenHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: 1,
            interval: null,
          };
    }

    navigateToScreen(route){
        this.setState({route: route});
        let navigationAction = NavigationActions.navigate({routeName: route});
        this.props.navigation.dispatch(navigationAction);
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
        return (
            <ScrollView 
                contentContainerStyle={Styles.container}
                showsVerticalScrollIndicator={false}>

                {/* TOOLBAR SECCTION */}
                <View style={Styles.toolbar}>
                    <ImageButton
                        onPress={() => this.props.navigation.navigate('DrawerToggle')}
                        source={Res.icons.menu}
                        tintColor='white'/>
                    <ImageButton source={Res.icons.search} tintColor='white'/>
                </View>

                
                
                {/* SECTION BANNER SLIDER */}
                <View 
                    style={Styles.bannerSlider}>
                    <ImageSlider
                        navigation={this.props.navigation}
                        dataSource={Obj.sliderSource}
                        position={this.state.position}
                        onPostionChange={position => this.setState({position})}/>
                </View>




                {/* SECTION HISTORY SLIDER */}
                {/* Title */}
                <View style={Styles.subtitleGroup}>
                    <Text style={Styles.subtitle}>Phim đã xem</Text>
                    <ImageButton source={Res.icons.moreArrow} tintColor={Res.colors.blue}/>
                </View>
                <HistoryFilmsContainer navigation={this.props.navigation}/>

                {/* NEWEST FILMS */}
                {/* Title */}
                <View style={Styles.subtitleGroup}>
                    <Text style={Styles.subtitle}>Phim mới</Text>
                    <ImageButton source={Res.icons.moreArrow} tintColor={Res.colors.blue}/>
                </View>
                <FilmCardContainer navigation={this.props.navigation}/>
                
                {/* MOST VIEWED FILMS */}
                {/* Title */}
                <View style={Styles.subtitleGroup}>
                    <Text style={Styles.subtitle}>Xem nhiều</Text>
                    <ImageButton source={Res.icons.moreArrow} tintColor={Res.colors.blue}/>
                </View>
                <FilmCardContainer navigation={this.props.navigation}/>

                {/* TIPS */}
                {/* Title */}
                <View style={Styles.subtitleGroup}>
                    <Text style={Styles.subtitle}>Tips</Text>
                    <ImageButton source={Res.icons.moreArrow} tintColor={Res.colors.blue}
                        onPress={() => this.navigateToScreen('ScreenTips')}/>
                </View>
                <TipContainer navigation={this.props.navigation} numRender={4}/>
            </ScrollView>
        );
    }

}


