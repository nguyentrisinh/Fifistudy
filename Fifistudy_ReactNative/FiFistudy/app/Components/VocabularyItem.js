import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Popover from 'react-native-popover-view';
import Res from '../Resources/index';
import {ImageButton} from '../Components/index.js';
import Styles from '../Styles/VocabularyItem.js';
import {meaningsOfWord} from '../Objects/ObjMeaning.js'

export default class VocabularyItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      popoverText: '',
      isPopoverVisible: false,
      buttonRect: {}
    };
    this.button = [];
  }

  showPopover(index, text) {
    this.button[index].measure((ox, oy, width, height, px, py) => {
      this.setState({
        popoverText: this.getMeaningOfWord(text),
        isPopoverVisible: true,
        buttonRect: {x: px, y: py -26, width: width, height: height}
      });
    });
  }

  closePopover() {
    this.setState({isPopoverVisible: false});
  }

  getMeaningOfWord(word){
    word = word.toLocaleLowerCase();
    if (!meaningsOfWord[word] || meaningsOfWord[word] === undefined)
      return ' ';
    return meaningsOfWord[word];
  }

  render() {
    const {data} = this.props;
    const {navigate} = this.props.navigation;
    let tempButton;

    return(
      <View style={Styles.container}>
        <ImageButton source={Res.icons.garbage} tintColor={Res.colors.gray}/>
        <View style={Styles.contentContainer}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={data.vocabulary.split(' ')}
              renderItem={({item, index}) => 
                <TouchableOpacity ref={ref => this.button.push(ref)}
                  onPress={() => this.showPopover(index, item)}>
                  <Text style={Styles.vocabulary}>{item} </Text>
                </TouchableOpacity>
                // item.id === -1 ? <Text style={Styles.vocabulary}>{item.content}</Text>
                //   : <TouchableOpacity ref={ref => this.button = ref}
                //     onPress={(e) => this.showPopover(e, item.content)}>
                //       <Text style={Styles.vocabulary}>{item.content}</Text>
                //     </TouchableOpacity>
            }/>

            <Popover
              isVisible={this.state.isPopoverVisible}
              fromRect={this.state.buttonRect}
              onClose={() =>this.closePopover()}>
              <Text style={{
                margin: 8,
                fontSize: 16,
                color: Res.colors.green,
                opacity: 0.8}}>{this.state.popoverText}</Text>
            </Popover>
            <Text style={Styles.meaning}>{data.meaning}</Text>
        </View>

        <ImageButton source={Res.icons.play} tintColor={Res.colors.blue}
          // onPress={() => navigate('ScreenWatchMovie', {timeStart: data.time})}
          />          
      </View>
    );
  }
}