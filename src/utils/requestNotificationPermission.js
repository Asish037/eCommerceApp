import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import messaging from '@react-native-firebase/messaging';
<<<<<<< HEAD
=======
import notifee, { AndroidImportance } from '@notifee/react-native';
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform, Alert } from 'react-native';
 
export const requestNotificationPermission = async () => {
   try {
    console.log('Platform:', Platform.OS);
    console.log('Android Version:', Platform.Version);

    if (Platform.OS === 'android' && Platform.Version >= 33) {
      const result = await request('android.permission.POST_NOTIFICATIONS');

      if (result === RESULTS.GRANTED) {
        console.log('✅ POST_NOTIFICATIONS permission granted');
      } else {
        Alert.alert('❌ Notification permission denied or blocked');
        return;
      }
    } else {
      console.log('✅ No permission needed or unsupported platform');
      console.log('✅ Notification permission auto-granted (< Android 13)');
    }

    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (!enabled) {
      Alert.alert('❌ Firebase messaging permission denied');
      return;
    }

<<<<<<< HEAD
    // Register for remote messages (required for iOS)
    if (Platform.OS === 'ios') {
      await messaging().registerDeviceForRemoteMessages();
      // Wait a bit for APNS token to be available
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    // Try to get FCM token with retry mechanism
    let fcmToken = null;
    let retries = 3;
    
    while (retries > 0 && !fcmToken) {
      try {
        fcmToken = await messaging().getToken();
        if (fcmToken) {
          console.log('📲 FCM Token:', fcmToken);
          await AsyncStorage.setItem('fcmToken', fcmToken);
          break;
        }
      } catch (error) {
        console.log(`FCM token attempt ${4 - retries} failed:`, error.message);
        retries--;
        if (retries > 0) {
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      }
    }

    // Notification channel is already created in MainApplication.kt for Android
=======
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log('📲 FCM Token:', fcmToken);
      await AsyncStorage.setItem('fcmToken', fcmToken);
    }

    await notifee.createChannel({
      id: 'road-side',
      name: 'RoadSide Notifications',
      importance: AndroidImportance.HIGH,
    });
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd

  } catch (error) {
    console.error('❌ Notification permission error:', error);
  }
};
