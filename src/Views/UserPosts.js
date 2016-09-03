import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import styles from '../Styles/SharedStyles';
import tabBarStyle from '../Styles/TabViewStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from '../Views/HomeScreen';
import Profile from '../Views/Profile';

export default class UserPosts extends Component {
    render() {
        return (
            <View style={styles.viewContainer}>
                   <View style={tabBarStyle.mainWrapper}>
                    <View style={tabBarStyle.viewTabContainer}>
                        <TouchableOpacity style={tabBarStyle.btnNav} onPress={ () => this.goToHome() }><Icon name="home" size={30} color="#fff" /></TouchableOpacity>
                        <TouchableOpacity style={[tabBarStyle.btnNav, {backgroundColor: '#098e70'}]} onPress={ () => this.goToUserPosts() }><Icon name="account-circle" size={30} color="#fff" /></TouchableOpacity>
                        <TouchableOpacity style={tabBarStyle.btnNav} onPress={ () => this.goToUserAccount() }><Icon name="settings" size={30} color="#fff" /></TouchableOpacity>
                        <TouchableOpacity style={tabBarStyle.btnNav} onPress={ () => this.goToLogout() }><Icon name="exit-to-app" size={30} color="#fff" /></TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.card, {margin: 15, padding: 20, flexDirection: 'row'}]}>
                    <Image source={require('../Img/owlLogo.png')} style={{height: 70, width: 70, borderRadius: 35, borderWidth: 1, borderColor: '#EEEEEE'}}/>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={{marginLeft: 20, fontFamily: 'museo', fontWeight: 'bold', fontSize: 25, color: '#38B69A'}}>reyesreg</Text>
                        <Text style={{marginLeft: 20, fontSize: 12, marginTop: 10}}>Member since August 1, 2016</Text>
                        <Text style={{marginLeft: 20, fontSize: 12, marginTop: 5, marginBottom: 10}}>Total Posts: 0</Text>
                    </View>
                </View>
                <Text style={{fontFamily: 'museo', fontWeight: 'bold', color: 'gray', marginLeft: 18, marginTop: 5}}>There's nothing to show here </Text>
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

