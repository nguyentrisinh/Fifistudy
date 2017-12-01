import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
} from 'react-native';
import { SubItem } from '../Components/index.js';
export default class ListSub extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    //     // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    //     // this.state = {
    //     //     dataSource: ds.cloneWithRows(this.props.data),
    //     // };
    // }

    renderRow(item){
        // Chua render styles moi duoc do render row chi chay lan dau,khi state thay doi thi no ko chay lai ham nay
        let isActive = false;
        if (this.props.currentItem){
            // console.log(`currentItem: ${this.props.currentItem.number} | item.number: ${item.number}`);
            if (this.props.currentItem.number==item.number){
               isActive=true;
            }
        }
        if (item.sub) {
            return (
                <SubItem data={item} isActive={isActive}/>
            );
        }
        return null;
    }
    render() {
        const {data} = this.props;
        return (
            // <ListView
            //     dataSource={this.state.dataSource}
            //     renderRow={this.renderRow}
            // />
            <FlatList
            horizontal={false}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={number => number}
            renderItem={({item}) => this.renderRow(item)}/>
        )
    }
}