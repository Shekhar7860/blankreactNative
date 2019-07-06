/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
// var PushNotification = require('react-native-push-notification');
import DateTimePicker from 'react-native-modal-datetime-picker'
import {Platform, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Moment from 'moment';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



 

export default class App extends Component {

  constructor(props) {
    super(props);
   
    this.state = { 
       userResponse: {},
       title:'',
       description:'',
       loading: false,
       isDateTimePickerVisible: false,
       isDateTimePickerVisible2: false,
       startDateText : 'Start Date',
       endDateText : 'End Date'
      }
     
      
  }

  componentDidMount(){
    // alert("muy app")
  console.log(new Date(Date.now()), 'date')
    
}
_handleDatePicked = (date) => {
  console.log("date1", date);
  var newDate = Moment(date).format('YYYY-MM-DD');
  var secondDate =  Moment(newDate).format('DD/MM/YYYY');
  this.setState({ ddformatDate:secondDate})
  this.setState({ startDateText:newDate})
  this._hideDateTimePicker();
};

_showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

_showDateTimePicker2 = () => this.setState({ isDateTimePickerVisible2: true });

_hideDateTimePicker2 = () => this.setState({ isDateTimePickerVisible2: false });

_handleDatePicked2 = (date) => {
  console.log(date, 'time');
  var time =  Moment(date).format("HH:mm:ss");
  console.log('mytime', time)
  var newDate = Moment(date).format('YYYY-MM-DD');
  var secondDate =  Moment(newDate).format('DD/MM/YYYY');
  this.setState({ ddformatDate2:secondDate})
  this.setState({ endDateText:time})
  this._hideDateTimePicker2();
};

scheduleNotification = () => {
  let selectedDateAndTime = Moment(this.state.startDateText + " " + this.state.endDateText).toDate();
      console.log(selectedDateAndTime, 'selectedDate')
  // PushNotification.localNotificationSchedule({
  //   //... You can use all the options from localNotifications
  //   message: "Notification Triggered", // (required)
  //   date: selectedDateAndTime, // in 60 secs,
  //   playSound: true, // (optional) default: true
  //   soundName: 'default'
  // });
  
  
}
 



  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome  React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button title="Create Notifications" onPress ={ () => this.scheduleNotification() }></Button>
        <View style={{ flexDirection: "row", marginRight:'3%', marginTop:10 }}>
                  <TouchableOpacity onPress={this._showDateTimePicker} style={styles.postprojectinputArabic}>
                  <Text style={styles.dateTextColor}>{this.state.startDateText}</Text>
                </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", marginRight:'3%', marginTop:10 }}>
          <TouchableOpacity onPress={this._showDateTimePicker2} style={styles.postprojectinputArabic}>
                  <Text style={styles.dateTextColor}>{this.state.endDateText}</Text>
                </TouchableOpacity>
           </View>
         
          <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          minimumDate={new Date()}
        />
         <DateTimePicker
          mode = 'time'
          isVisible={this.state.isDateTimePickerVisible2}
          onConfirm={this._handleDatePicked2}
          onCancel={this._hideDateTimePicker2}
          minimumDate={new Date()}
        />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  postprojectinput: {
    marginBottom:10,
    marginLeft: 10,
    height: 40,
    borderColor: '#AEA9A8',
    borderWidth: 1,
    padding:5,
    width:'95%'
    },
    dateTextColor :{
      color : '#AEA9A8',
      padding :4
    }
});
