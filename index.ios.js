/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
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
  TouchableOpacity,
  TouchableWithoutFeedback,
  ListView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export class App extends Component{
  render() {
    return (
      <Navigator
          initialRoute={{id: 'USFTest', name: 'Index'}}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.PushFromRight;
          }} />
    );
  }
  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'USFTest') {
      return (
        <USFTest
          navigator={navigator} />
      );
    }
    if (routeId === 'HelloWorld') {
      return (
        <HelloWorld
          navigator={navigator} />
      );
    }
    return this.noRoute(navigator);

  }
  noRoute(navigator) {
    return (
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => navigator.pop()}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>No Template Found for Specified Index</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export class HelloWorld extends Component {
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


export class CalendarEvent extends Component{

  constructor(props){
    super(props);
    //console.log(this.props);
    this.state = {
      isFav: props.event.isFav,
      favColor: props.event.isFav ? '#F1B931' : "#ccc"
    };
    this.toggleFav = this.toggleFav.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  toggleFav(){
    this.setState(prevState => ({
      isFav: !prevState.isFav,
      favColor: !prevState.isFav ? '#F1B931' : "#ccc"
    }));
  }

  onPress(){
    //console.log("LETS NAVIGATE!", this.props);
    this.props.navigator.parentNavigator.push({
      id: 'HelloWorld',
      name: 'Hello World'
    });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
      <View style={{flexDirection:'row', borderColor:'rgb(234,234,235)', borderWidth:1}}>
        <View style={{minWidth:5, backgroundColor:this.props.event.color}}>
        </View>
        <View style={{flex:1, flexDirection:'row', justifyContent: 'center', padding:9}}>
          <View style={{flex:1, justifyContent: 'center'}}>
            <Text style={{fontWeight:'500'}}>{this.props.event.title}</Text>
          </View>
          <View style={{flex:1, justifyContent: 'center', alignItems: 'flex-end'}}>
          <TouchableOpacity ><Icon name="star" size={20} color={this.state.favColor} /></TouchableOpacity>
          </View>
        </View>
      </View>
      </TouchableWithoutFeedback>
    )
  }
}

export class USFTest extends Component{

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      timeSlots: ds.cloneWithRows(['7:00', '7:30', '8:00','8:30','9:00', '9:30', '10:00','10:30', '11:00', '11:30','12:00', '12:30']),
      dayEvent: {
        date: new Date(),
        event: [
          {time:'7:00', title: 'Meeting with John', isFav : true, color:'green'},
          {time:'8:30', title: 'Meeting with Lokendra', isFav : true, color:'gray'},
          {time:'10:00', title: 'Call customer for USFood', isFav : false, color:'pink'},
          {time:'11:00', title: 'Order new resources', isFav : true, color:'red'},
        ],
      }
    };
  }

  render() {
    return (
      <Navigator
        renderScene={this.renderScene.bind(this)}
        navigator={this.props.navigator}
        navigationBar={
          <Navigator.NavigationBar style={{backgroundColor : 'white', borderBottomColor: '#ccc', borderBottomWidth: 1, height: 70}}
            routeMapper={NavigationBarRouteMapper} />
        } />
    );
  }
  _renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={{
          height: adjacentRowHighlighted ? 4 : 1,
          backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
        }}
      />
    );
  }

  timeColor(rowData) {
    for(const event of this.state.dayEvent.event) {
      if(event.time === rowData) {
        return '#000';
      }
    }
    return "#ccc";
  }

  setfav(rowData) {
    for(const event of this.state.dayEvent.event) {
      if(event.time === rowData && event.isFav) {
        return '#F1B931';
      }
    }
    return "#ccc";
  }

  toggleFav(rowData){
    for(const event of this.state.dayEvent.event) {
      if(event.time === rowData) {
          event.isFav = !event.isFav;
          break;
      }
    }
  }


  renderEvent(rowData, navigator) {
    //console.log('RenderEvent Navigator:',navigator);
    for(const event of this.state.dayEvent.event) {
      if(event.time === rowData) {
        return <CalendarEvent event={event} navigator={navigator}/>;
      }
    }
    return <View style={{flex:1}}/>;
  }

  renderRow(rowData, navigator) {
    //console.log(navigator);
    return <TouchableHighlight>
        <View>
          <View style={styles.row}>
            <View style={{flex:1}}>
              <View style={{flexDirection:'row'}}>
                <View style={{paddingLeft:10, paddingRight:15, paddingTop: this.timeColor(rowData) == "#ccc" ? 10 : 0, justifyContent: 'center'}}>
                <Text style={{fontWeight:"600",justifyContent: 'center',color:this.timeColor(rowData), minWidth:40, fontFamily: 'HelveticaNeue-Light'}}>
                  {rowData}
                </Text>
                </View>
                <View style={{flex:1}}>
                  {this.renderEvent(rowData, navigator)}
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>
  }

  renderScene(route, navigator){
    //console.log(this.state);
    //console.log('Navigator: ', navigator);
    return(
        <View style={{flex:1}}>

      <View style={{marginTop:70, flexDirection:'column'}}>


          <View style={{flexDirection:'row',marginTop:10}}>

              <View style={{flex:1, flexDirection:'row', paddingHorizontal:10}}>
                <View style={{flex:1, justifyContent: 'center'}}><TouchableOpacity><Icon name="angle-left" size={30} color="#acacac" /></TouchableOpacity></View>
                <View style={{flex:1, justifyContent: 'center'}}><Text style={{fontWeight:"600",justifyContent: 'center', fontFamily: 'HelveticaNeue-CondensedBold', color: '#333'}}>
                  MARCH
                </Text></View>
                <View style={{flex:1, justifyContent: 'center', alignItems:'flex-end'}}>
                  <TouchableOpacity>
                    <Icon name="angle-right" size={30} color="#acacac" />
                  </TouchableOpacity>
                  </View>
                </View>
              <View style={{flex:1, flexDirection:'row', paddingHorizontal:10}}>
                <View style={{ justifyContent: 'center'}}><TouchableOpacity><Icon name="angle-left" size={30} color="#acacac" /></TouchableOpacity></View>

                <View style={{flex:1, justifyContent: 'center',alignItems:'center'}}>
                <Text style={{fontWeight:"200",justifyContent: 'center',alignItems:'center', fontFamily: 'HelveticaNeue-Thin' }}>
                    {""+new Date().toLocaleDateString()}
                  </Text>

                  </View>
                <View style={{ justifyContent: 'center', alignItems:'flex-end'}}>
                  <TouchableOpacity>
                    <Icon name="angle-right" size={30} color="#acacac" />
                  </TouchableOpacity>
                </View>
                </View>

          </View>
        <View style={{marginTop:10,backgroundColor:'#ccc',height:1}}/>
        <ListView dataSource={this.state.timeSlots}
          renderRow={(rowData) => this.renderRow(rowData, navigator)}
          renderSeparator={this._renderSeparator}
          style={{marginBottom:100}}
        />

        <View style={{backgroundColor:'#f4f4f4',minHeight:50,alignItems:'center', flex:1,justifyContent: 'center',flexDirection:'row', alignSelf: 'stretch', position: 'absolute', bottom: 50}}>


          <View style={{flex:1, justifyContent: 'center',alignItems:'center', height: 50}}>
              <Text style={{fontWeight:"600",justifyContent: 'center', paddingLeft: 10, alignSelf: 'stretch', textAlign: 'left',fontFamily: 'HelveticaNeue-Light'}}>DAY</Text>
              <View style={{flex:1, justifyContent: 'center', width: 28, height: 10, backgroundColor: '#5c8727', position: 'absolute', left: 10, bottom: 0}}/>
            </View>
          <View style={{flex:1, justifyContent: 'center',alignItems:'center', height: 50}}>
              <Text style={{fontWeight:"600",justifyContent: 'center', fontFamily: 'HelveticaNeue-Light', color:'#999' }}>WEEK</Text>
              <View style={{flex:1, justifyContent: 'center', width: 38, height: 0, backgroundColor: '#5c8727', position: 'absolute',  bottom: 0}}/>
            </View>
          <View style={{flex:1, justifyContent: 'center',alignItems:'center', height: 50}}>
              <Text style={{fontWeight:"600",justifyContent: 'center', paddingRight: 10,  alignSelf: 'stretch', textAlign: 'right', fontFamily: 'HelveticaNeue-Light', color: '#999'}}>MONTH</Text>
              <View style={{flex:1, justifyContent: 'center', width: 52, height: 0, backgroundColor: '#5c8727', position: 'absolute', right: 10, bottom: 0}}/>
            </View>
          </View>



      </View>
    </View>
    )
  }
  gotoHelloWorld() {
    this.props.navigator.push({
      id: 'HelloWorld',
      name: 'Hello World'
    })
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState){
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
        onPress={() => navigator.parentNavigator.push({id: 'HelloWorld', name: 'Index'})}>
          <Image
            source={require('./img/menubtn.png')}
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
              source={require('./img/magnify.png')}
              style={{ width: 18.5, height: 18.5, margin: 5}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
          onPress={() => navigator.parentNavigator.pop()}>
            <Image
              source={require('./img/bell.png')}
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
          source={require('./img/usflogo.png')}
          resizeMode='contain'
          style={{ width: 31, height: 29}}/>
      </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: '#fff',
    minHeight:50,
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 5,

    minHeight:50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: '#f3f3f3',
    minHeight:50,
  },footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: '#f3f3f3',
    minHeight:50,
  },
  text: {

  }
});

AppRegistry.registerComponent('USFTest', () => App);
