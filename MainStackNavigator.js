import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/Screens/Auth/LoginScreen';
import ForgotPasswordScreen from './src/Screens/Auth/ForgotPasswordScreen';
import EmailScreen from './src/Screens/Auth/EmailScreen';
import Orders from './src/Screens/Orders';
import OrderDetails from './src/Screens/OrderDetails';
import BottomTab from './src/Navigation/BottomTab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CircularLoader from './src/Components/CircularLoader';
import MyWishList from './src/Screens/MyWishList';
import ProductDetailsScreen from './src/Screens/ProductDetailsScreen';
import CartScreen from './src/Screens/CartScreen';
import ProfileSettings from './src/Screens/ProfileSettings';
import EditProfile from './src/Screens/EditProfile';
import Register from './src/Screens/Auth/Register';
import EditAddress from './src/Screens/EditAddress';
import AddressScreen from './src/Screens/AddressScreen';
import Privacy from './src/Screens/Privacy';
import AccountDelete from './src/Screens/AccountDelete';
import { Header } from 'react-native/Libraries/NewAppScreen';
import HelpCenter from './src/Screens/HelpCenter';
import MyCoupons from './src/Screens/MyCoupons';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  const [token, setToken] = useState(null);

  // const getToken = async () => {
  //   try {
  //     const res = await AsyncStorage.getItem("accessToken");
  //     if (res) {
  //       console.log("Token found:", res);
  //       setToken(true);
  //     } else {
  //       setToken(false);
  //     }
  //   } catch (error) {
  //     console.log("Error getting token:", error);
  //     setToken(false);
  //   }
  // };

  // useEffect(() => {
  //   getToken();
  // }, []);

  // if (token === null) {
  //   return <CircularLoader />
  // }

  return (
    <Stack.Navigator
      initialRouteName={'Login'}
      headerMode="none"
      //screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainHome"
        component={BottomTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Email"
        component={EmailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={() => ({
          title: 'My Orders',
        })}
      />
      <Stack.Screen
        name="OrderDetails"
        component={OrderDetails}
        options={() => ({
          title: 'Details',
        })}
      />
      <Stack.Screen
        name="MyWishList"
        component={MyWishList}
        options={() => ({
          title: 'My wishlist',
        })}
      />
      <Stack.Screen
        name="PRODUCT_DETAILS"
        component={ProductDetailsScreen}
        options={() => ({
          title: 'My Products',
        })}
      />
      <Stack.Screen
        name="CART"
        component={CartScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileSettings"
        component={ProfileSettings}
        options={() => ({
          title: 'Profile Settings',
        })}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={() => ({
          title: 'Manage Your Account'
        })}
      />
      <Stack.Screen
        name="EditAddress"
        component={EditAddress}
        options={({ route }) => ({ title: route.params.pageTitle })}
      />
      
      <Stack.Screen
        name="AddressScreen"
        component={AddressScreen}
        options={() => ({
          title: 'Manage Your Address'
        })}
      />
      
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Privacy"
        component={Privacy}
        options={() => ({
          title: 'Terms AND Conditions'
        })}
      />
      <Stack.Screen
        name="AccountDelete"
        component={AccountDelete}
        options={() => ({
          title: ''
        })}
      />
      <Stack.Screen
        name="HelpCenter"
        component={HelpCenter}
        options={() => ({
          title: 'Help Center'
        })}
      />
       <Stack.Screen
        name="MyCoupons"
        component={MyCoupons}
        options={() => ({
          title: 'My Coupons'
        })}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
