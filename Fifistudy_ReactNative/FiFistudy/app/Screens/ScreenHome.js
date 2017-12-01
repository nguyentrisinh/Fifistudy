import React, { Component } from 'react';
import {
    Text,
    Image,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import Styles from '../Styles/ScreenHome';
import res from '../Resources/index';
import { ImageButton, ImageSlider } from '../Components/index.js';
import {
    HistoryFilmsContainer,
    FilmCardContainer,
    TipContainer,
} from '../Containers/index.js';
import Obj from '../Objects/ObjTemp.js';
import { SearchFilm } from '../Components/index.js';

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
                contentContainerStyle={Styles.container}
                showsVerticalScrollIndicator={false}>

                {/* TOOLBAR SECCTION */}
                <SearchFilm navigation={this.props.navigation} />
                {/* SECTION BANNER SLIDER */}
                <View
                    style={Styles.bannerSlider}>
                    <ImageSlider
                        dataSource={Obj.sliderSource}
                        position={this.state.position}
                        onPostionChange={position => this.setState({ position })} />
                </View>




                {/* SECTION HISTORY SLIDER */}
                {/* Title */}
                <View style={Styles.subtitleGroup}>
                    <Text style={Styles.subtitle}>Phim đã xem</Text>
                    <ImageButton source={res.icons.moreArrow} tintColor={res.colors.blue} />
                </View>
                <HistoryFilmsContainer />

                {/* NEWEST FILMS */}
                {/* Title */}
                <View style={Styles.subtitleGroup}>
                    <Text style={Styles.subtitle}>Phim mới</Text>
                    <ImageButton source={res.icons.moreArrow} tintColor={res.colors.blue} />
                </View>
                <FilmCardContainer navigation={this.props.navigation} />

                {/* MOST VIEWED FILMS */}
                {/* Title */}
                <View style={Styles.subtitleGroup}>
                    <Text style={Styles.subtitle}>Xem nhiều</Text>
                    <ImageButton source={res.icons.moreArrow} tintColor={res.colors.blue} />
                </View>
                <FilmCardContainer />

                {/* TIPS */}
                {/* Title */}
                <View style={Styles.subtitleGroup}>
                    <Text style={Styles.subtitle}>Tips</Text>
                    <ImageButton source={res.icons.moreArrow} tintColor={res.colors.blue} />
                </View>
                <TipContainer />
            </ScrollView>
        );
    }

}


