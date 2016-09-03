import React, { Component } from 'react';
import {
  View,
  ListView,
  Picker,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text
} from 'react-native';

import firebaseApp from '../../Helpers/FirebaseDB';
import Icon from 'react-native-vector-icons/Ionicons';

export default class PostFeed extends Component {
  constructor() {
    super();

    this.state = {
    dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
        })
    };

    this.itemsRef = firebaseApp.database().ref('issues/');

  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          points: child.val().points,
          commentCount: child.val().commentCount,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  render() {
    return (
        <ScrollView>
            <View style={styles.picker}>
                <Picker>
                    <Picker.Item label="Most Voted" value="java" color="black" size={5}/>
                    <Picker.Item label="Date" value="js" />
                </Picker>
            </View>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(data) => <TouchableOpacity style={styles.card} onPress={() => alert(data._key)}>
    <View style={{flexDirection: 'row',flex: 0}}>
      <View style={{flexDirection: 'column', flex: 0.3, paddingLeft: 10, paddingRight: 10, paddingTop: 10}}>
        <TouchableOpacity>
          <Icon name="md-arrow-dropup" size={20} color="#263238" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="md-arrow-dropdown" size={20} color="#263238" />
        </TouchableOpacity>
      </View>
      <View style={{flex: 3}}>
        <Text style={styles.titleText} ellipsizeMode="tail" numberOfLines={2}>
          {data.title}
        </Text>
      </View>
      <View style={{width: 45, backgroundColor: '#DFDFDF', marginTop: 5, marginLeft:5, marginRight: 5, height: 45}}/>
    </View>
    <View style={styles.info}>
      <Icon name="md-arrow-up" size={11} color="#607D8B" />
      <Text style={styles.infoText}>Points: {data.points}</Text>
    </View>
    <View style={styles.info}>
      <Icon name="ios-chatboxes-outline" size={11} color="#607D8B" />
      <Text style={styles.infoText}>Comments: {data.commentCount}</Text>
    </View>
  </TouchableOpacity>}
            />
        </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  picker: {
      width: 130,
      alignSelf: 'flex-end',
      margin: 5
  },
  pickerItem: {
      fontSize: 1
  },
  card: {
    backgroundColor: '#fff',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'column',
    paddingBottom: 8,
    borderWidth: 1,
    borderColor: '#EEEEEE'
  },
  titleText: {
    paddingTop: 10,
    paddingRight: 10,
    color: '#000',
  },
  info: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginLeft: 44,
    marginBottom: 2
  },
  infoText: {
    fontSize: 9,
    marginLeft: 5,
  },
});
