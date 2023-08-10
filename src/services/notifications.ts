import messaging from '@react-native-firebase/messaging';

export const notificationListener = () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    // Handle app opened from background state
  });

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        // Handle app opened from quit state
      }
    });

  messaging().onMessage(async remoteMessage => {
    // Handle app already open
  });
};
