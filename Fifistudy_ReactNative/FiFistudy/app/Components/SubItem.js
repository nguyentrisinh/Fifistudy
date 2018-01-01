import React, {Component} from 'react';
import {
    Text,
    View,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native';
import {ImageButton} from '../Components/index.js';
import Res from '../Resources/index.js';
import Styles from '../Styles/SubItem.js';

export default class SubItem extends Component {
    getSubEnglish(data) {
        return data.sub[0].replace(/<\/?[^>]+(>|$)/g, "");
    }
    
    getSubVietnamese(data) {
        return data.sub[1].replace(/<\/?[^>]+(>|$)/g, "");
    }


    render(){
        const {data} = this.props;
        const {isActive} = this.props;
        return (
                <View style={isActive ? Styles.containerActive : Styles.container}>
                    <TouchableWithoutFeedback>
                        <View style={Styles.subContainer}>
                        { data.sub[0] ? <Text style={Styles.subEnglish}>{this.getSubEnglish(data)}</Text> : null}
                        { data.sub[1] ? <Text style={Styles.subVietnamese}>{this.getSubVietnamese(data)}</Text> : null}
                        </View>
                    </TouchableWithoutFeedback>
                    <ImageButton source={Res.icons.volcabulary} tintColor='white'/>
                </View>
        );
    }
}