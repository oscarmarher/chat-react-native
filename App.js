import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { WebView } from 'react-native-webview';

const App = () => {
  useEffect(() => {
    const unsuscribe = messaging().onMessage(async remoteMessage => {
      console.log('NEW MESSAGE', remoteMessage);
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
  }, []);

  return (
    <WebView
      source={{
        uri: 'https://chat.magister.com'
      }}
    />
  );
}

export default App;
