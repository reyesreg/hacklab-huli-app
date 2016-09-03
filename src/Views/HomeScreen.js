import React, { Component } from 'react';
import {
  View,
  ListView,
  Picker,
  Alert,
  ScrollView,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';
import styles from '../Styles/SharedStyles';
import tabBarStyle from '../Styles/TabViewStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';


import Profile from '../Views/Profile';
import UserPosts from '../Views/UserPosts';
import NewPost from '../Views/PostFeed/NewPost';
import PostDetail from './PostFeed/PostDetail';
import Login from './Login'

import firebaseApp from '../Helpers/FirebaseDB';


export default class HomeScreen extends Component {
      constructor() {
    super();
    console.disableYellowBox = true;
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
                    description: child.val().description,
                    points: child.val().points,
                    commentCount: child.val().commentCount,
                    city: child.val().location.city,
                    barangay: child.val().location.barangay,
                    img: child.val().img,
                    category: child.val().category,
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
            <View style={styles.viewContainer}>
                <TouchableOpacity style={styles.floatingActionButton} activeOpacity={0.8} onPress={ () => this.goToNewPost() }>
                    <Icon2 name="md-add" size={25} color="white" />
                </TouchableOpacity>
                 <View style={tabBarStyle.mainWrapper}>
                    <View style={tabBarStyle.viewTabContainer}>
                        <TouchableOpacity style={[tabBarStyle.btnNav, {backgroundColor: '#098e70'}]} onPress={ () => this.goToHome() }><Icon name="home" size={30} color="#fff" /></TouchableOpacity>
                        <TouchableOpacity style={tabBarStyle.btnNav} onPress={ () => this.goToUserPosts() }><Icon name="account-circle" size={30} color="#fff" /></TouchableOpacity>
                        <TouchableOpacity style={tabBarStyle.btnNav} onPress={ () => this.goToUserAccount() }><Icon name="settings" size={30} color="#fff" /></TouchableOpacity>
                        <TouchableOpacity style={tabBarStyle.btnNav} onPress={ () => this.goToLogout() }><Icon name="exit-to-app" size={30} color="#fff" /></TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.picker}>
                        <Picker>
                            <Picker.Item label="Most Voted" value="java" color="black" size={5}/>
                            <Picker.Item label="Date" value="js" />
                        </Picker>
                    </View>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(data) => <TouchableOpacity style={styles.card} onPress={() => this.goToPostDetail(
                                'Normal',
                                data.title,
                                data.description,
                                data.points,
                                data.commentCount,
                                data.city,
                                data.barangay,
                                data.img,
                                data.category,
                                data._key) }>
            <View style={{ flexDirection: 'row', flex: 0 }}>
                                <View style={{ flexDirection: 'column', flex: 0.3, paddingLeft: 20, paddingRight: 10, paddingTop: 10 }}>
                                    <TouchableOpacity>
                                        <Icon2 name="md-arrow-dropup" size={20} color="#263238" />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Icon2 name="md-arrow-dropdown" size={20} color="#263238" />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 3 }}>
                                    <Text style={[styles.titleText, {marginBottom: 8}]} ellipsizeMode="tail" numberOfLines={2}>
                                        {data.title}
                                    </Text>
                                    <View style={styles.info}>
                                        <Icon2 name="ios-navigate" size={11} color="#38B69A" />
                                        <Text style={styles.infoText}>Location: {data.barangay}, {data.city}</Text>
                                    </View>
                                    <View style={styles.info}>
                                        <Icon2 name="md-arrow-up" size={11} color="#38B69A" />
                                        <Text style={styles.infoText}>Points: {data.points}</Text>
                                    </View>
                                    <View style={styles.info}>
                                        <Icon2 name="ios-chatboxes-outline" size={11} color="#38B69A" />
                                        <Text style={styles.infoText}>Comments: {data.commentCount}</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1, marginTop: 5, marginLeft: 5, marginRight: 5, height:70 }}>
                                    <Image style={{ height:70, resizeMode: Image.resizeMode.contain, borderWidth: 1 }} source={{ uri: data.img }}/>
                                </View>
                            </View>
                        </TouchableOpacity>}
                        />
                </ScrollView>
            </View>
        );
    }

    goToHome(type = 'Normal') {
        this.props.navigator.resetTo({
            component: HomeScreen,


            type: type,
            onPress: this.onPress,
            rightText: 'ALERT!'
        })
    }
    goToUserPosts(type = 'Normal') {
        this.props.navigator.resetTo({
            component: UserPosts,

            type: type,
            onPress: this.onPress,
            rightText: 'ALERT!'
        })
    }
    goToUserAccount(type = 'Normal') {
        this.props.navigator.resetTo({
            component: Profile,

            type: type,
            onPress: this.onPress,
            rightText: 'ALERT!'
        })
    }
    goToLogout(type = 'Normal') {
          Alert.alert(
  'Logout Alert!',
  'Are you sure you want to logout?',
  [
    {text: 'Cancel', style: 'cancel'},
    {text: 'OK', onPress: () => this.props.navigator.resetTo({ component: Login })}
  ]
)
            

    }
    goToPostDetail( type = 'Normal', title, description, points, commentCount, city, barangay, img, category, key) {
        this.props.navigator.push({
            component: PostDetail,
            passProps: {
                title: title,
                description: description,
                points: points,
                commentCount: commentCount,
                city: city,
                barangay: barangay,
                img: img,
                category: category,
                key: key
            },

            type: type,
            onPress: this.onPress,
            rightText: 'ALERT!'
        })
    }
    goToNewPost(type = 'Normal') {
        this.props.navigator.push({
            component: NewPost,
            passProps: {
                title: 'New Post'
            },
        })
    }
    goToLogin(){
        this.props.navigator.resetTo({
            component: Login
        })
    }

}

