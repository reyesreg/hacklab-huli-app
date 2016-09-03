import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import styles from '../Styles/SharedStyles';
import tabBarStyle from '../Styles/TabViewStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from '../Views/HomeScreen';
import UserPosts from '../Views/UserPosts';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.viewContainer}>
               <View style={tabBarStyle.mainWrapper}>
                    <View style={tabBarStyle.viewTabContainer}>
                        <TouchableOpacity style={tabBarStyle.btnNav} onPress={ () => this.goToHome() }><Icon name="home" size={30} color="#fff" /></TouchableOpacity>
                        <TouchableOpacity style={tabBarStyle.btnNav} onPress={ () => this.goToUserPosts() }><Icon name="account-circle" size={30} color="#fff" /></TouchableOpacity>
                        <TouchableOpacity style={[tabBarStyle.btnNav, {backgroundColor: '#098e70'}]} onPress={ () => this.goToUserAccount() }><Icon name="settings" size={30} color="#fff" /></TouchableOpacity>
                        <TouchableOpacity style={tabBarStyle.btnNav} onPress={ () => this.goToLogout() }><Icon name="exit-to-app" size={30} color="#fff" /></TouchableOpacity>
                    </View>
                </View>
                <Text>Profile Screen</Text>
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
        alert('logout');
    }
}

