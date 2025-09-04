import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import messaging from '@react-native-firebase/messaging';
import notifee, { AndroidImportance } from '@notifee/react-native';
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

  } catch (error) {
    console.error('❌ Notification permission error:', error);
  }
};
