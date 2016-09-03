import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import firebase from 'firebase';
import HomeScreen from './HomeScreen';
import Register from './Register';

import firebaseApp from '../Helpers/FirebaseDB';
import styles from '../Styles/LoginStyles';


export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            userPass: ''
        }
    }
    render() {
        return (
            <View style={styles.viewContainer}>
                <Image source={require('../Img/owlLogo.png') } style={{ height: 200, width: 200}}/>
                <Text style={{marginTop: 20, fontSize: 30, fontFamily: 'museo', fontWeight: 'bold'}}>Login</Text>
                <View style={styles.innerContainer}>
                    <TextInput
                        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={(userName) => this.setState({ userName }) }
                        placeholder="Enter Username..."
                        value={this.state.userName} />
                    <TextInput
                        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={(userPass) => this.setState({ userPass }) }
                        placeholder="Enter Password..."
                        value={this.state.userPass} />

                    <TouchableOpacity style={styles.submit} onPress={ () => this.loginUser() }>
                        <Text style={{ color: '#fff' }}>Login!</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row'}}>
                    <Text style={{marginTop: 10 }}>Not yet a member? </Text>
                 <Text style={{marginTop: 10, fontWeight: 'bold'}} onPress={ () => this.goToRegister() }>Sign Up!</Text>

                 </View>
                </View>
            </View>
        );
    }
    loginUser() {

        firebaseApp.auth().signInWithEmailAndPassword(this.state.userName, this.state.userPass).then(() => {
            alert('Login Success!');
            this.setState({
                userName: '',
                userPass: '',
            })
            this.props.navigator.resetTo({
                component: HomeScreen,
            })
        })
            .catch((error) => {
                alert("Failed: " + error.message);
            });
    }
    goToRegister() {
        this.props.navigator.push({
            component: Register
        })
    }
}
