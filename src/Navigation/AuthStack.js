import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Landing from '../Screens/Auth/Landing';
import PhoneNumber from '../Screens/Auth/PhoneNumber';
import Register from '../Screens/Auth/Register';
import Password from '../Screens/Auth/Password';
import Login from '../Screens/Auth/LoginScreen';
import {COLORS} from '../Constant/Colors';
import Email from '../Screens/Auth/EmailScreen';
import ForgotPassword from '../Screens/Auth/ForgotPasswordScreen';
import UploadPic from '../Screens/Auth/UploadPic';
import Preference from '../Screens/Auth/Preference';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {backgroundColor: COLORS.button},
        gestureEnabled: true,
        backgroundColor: COLORS.button,
        gestureDirection: 'horizontal',
        // ...TransitionPresets.FadeFromBottomAndroid,
        ...TransitionPresets.SlideFromRightIOS,
      }}
      initialRouteName="PhoneNumber"
      headerMode="none">
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Password" component={Password} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Email" component={Email} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="UploadPic" component={UploadPic} />
      <Stack.Screen name="Preference" component={Preference} />
    </Stack.Navigator>
  );
}
