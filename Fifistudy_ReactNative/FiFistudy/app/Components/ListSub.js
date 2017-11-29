import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    ScrollView,
    Dimensions,
    TextInput,
    Button,
    FlatList,
    ListView
} from 'react-native';

const styles = StyleSheet.create({
        container: {
            backgroundColor: 'rgba(0,0,0,0.5)',
            paddingTop: 5,
            paddingBottom:5,
            paddingLeft:10,
            paddingRight:10,
        },
        activeContainer:{
            backgroundColor: "yellow",
            paddingTop: 5,
            paddingBottom:5,
            paddingLeft:10,
            paddingRight:10,
        },
        engSub: {
            color: 'white'
        },
        viSub: {
            color: '#d8d8d8'
        }
    }
)

export default class ListSub extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.data),
        };
    }

    renderRow = (item) => {
        // Chua render styles moi duoc do render row chi chay lan dau,khi state thay doi thi no ko chay lai ham nay
        let isActive = false;
        if (this.props.currentItem){
            if (this.props.currentItem.number==item.number){
                alert('true');
               isActive=true
            }
        }
        if (item.sub) {
            return (
                <View style={isActive?styles.activeContainer:styles.container}>
                    {
                        item.sub[0] ? <Text style={styles.engSub}>{item.sub[0].replace(/<\/?[^>]+(>|$)/g, "")}</Text> : null

                    }
                    {
                        item.sub[1] ? <Text style={styles.viSub}>{item.sub[1].replace(/<\/?[^>]+(>|$)/g, "")}</Text> : null

                    }

                </View>
            )
        }
        return null

    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />


        )
    }
}