import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { Container, Header, Left, Body, Title, Content, Button, Icon } from 'native-base';
import { OptimizedFlatList } from 'react-native-optimized-flatlist';
import res from '../Resources/index.js';

import styles from '../Styles/ScreenListFilm.js';

const lsFilm = [
    {
        key: 0,
        banner: res.banner_film,
        title_english: 'When I met your mother',
        title_vn: 'Khi bố gặp mẹ mi ý',
        color: 'red'

    },
    {
        key: 1,
        banner: res.banner_film,
        title_english: 'When I met your mother',
        title_vn: 'Khi bố gặp mẹ mi ý',
        color: 'green'
    },
    {
        key: 2,
        banner: res.banner_film,
        title_english: 'When I met your mother',
        title_vn: 'Khi bố gặp mẹ mi ý',
        color: 'blue'
    },
]

export default class ScreenListFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ds: lsFilm
        }
    }

    clickItemFilm() {
        console.log('Clicked item film!')
    }

    renderItemFilm(item) {
        return (
            <View style={{ flexDirection: 'column' }}>
                <TouchableOpacity
                    onPress={() => this.clickItemFilm()}
                    style={styles.itemContainer}>
                    <Image
                        source={item.banner}
                        style={styles.bannerFilm}
                        resizeMod='stretch'
                    />
                    <View style={styles.textContainer}>
                        <Text
                            numberOfLines={2}
                            ellipsizeMode='tail'
                            style={styles.titleEng}>
                            {item.title_english}
                        </Text>
                        <Text
                            numberOfLines={2}
                            ellipsizeMode='tail'
                            style={styles.titleVn}>
                            {item.title_vn}
                        </Text>
                        <View style={{ marginTop: 10, marginLeft: 4, height: 2, width: 200, backgroundColor: item.color, }}>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.lineColor}>
                </View>
            </View>
        )
    }
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: 'lightsteelblue' }}>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title> Danh sách </Title>
                    </Body>
                </Header>
                <Content>
                    <OptimizedFlatList
                        style={{ margin: 15 }}
                        data={this.state.ds}
                        renderItem={({ item }) => this.renderItemFilm(item)}>
                    </OptimizedFlatList>
                </Content>
            </Container>
        )
    }
}
