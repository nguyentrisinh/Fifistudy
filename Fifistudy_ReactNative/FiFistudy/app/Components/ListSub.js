import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
} from 'react-native';
import { SubItem } from '../Components/index.js';
export default class ListSub extends Component {
    renderRow(item){
        // Chua render styles moi duoc do render row chi chay lan dau,khi state thay doi thi no ko chay lai ham nay
        let isActive = false;
        if (this.props.currentItem){
            //console.log(`${item.number} | ${item.sub[0]}`);
            if (this.props.currentItem.number==item.number){
               isActive=true;
               console.log(`${item.number} | ${item.sub[0]}`);
               //this.listSub.scrollToItem({animated: true, index: "" + item.number});
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
            <FlatList
                ref={component => this.listSub = component}
                horizontal={false}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                data={data}
                keyExtractor={item => item.number}
                renderItem={({item}) => this.renderRow(item)}/>
        )
    }
}