import React, { useEffect, useState } from 'react';
import { ActivityIndicator, PermissionsAndroid, Platform } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { CartContext, CartProvider } from "./src/Context/CartContext";
import MainStackNavigator from './MainStackNavigator';;
import { NavigationContainer } from '@react-navigation/native';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
     <Provider store={store}>
      <CartProvider>
        <NavigationContainer fallback={<ActivityIndicator animating />}>
          <MainStackNavigator />
        </NavigationContainer>
      </CartProvider>
     </Provider>
  );
}

export default App;