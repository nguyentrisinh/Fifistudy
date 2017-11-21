import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  ScrollView,
  FlatList
} from 'react-native';
import styles from '../Styles/ScreenHome';
import Res from '../Resources/index';
//import ImageSlider from '../../components/ImageSlider/ImageSlider';
import ImageButton from '../Components/ImageButton';
import {
    HistoryFilmsContainer,
    FilmCardContainer,
    TipContainer
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
                contentContainerStyle={styles.container}
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
                <View style={styles.subtitleGroup}>
                    <Text style={styles.subtitle}>Phim đã xem</Text>
                    <ImageButton source={Res.icons.moreArrow} tintColor={Res.colors.blue}/>
                </View>
                <HistoryFilmsContainer/>

                {/* NEWEST FILMS */}
                {/* Title */}
                <View style={styles.subtitleGroup}>
                    <Text style={styles.subtitle}>Phim mới</Text>
                    <ImageButton source={Res.icons.moreArrow} tintColor={Res.colors.blue}/>
                </View>
                <FilmCardContainer />
                
                {/* MOST VIEWED FILMS */}
                {/* Title */}
                <View style={styles.subtitleGroup}>
                    <Text style={styles.subtitle}>Xem nhiều</Text>
                    <ImageButton source={Res.icons.moreArrow} tintColor={Res.colors.blue}/>
                </View>
                <FilmCardContainer/>

                {/* TIPS */}
                {/* Title */}
                <View style={styles.subtitleGroup}>
                    <Text style={styles.subtitle}>Tips</Text>
                    <ImageButton source={Res.icons.moreArrow} tintColor={Res.colors.blue}/>
                </View>
                <TipContainer/>
            </ScrollView>
        );
    }

}


