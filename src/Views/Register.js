import React, { Component } from 'react';
import {
    TouchableOpacity,
    Image,
    Text,
    View,
    TextInput,
} from 'react-native';
import firebase from 'firebase';
import HomeScreen from './HomeScreen';
import firebaseApp from '../Helpers/FirebaseDB';
import styles from '../Styles/LoginStyles';




export default class Register extends Component {
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
                <Image source={require('../Img/owlLogo.png') } style={{ height: 200, width: 200 }}/>
                <Text style={{ marginTop: 20, fontSize: 30, fontFamily: 'museo', fontWeight: 'bold' }}>Register</Text>
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

                    <TouchableOpacity style={styles.submit} onPress={ () => this.signUpUser() }>
                        <Text style={{ color: '#fff' }}>Register!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    signUpUser() {

        firebaseApp.auth().createUserWithEmailAndPassword(this.state.userName, this.state.userPass).then(() => {
            alert('Your account was created!');
            this.setState({
                userName: '',
                userPass: '',
            })
            this.props.navigator.push({
                component: HomeScreen,
            })
        })

            .catch((error) => {
                alert("Account creation failed: " + error.message);
            });
    }
}

