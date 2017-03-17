/**
 * Created by sandeepkumar on 17/03/17.
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

export class Home extends Component {
  render() {
    return (
      <Navigator
        renderScene={this.renderScene.bind(this)}
        navigator={this.props.navigator}
        navigationBar={
          <Navigator.NavigationBar style={{backgroundColor : 'white'}}
                                   routeMapper={NavigationBarRouteMapper} />
        } />
    );
  }
  renderScene(route, navigator) {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState){
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
                        onPress={() => navigator.parentNavigator.pop()}>
        <Image
          source={require('./../../img/menubtn.png')}
          style={{ width: 22.5, height: 15, margin: 5}}/>
      </TouchableOpacity>
    );
  },
  RightButton(route, navigator, index, navState){
    return (
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', width: 80}}>
        <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
                          onPress={() => navigator.parentNavigator.pop()}>
          <Image
            source={require('./../../img/magnify.png')}
            style={{ width: 18.5, height: 18.5, margin: 5}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
                          onPress={() => navigator.parentNavigator.pop()}>
          <Image
            source={require('./../../img/bell.png')}
            style={{ width:15, height: 23, margin: 5}}/>
          <View
            style={{backgroundColor:"#CC0000", borderRadius: 10, height: 15, width: 15, flex: 0, justifyContent: 'center', position: 'absolute', top: 7.5, right: 10}}>
            <Text
              style={{backgroundColor:"rgba(0,0,0,0)", color: 'white', fontSize: 12, fontWeight: 'bold', textAlign: 'center' }}>5</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  },
  Title(route, navigator, index, navState){
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center', padding: 5}}>
        <Image
          source={require('./../../img/usflogo.png')}
          resizeMode='contain'
          style={{ width: 31, height: 29}}/>
      </TouchableOpacity>
    );
  }

}