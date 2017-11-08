import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Dimensions,
    ScrollView
} from 'react-native';
import Utils from '../../Utils';
import CircleTV from '../../components/CircleTV';


export default class WatchScreen extends Component {
    constructor(props){
        super(props);

        this.state = {
            listEpisode: [1, 2, 3, 3.5, 6, 10],
        }
    }

    render(){
        width = Dimensions.get('window').width;
        return (
            <ScrollView >
                <View style={{
                    backgroundColor: 'lightblue',
                    width: width,
                    height: width * Utils.RATIO,
                    }}>
                </View>
                <View style={{
                    backgroundColor: 'lightgray',
                    width: width,
                    height: width * Utils.RATIO,
                    }}>
                </View>

                {/* LIST EPISODE */}
                <View style={{flexDirection: 'row'}}>{
                    this.state.listEpisode.map((item, index) => (
                        <CircleTV text={item} size={42} />
                    ))
                }</View>
            </ScrollView>
        );
    }
}