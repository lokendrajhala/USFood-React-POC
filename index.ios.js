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
    ListView,
    ScrollView
} from 'react-native';
//Icon lib
import Icon from 'react-native-vector-icons/FontAwesome';

//Moment Lib for date
import Moment from 'moment';

export class App extends Component {
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
          }}/>
        );
    }

    renderScene(route, navigator) {
        var routeId = route.id;
        if (routeId === 'USFTest') {
            return (
                <USFTest
                    navigator={navigator}/>
            );
        }
        if (routeId === 'HelloWorld') {
            return (
                <HelloWorld
                    navigator={navigator}/>
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

    constructor(props) {
        super(props);

        this.onPress = this.onPress.bind(this);
    }


    onPress() {


    }
    render() {
        return (
            <Navigator
                renderScene={this.renderScene.bind(this)}
                navigator={this.props.navigator}
                navigationBar={
          <Navigator.NavigationBar style={{backgroundColor : 'white'}}
            routeMapper={NavigationBarRouteMapper} />
        }/>
        );
    }

    renderScrollBody(){
        return <ScrollView style={styles.scrollbody}>
            <Text style={{fontWeight:"600",justifyContent: 'center',alignItems:'center' }}>
                Order new boxes</Text>
            <View style={{marginTop:10,backgroundColor:'#F8F8F8',height:1}}/>
            <View style={{flexDirection:'row',paddingTop:10,paddingBottom:10}}>
                <TouchableHighlight
                    style={{flex:1, justifyContent: 'center', alignItems:'flex-end'}}>
                 <View style={{flexDirection:'row',justifyContent: 'center',alignItems:'center'}}>
                    <Text style={{flex:1,fontWeight:"400",justifyContent: 'center',alignItems:'center',color:'#909090' }}>
                        +91 90 9876465446
                    </Text>
                    <Image
                        style={{width: 40, height: 40}}
                        source={require('./img/phone.png')}
                        />
                     </View>
                </TouchableHighlight>
            </View>
            <View style={{backgroundColor:'#F8F8F8',height:1}}/>
            <View style={{paddingTop:10,paddingBottom:10}}>
                <Text style={{flex:1,fontWeight:"400",justifyContent: 'center',alignItems:'center' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </View>
            <View style={{backgroundColor:'#F8F8F8',height:1}}/>
            <View style={{paddingTop:10,paddingBottom:10}}>
                <Text style={{flex:1,fontWeight:"600",justifyContent: 'center',alignItems:'center',color: '#909090' }}>
                    RESPONSIBLES
                </Text>
                <View>
                    <ContactRow />
                </View>

                    <View style={{flexDirection:'row',marginTop:15}}>
                        <View style={{flex:2,justifyContent: 'center',alignItems:'center'}}>
                            <Image
                                style={{width: 40, height: 40}}
                                source={require('./img/plus.png')}
                                />
                        </View>
                        <View style={{flex:8}}>

                        </View>
                    </View>


            </View>
            <View style={{backgroundColor:'#F8F8F8',height:1}}/>

            <View  style={{flex:1,marginTop:10,marginBottom:10,flexDirection:'row',justifyContent: 'center',alignItems:'center'}}>
                <View style={{backgroundColor:'#F8F8F8',borderColor: '#ccc', borderWidth: 1,}}>
                    <View style={{width:15,height:15,margin:2,backgroundColor:'#CF5337'}}>

                    </View>
                </View>
                <Text style={{flex:1,marginLeft:10,fontWeight:"400",justifyContent: 'center',alignItems:'center' }}>
                    Change Color
                </Text>

            </View>


            <TouchableHighlight
                style={{flex:1,marginTop:10, justifyContent: 'center', alignItems:'center',backgroundColor:"#F1B932"}}>
                    <Text style={{flex:1,paddingBottom:15,paddingTop:15,fontWeight:"700",justifyContent: 'center',alignItems:'center',color:'#FFF' }}>
                        ROUTE  FINDER
                    </Text>

            </TouchableHighlight>

        </ScrollView>
    }



    renderScene(route, navigator) {
        return (
            <View style={{marginTop:70,flex:1}}>
                <View style={{backgroundColor:'#FCFCFD'}}>
                    <View style={{backgroundColor:'#ccc',height:1}}/>

                    <View style={{flexDirection:'row',marginTop:10}}>

                        <View style={{flex:1, flexDirection:'row', paddingHorizontal:10}}>
                            <TouchableWithoutFeedback onPress={() =>  navigator.parentNavigator.pop()}
                                                >
                                <View style={{ flexDirection:'row',flex:1, alignItems:'center'}}>

                                <Icon
                                name="angle-left" size={30} color="#acacac"/>
                               <Text style={{fontWeight:"600",marginLeft:10,justifyContent: 'center',alignItems:'center' }}>
                                    RETURN
                                </Text>
                            </View>
                            </TouchableWithoutFeedback>
                            <TouchableHighlight onPress={this._onMonthNextButton}
                                                style={{flex:1, justifyContent: 'center', alignItems:'flex-end'}}>
                                <Text style={{fontWeight:"500",justifyContent: 'center',alignItems:'center',color:'#606061' }}>
                                    EVENT DETAIL
                                </Text>
                            </TouchableHighlight>
                        </View>

                    </View>
                    <View style={{marginTop:10,backgroundColor:'#ccc',height:1}}/>
                </View>

                <View style={{backgroundColor:'#ccc',flex:1,flexDirection:'row'}}>
                    <View style={{backgroundColor:'#CF5337',flex:1}}>

                    </View>

                    <View  style={{backgroundColor:'#fff',flex:99}}>
                        {this.renderScrollBody()}
                    </View>

                </View>




            </View>
        );
    }
}
export class ContactRow extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <TouchableWithoutFeedback >
                <View style={{flexDirection:'row',marginTop:15}}>
                    <View style={{flex:2,justifyContent: 'center',alignItems:'center'}}>
                        <Image
                            style={{width: 40, height: 40}}
                            source={require('./img/profile_icon.png')}
                            />
                    </View>
                    <View style={{flex:8}}>
                        <Text style={{flex:1,fontWeight:"400",fontSize: 13 }}>
                            John Alexander
                        </Text>
                        <Text style={{flex:1,fontWeight:"700",fontSize: 14 }}>
                            SALES MANAGER
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}


export class CalendarEvent extends Component {

    constructor(props) {
        super(props);
        //console.log(this.props);
        this.state = {
            isFav: props.event.isFav,
            favColor: props.event.isFav ? '#F1B931' : "#ccc"
        };
        this.toggleFav = this.toggleFav.bind(this);
        this.onPress = this.onPress.bind(this);
    }

    toggleFav() {
        this.setState(prevState => ({
            isFav: !prevState.isFav,
            favColor: !prevState.isFav ? '#F1B931' : "#ccc"
        }));
    }

    onPress() {
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
                            <TouchableOpacity ><Icon name="star" size={20}
                                                     color={this.state.favColor}/></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

export class USFTest extends Component {

    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            timeSlots: ds.cloneWithRows(['7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30']),
            dayEvent: {
                date: new Date(),
                event: [
                    {time: '7:00', title: 'Meeting with John', isFav: true, color: 'green'},
                    {time: '8:30', title: 'Meeting with Lokendra', isFav: true, color: 'gray'},
                    {time: '10:00', title: 'Call customer for USFood', isFav: false, color: 'pink'},
                    {time: '11:00', title: 'Order new resources', isFav: true, color: 'red'},
                ]

            },
            selectedDate: "" + Moment().format('ddd Do MMM YYYY')
        };

        this._onMonthPrevButton = this._onMonthPrevButton.bind(this);
        this._onMonthNextButton = this._onMonthNextButton.bind(this);
        this._onDayPrevButton = this._onDayPrevButton.bind(this);
        this._onDayNextButton = this._onDayNextButton.bind(this);
    }


    render() {
        return (
            <Navigator
                renderScene={this.renderScene.bind(this)}
                navigator={this.props.navigator}
                navigationBar={
          <Navigator.NavigationBar style={{backgroundColor : 'white', borderBottomColor: '#ccc', borderBottomWidth: 1, height: 70}}
            routeMapper={NavigationBarRouteMapper} />
        }/>
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
        for (const event of this.state.dayEvent.event) {
            if (event.time === rowData) {
                return '#000';
            }
        }
        return "#ccc";
    }

    setfav(rowData) {
        for (const event of this.state.dayEvent.event) {
            if (event.time === rowData && event.isFav) {
                return '#F1B931';
            }
        }
        return "#ccc";
    }

    toggleFav(rowData) {
        for (const event of this.state.dayEvent.event) {
            if (event.time === rowData) {
                event.isFav = !event.isFav;
                break;
            }
        }
    }


    renderEvent(rowData, navigator) {
        //console.log('RenderEvent Navigator:',navigator);
        for (const event of this.state.dayEvent.event) {
            if (event.time === rowData) {
                return <CalendarEvent event={event} navigator={navigator}/>;
            }
        }
        return <View style={{flex:1,minHeight:50}}/>;
    }

    renderRow(rowData, navigator) {
        //console.log(navigator);
        return <TouchableHighlight>
            <View>
                <View style={styles.row}>
                    <View style={{flex:1}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{paddingLeft:10, paddingRight:15,  justifyContent: 'center',}}>
                                <Text
                                    style={{fontWeight:"600",justifyContent: 'center',color:this.timeColor(rowData), minWidth:40, fontFamily: 'HelveticaNeue-Light'}}>
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

    renderFooter() {
        return <View
            style={{backgroundColor:'#fff',paddingTop:10,minHeight:100, flex:1,flexDirection:'row',alignItems:'flex-start'}}>


            <View style={{flex:1,flexDirection:'column',justifyContent: 'center',alignItems:'center'}}>
                <Text style={{fontWeight:"600",justifyContent: 'center',alignItems:'center'}}>DAY</Text>
                <View style={{backgroundColor:'#5D862E',width:50,height:8,marginTop:5}}/>
            </View>
            <View style={{flex:1,flexDirection:'column',justifyContent: 'center',alignItems:'center'}}>
                <Text style={{fontWeight:"600",justifyContent: 'center' }}>WEEK</Text>
                <View style={{backgroundColor:'#fff',width:50,height:8,marginTop:5,}}/>
            </View>
            <View style={{flex:1,flexDirection:'column',justifyContent: 'center',alignItems:'center'}}>
                <Text style={{fontWeight:"600",justifyContent: 'center' }}>MONTH</Text>
                <View style={{backgroundColor:'#fff',width:50,height:8,marginTop:5}}/>
            </View>
        </View>


    }


    _onMonthPrevButton() {


        this.setState({selectedDate: "" + Moment((Moment(this.state.selectedDate, "ddd Do MMM YYYY").subtract(1, 'months').calendar())).format('ddd Do MMM YYYY')});


    }

    _onMonthNextButton() {


        this.setState({selectedDate: "" + Moment((Moment(this.state.selectedDate, "ddd Do MMM YYYY").add(1, 'months').calendar())).format('ddd Do MMM YYYY')});

    }

    _onDayPrevButton() {

        this.setState({selectedDate: "" + Moment((Moment(this.state.selectedDate, "ddd Do MMM YYYY").subtract(1, 'days').format())).format('ddd Do MMM YYYY')});

    }

    _onDayNextButton() {

        console.log("" + Moment().subtract(1, 'days').format('ddd'));
        console.log("" + Moment((Moment(this.state.selectedDate, "ddd Do MMM YYYY").add(1, 'days').format())).format('ddd Do MMM YYYY'));

        this.setState({selectedDate: "" + Moment((Moment(this.state.selectedDate, "ddd Do MMM YYYY").add(1, 'days').format())).format('ddd Do MMM YYYY')});
        // console.log(""+this.state.selectedDate);
    }

    renderScene(route, navigator) {
        //console.log(this.state);
        //console.log('Navigator: ', navigator);
        return (
            <View style={{flex:1}}>

                <View style={{marginTop:70, flexDirection:'column'}}>
                    <View style={{flexDirection:'row',paddingTop:10,paddingBottom:10,backgroundColor:'#FCFCFD'}}>

                        <View style={{flex:1, flexDirection:'row', paddingHorizontal:10,}}>
                            <TouchableHighlight onPress={this._onMonthPrevButton}
                                                style={{ justifyContent: 'center'}}><Icon
                                name="angle-left" size={30} color="#acacac"/></TouchableHighlight>
                            <View style={{flex:1, justifyContent: 'center',alignItems:'center'}}>
                                <Text style={{fontWeight:"600",justifyContent: 'center',alignItems:'center' }}>
                                    {Moment(this.state.selectedDate, "ddd Do MMM YYYY").format('MMMM')}
                                </Text>
                            </View>
                            <TouchableHighlight onPress={this._onMonthNextButton}
                                                style={{ justifyContent: 'center', alignItems:'flex-end'}}>
                                <Icon name="angle-right" size={30} color="#acacac"/>
                            </TouchableHighlight>
                        </View>
                        <View style={{flex:1, flexDirection:'row', paddingHorizontal:10}}>
                            <TouchableHighlight onPress={this._onDayPrevButton}
                                                style={{ justifyContent: 'center'}}><Icon
                                name="angle-left" size={30} color="#acacac"/></TouchableHighlight>
                            <View style={{flex:1, justifyContent: 'center',alignItems:'center'}}>
                                <Text style={{fontWeight:"600",justifyContent: 'center',alignItems:'center' }}>
                                    {"" + this.state.selectedDate}
                                </Text>

                            </View>
                            <TouchableHighlight onPress={this._onDayNextButton}
                                                style={{ justifyContent: 'center', alignItems:'flex-end'}}>
                                <Icon name="angle-right" size={30} color="#acacac"/>
                            </TouchableHighlight>
                        </View>

                    </View>
                    <View style={{backgroundColor:'#ccc',height:1}}/>
                    <ListView dataSource={this.state.timeSlots}
                              renderRow={(rowData) => this.renderRow(rowData, navigator)}
                              renderSeparator={this._renderSeparator}

                        />


                    {this.renderFooter()}


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
        minHeight: 50,
    },
    column: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 5,

        minHeight: 50,
    },
    border: {
        borderColor: 'pink',
        borderWidth: 4
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 5,
        backgroundColor: '#f3f3f3',
        minHeight: 50,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 5,
        backgroundColor: '#f3f3f3',
        minHeight: 50,
    },
    text: {},
    box: {
        flexDirection: 'row', borderColor: 'rgb(234,234,235)', borderWidth: 1, shadowColor: "#000000",
        shadowOpacity: 0.3,
        shadowRadius: 1,
        shadowOffset: {
            height: 1,
            width: 0
        }
    },
    line: {
        flex: 1,
        backgroundColor: '#ccc',
        height: 1,
    },
    scrollbody: {
        flex: 1,
        padding:20,
        backgroundColor: '#fff',
    }
});

AppRegistry.registerComponent('USFTest', () => App);
