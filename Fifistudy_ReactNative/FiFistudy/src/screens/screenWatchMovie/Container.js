import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Dimensions,
    ScrollView,
    FlatList,
} from 'react-native';
import Utils from '../../Utils';
import ObjectFilm from './ObjectFilm';
import ListEpisode from './ListEpisode';
import EnterCommentView from './EnterCommentView';


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
            <ScrollView  >
                {/* MEDIA PLAYER SECTION */}
                <View style={{
                    backgroundColor: 'black',
                    width: width,
                    height: width * Utils.RATIO,
                    }}>
                </View>
                {/* END MEDIA PLAYER SECTION */}

                {/* SUB SECTION */}
                <View style={{
                    backgroundColor: 'lightgray',
                    width: width,
                    height: width * Utils.RATIO,
                    }}>
                </View>
                {/* END SUB SECTION */}

                <ListEpisode/>

                {/* COMMENT SECTION */}
                <View style={{
                    backgroundColor: 'lightgray',
                    width: width,
                    height: width * Utils.RATIO,
                    }}>
                    <Text style={{fontWeight: 'bold'}}>Bình luận</Text>
                    <EnterCommentView/>
                    {/* <FlatList data={ObjectFilm.comments}
                    renderItem={}/> */}
                </View>
            </ScrollView>
        );
    }
}