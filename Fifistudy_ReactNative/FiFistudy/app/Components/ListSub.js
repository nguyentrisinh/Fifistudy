import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
} from 'react-native';
import { SubItem } from '../Components/index.js';
export default class ListSub extends Component {
    constructor(props){
        super(props);
        this.rows = [];
    }

    renderRow(item){
        //this.listSub.scrollToItem({animated: true, index: "" + item.number});
        if (item.sub) {
            return (
                <SubItem 
                    ref={(ref) => this.rows.push(ref)}
                    data={item}/>
            );
        }
        return null;
    }
    setActive(nextActiveSubNumber) {
        console.log(`active! ${nextActiveSubNumber}`);
        if (nextActiveSubNumber >= this.rows.length)
            return;
        console.log(this.rows[nextActiveSubNumber - 1]);

        nextActiveSubNumber--; // this.rows begin from 0 while sub number begin from 1
        this.rows[nextActiveSubNumber].setActive(true);
        if (nextActiveSubNumber !== 1) {
            this.rows[nextActiveSubNumber - 1].setActive(false); // current sub
        }
    }
    render() {
        const {data} = this.props;
        return (
            <FlatList
                horizontal={false}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                data={data}
                initialNumToRender={500}
                keyExtractor={item => item.number}
                renderItem={({item}) => this.renderRow(item)}/>
        )
    }
}