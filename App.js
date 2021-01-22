import React, {useEffect} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import PushNotification from 'react-native-push-notification';
import {showNotification, handleCancel, handleScheduledNotification} from './src/notification.android'


const App = () => {
  useEffect(() => {
    PushNotification.createChannel(
      {
        channelId: 'notif',
        channelName: 'My Notification channel',
        channelDescription: 'A channel to categories your notification',
        soundName: 'default',
        importance: 4,
        vibrate: true,
      },
      (created) => console.log(`createchannel returned '${created}'`),
    );
    // code to run on component mount
  }, []);

  useEffect(() => {
    PushNotification.getChannels((channel_ids) => {
      console.log(channel_ids);
    });
  }, []);

  const channel = 'notif';


  return (
    <View style={styles.container}>
      <Text>Push Notification</Text>
     <TouchableOpacity style={styles.btn} onPress={() => showNotification('Blanja', 'Jangan lupa melakukan pembayaran yaa, ingat selalu belanja di BLANJA ', channel)}>
       <Text style={{color: 'white'}}>click to get notification</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.btn} onPress={() => handleScheduledNotification('hello', 'show me after 5 second', channel)}>
       <Text style={{color: 'white', textAlign: 'center'}}>click to get notification Schedule</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.btn} onPress={handleCancel}>
       <Text style={{color: 'white'}}>click to cancle notification</Text>
     </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  btn: {
    height: 50, 
    width: 200, 
    backgroundColor: 'blue', 
    borderRadius: 10, 
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 20
  }
})

export default App
