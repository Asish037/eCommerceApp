import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Header} from 'react-native/Libraries/NewAppScreen';

import Landing from './src/Screens/Auth/Landing';
import AuthStack from './src/Navigation/AuthStack';
import Register from './src/Screens/Auth/Register';
import Otp from './src/Screens/Auth/Otp';

// import LoginScreen from './src/Screens/Auth/LoginScreen';
// import ForgotPasswordScreen from './src/Screens/Auth/ForgotPasswordScreen';
// import EmailScreen from './src/Screens/Auth/EmailScreen';
// Tab Screens
import HomeScreen from './src/Screens/HomeScreen';
import CategoriesScreen from './src/Screens/CategoriesScreen';
import CartScreen from './src/Screens/CartScreen';
import AccountScreen from './src/Screens/AccountScreen';

import Orders from './src/Screens/Orders';
import OrderDetails from './src/Screens/OrderDetails';

import BottomTab from './src/Navigation/BottomTab';
import CircularLoader from './src/Components/CircularLoader';

import MyWishList from './src/Screens/MyWishList';
import ProductDetailsScreen from './src/Screens/ProductDetailsScreen';
import ProfileSettings from './src/Screens/ProfileSettings';
import EditProfile from './src/Screens/EditProfile';
import Settings from './src/Screens/Settings';


import EditAddress from './src/Screens/EditAddress';
import AddressScreen from './src/Screens/AddressScreen';
import Privacy from './src/Screens/Privacy';
import AccountDelete from './src/Screens/AccountDelete';
import HelpCenter from './src/Screens/HelpCenter';
import MyCoupons from './src/Screens/MyCoupons';
import MenuDrawer from './src/Screens/MenuDrawer';
import PaymentScreen from './src/Screens/PaymentScreen';
import PaymentMethod from './src/Screens/PaymentMethod';
import OrderConfirm from './src/Screens/OrderConfirm';
import ConfirmOrder from './src/Screens/ConfirmOrder';
import SubCategoriesScreen from './src/Screens/SubCategoriesScreen';


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
      // initialRouteName={'AuthStack'}
      initialRouteName={'MainHome'}
      headerMode="none"
      //screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="AuthStack"
        component={AuthStack}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="MainHome"
        component={BottomTab}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Email"
        component={EmailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={() => ({
          title: 'My Orders',
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={() => ({
          title: 'Categories',
        })}
      />
      <Stack.Screen
        name="SubCategories"
        component={SubCategoriesScreen}
        options={() => ({
          title: 'Sub Categories',
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="OrderDetails"
        component={OrderDetails}
        options={() => ({
          // title: 'Details',
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="MenuDrawer"
        component={MenuDrawer}
        options={() => ({
          title: 'Menu',
          headerShown: false, 
        })}
      />
      <Stack.Screen
        name="MyWishList"
        component={MyWishList}
        options={() => ({
          // title: 'My wishlist',
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="PRODUCT_DETAILS"
        component={ProductDetailsScreen}
        options={() => ({
          title: 'My Products',
          headerShown: false,
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
          headerShown: false,

        })}
      />
      <Stack.Screen
        name="ConfirmOrder"
        component={ConfirmOrder}
        options={() => ({
          title: 'Confirm Order',
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={() => ({
          title: 'Settings',
          headerShown: false,
        })}
      />  
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={() => ({
          title: 'Manage Your Account',
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="Payment"
        component={PaymentScreen}
        options={() => ({
          title: 'Payment',
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="PaymentMethod"
        component={PaymentMethod}
        options={() => ({
          title: 'Payment Method',
          headerShown: false,
        })}
      />  
      <Stack.Screen
        name="EditAddress"
        component={EditAddress}
        options={({route}) => ({title: route.params.pageTitle, headerShown: false})}
      />

      <Stack.Screen
        name="AddressScreen"
        component={AddressScreen}
        options={() => ({
          title: 'Manage Your Address',
          headerShown: false,

        })}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}

      />
      <Stack.Screen name="Otp" component={Otp} options={{headerShown: false}} />
      <Stack.Screen
        name="Privacy"
        component={Privacy}
        options={() => ({
          title: 'Terms AND Conditions',
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="AccountDelete"
        component={AccountDelete}
        options={() => ({
          title: '',
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="HelpCenter"
        component={HelpCenter}
        options={() => ({
          title: 'Help Center',
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="MyCoupons"
        component={MyCoupons}
        options={() => ({
          title: 'My Coupons',
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="OrderConfirm"
        component={OrderConfirm}
        options={() => ({
          title: 'Order Confirmation',
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
