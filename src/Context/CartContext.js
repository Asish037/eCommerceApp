import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useEffect, useState, useContext} from 'react';
import {Text} from 'react-native';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await loadUserData();
      await loadMessages();
      await loadCartItems();
      setIsLoading(false);
    };

    loadData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const loadUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };

  const loadMessages = async () => {
    try {
      const storedMessages = await AsyncStorage.getItem('messages');
      if (storedMessages) {
        setMessages(JSON.parse(storedMessages));
      }
    } catch (error) {
      console.error('Error loading messages:', error);
    }
  };

  const login = async userData => {
    setUser(userData);
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  const logout = async () => {
    setUser(null);
    try {
      await AsyncStorage.removeItem('userData');
    } catch (error) {
      console.error('Error removing user data:', error);
    }
  };

  const saveMessage = async (roomName, messageData) => {
    const updatedMessages = {
      ...messages,
      [roomName]: [...(messages[roomName] || []), messageData],
    };
    setMessages(updatedMessages);
    try {
      await AsyncStorage.setItem('messages', JSON.stringify(updatedMessages));
    } catch (error) {
      console.error('Error saving messages:', error);
    }
  };

  const loadCartItems = async () => {
    let cartItems = await AsyncStorage.getItem('cart');
    cartItems = cartItems ? JSON.parse(cartItems) : [];

    // Ensure all items have a quantity property
    cartItems = cartItems.map(item => ({
      ...item,
      quantity: item.quantity || 1,
    }));

    setCartItems(cartItems);
    calculateTotalPrice(cartItems);

    // Save back to AsyncStorage with quantity property
    await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
  };

  const addToCartItem = async item => {
    let cartItems = await AsyncStorage.getItem('cart');
    cartItems = cartItems ? JSON.parse(cartItems) : [];
    let isExist = cartItems.findIndex(cart => cart.id === item.id);
    if (isExist === -1) {
      cartItems.push({...item, quantity: 1});
      calculateTotalPrice(cartItems);
      setCartItems(cartItems);
      await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
    }
  };

  const deleteCartItem = async id => {
    let cartItems = await AsyncStorage.getItem('cart');
    cartItems = cartItems ? JSON.parse(cartItems) : [];
    cartItems = cartItems.filter(item => item.id !== id);
    setCartItems(cartItems);
    calculateTotalPrice(cartItems);
    await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
  };

  const updateCartItemQuantity = async (id, newQuantity) => {
    if (newQuantity < 1) return;

    let cartItems = await AsyncStorage.getItem('cart');
    cartItems = cartItems ? JSON.parse(cartItems) : [];

    const updatedCartItems = cartItems.map(item =>
      item.id === id ? {...item, quantity: newQuantity} : item,
    );

    setCartItems(updatedCartItems);
    calculateTotalPrice(updatedCartItems);
    await AsyncStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const calculateTotalPrice = cartItems => {
    let totalSum = cartItems.reduce((total, item) => {
      const quantity = item.quantity || 1;
      return total + item.price * quantity;
    }, 0);
    totalSum = totalSum.toFixed(2);
    setTotalPrice(totalSum);
  };

  if (isLoading) {
    return <Text>Loading...</Text>; // Or any loading indicator you prefer
  }

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
  };

  const value = {
    cartItems,
    addToCartItem,
    deleteCartItem,
    updateCartItemQuantity,
    totalPrice,
    getTotalQuantity,
    user,
    login,
    logout,
    loadUserData,
    saveMessage,
    messages,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const HotelContext = createContext();

export const HotelProvider = ({children}) => {
  const [hotelData, setHotelData] = useState({});

  const updateHotelData = newData => {
    setHotelData(prevData => ({...prevData, ...newData}));
  };

  return (
    <HotelContext.Provider value={{hotelData, updateHotelData}}>
      {children}
    </HotelContext.Provider>
  );
};

export const useHotel = () => {
  const context = useContext(HotelContext);
  if (context === undefined) {
    throw new Error('useHotel must be used within a HotelProvider');
  }
  return context;
};
