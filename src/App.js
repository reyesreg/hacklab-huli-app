import React, { Component } from 'react';
import {
  Text,
  View,
  Navigator,
  TouchableHighlight,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Login from './Views/Login';
import styles from './Styles/SharedStyles';


export default class regener8_hacklab extends Component {
  render() {
    return (
      <Navigator
        style={{ flex: 1 }}
        initialRoute= {{ name: 'Login', component: Login }}
        renderScene={this.renderScene.bind(this) }
        configureScene={ this.configureScene }
        navigationBar = {
          <Navigator.NavigationBar
            style={styles.navBarStyle}
            navigationStyles={Navigator.NavigationBar.StylesIOS}
            routeMapper={NavigationBarRouteMapper} />
        }/>
    );
  }
  renderScene(route, navigator) {
    let RouteComponent = route.component
    return <RouteComponent navigator={navigator} {...route.passProps} />
  }



  configureScene(route, routeStack) {
    if (route.type === 'Modal') {
      return Navigator.SceneConfigs.FadeAndroid
    }
    return Navigator.SceneConfigs.FadeAndroid
  }
}


var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if (index > 0) {
      return (
        <TouchableHighlight
        	 underlayColor="transparent"
          onPress={() => { if (index > 0) { navigator.pop(); } } }>
          <Icon name="ios-arrow-back" size={30} color="#fff" style={{paddingLeft: 15}} />
        </TouchableHighlight>
      )
    }
    else { return null; }
  },
  RightButton(route, navigator, index, navState) {
    if (route.onPress) return (<TouchableHighlight
      onPress={ () => route.onPress() }>
      <Text style={ styles.rightNavButtonText }>
        { route.rightText || 'Right Button' }
      </Text>
    </TouchableHighlight>)
  },
  Title(route, navigator, index, navState) {
    return (
      <View style={{flex: 1, flexDirection: 'row', height: 300}}>
        <Text style={styles.navTitle}>Huli App</Text>
        <Image source={require('./Img/owlLogo.png')} style={{height: 45, width: 45, position: 'absolute', marginLeft: 70, marginTop:-10, zIndex: 4}}/>
      </View>
    );
  }
};


