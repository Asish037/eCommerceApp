<<<<<<< HEAD
import React, { useContext } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../Components/axios';

import Header from '../Components/Header';
import CartCard from '../Components/CartCard';
import { CartContext } from '../Context/CartContext';
import { fonts } from '../utils/fonts';
import { FONTS } from '../Constant/Font';
import { COLORS } from '../Constant/Colors';

const CartScreen = () => {
  const { cartItems, deleteCartItem, totalPrice } = useContext(CartContext);
  const navigation = useNavigation();

  // constants for totals
  const shippingCost = 0.0;
  const grandTotal = (parseFloat(totalPrice) + shippingCost).toFixed(2);

  const handleCheckout = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (!token) {
        Alert.alert('Error', 'No auth token found. Please log in again.');
        return;
      }

      if (cartItems.length === 0) {
        Alert.alert(
          'Cart is Empty',
          'Please add items to your cart before proceeding.'
        );
        return;
      }

      const payload = {
        items: cartItems.map(item => ({
          product_id: item.id, // adjust if backend expects productId
          quantity: item.quantity,
          price: item.price,
        })),
        subtotal: totalPrice,
        shipping: shippingCost,
        total: grandTotal,
      };

      console.log('Checkout payload:', payload);

      const response = await axios.post('/add-cart', payload, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Add to cart response:', response.data);

      if (response.status === 200) {
        navigation.navigate('Payment', { grandTotal, cartItems });
      } else {
        Alert.alert(
          'Checkout Error',
          response.data.message || 'Something went wrong on the server.'
        );
      }
    } catch (error) {
      console.error('Error during checkout:', error);
      Alert.alert('Error', 'Checkout failed. Please try again.');
    }
  };

  const handleDeleteItem = async itemId => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (!token) {
        Alert.alert('Error', 'No authentication token found. Please log in.');
        return;
      }

      const response = await axios.delete(`/delete-cart?cartId=${itemId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        deleteCartItem(itemId);
        Alert.alert('Success', 'Item removed from cart.');
      } else {
        Alert.alert(
          'Deletion Failed',
          response.data.message || 'Could not remove item.'
        );
      }
    } catch (error) {
      console.error('Error deleting cart item:', error);
      Alert.alert('Error', 'Failed to remove item. Please try again.');
    }
  };

=======
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../Components/Header';
import CartCard from '../Components/CartCard';
import {fonts} from '../utils/fonts';
import {CartContext} from '../Context/CartContext';
import {COLORS} from '../Constant/Colors';
import {FONTS} from '../Constant/Font';
import {useNavigation} from '@react-navigation/native';

const CartScreen = () => {
  const {cartItems, deleteCartItem, totalPrice} = useContext(CartContext);
  const navigation = useNavigation();

  const handleDeleteItem = async id => {
    await deleteCartItem(id);
  };

  const shippingCost = 0.0;
  const grandTotal = (parseFloat(totalPrice) + shippingCost).toFixed(2);

>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  return (
    <View style={styles.container}>
      <LinearGradient colors={COLORS.gradient} style={styles.gradientContainer}>
        <View style={styles.header}>
          <Header isCart={true} />
        </View>
<<<<<<< HEAD

        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
=======
        <FlatList
          data={cartItems}
          renderItem={({item}) => (
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
            <CartCard item={item} handleDelete={handleDeleteItem} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 20,
            paddingBottom: 20,
            paddingHorizontal: 16,
          }}
          keyExtractor={item => item.id.toString()}
        />
      </LinearGradient>
<<<<<<< HEAD

      {/* Bottom Total Section */}
=======
      {/* separator */}
      {/* <View style={styles.separator} /> */}

      {/* Bottom Total Section with White Background */}
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
      <View style={styles.bottomContainer}>
        <View style={styles.totalSection}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Subtotal:</Text>
            <Text style={styles.totalValue}>${totalPrice}</Text>
          </View>
<<<<<<< HEAD

=======
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Shipping:</Text>
            <Text style={styles.totalValue}>
              {shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}
            </Text>
          </View>
<<<<<<< HEAD

          <View style={styles.divider} />

=======
          <View style={styles.divider} />
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
          <View style={styles.totalRow}>
            <Text style={styles.grandTotalLabel}>Total:</Text>
            <Text style={styles.grandTotalValue}>${grandTotal}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.checkoutButton}
<<<<<<< HEAD
          onPress={handleCheckout}>
=======
          onPress={() =>
            navigation.navigate('Payment', {grandTotal, cartItems})
          }>
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
  },
  gradientContainer: {
    flex: 1,
    paddingTop: 5,
  },
  header: {
    paddingHorizontal: 15,
  },
  bottomContainer: {
    backgroundColor: COLORS.white,
    height: 260,
    paddingHorizontal: 15,
    paddingTop: 24,
    paddingBottom: 34,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: -4 },
=======
    // padding: 16,
    marginBottom: 16,
  },
  gradientContainer: {
    flex: 1,
    padding: 15,
  },
  header: {
    // paddingHorizontal: 15,
  },
  bottomContainer: {
    backgroundColor: '#A40606',
    // borderTopLeftRadius: 50,
    // borderTopRightRadius: 50,
    height: 240,
    paddingHorizontal: 15,
    paddingTop: 24,
    paddingBottom: 34,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
    borderTopWidth: 1,
<<<<<<< HEAD
    borderColor: '#ddbbbbff',
=======
    borderColor: '#ff9a2dff',
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  },
  totalSection: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  totalLabel: {
    fontSize: 16,
<<<<<<< HEAD
    color: '#1f0303ff',
    fontWeight: '500',
=======
    color: COLORS.text,
    fontWeight: '600',
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
    fontFamily: fonts.regular,
    letterSpacing: 0.5,
  },
  totalValue: {
    fontSize: 16,
<<<<<<< HEAD
    color: '#2C2C2C',
=======
    color: COLORS.text,
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
    fontWeight: '600',
    fontFamily: fonts.medium,
  },
  divider: {
    borderWidth: 0.5,
    borderColor: '#a54848ff',
    marginVertical: 12,
  },
  grandTotalLabel: {
    fontSize: 18,
<<<<<<< HEAD
    color: '#2C2C2C',
=======
    color: COLORS.text,
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
    fontWeight: '700',
    fontFamily: fonts.medium,
  },
  grandTotalValue: {
    fontSize: 20,
<<<<<<< HEAD
    color: '#E94560',
=======
    color: COLORS.button,
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
    fontWeight: '700',
    fontFamily: fonts.medium,
  },
  checkoutButton: {
    backgroundColor: COLORS.button,
<<<<<<< HEAD
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    shadowColor: '#E94560',
    shadowOffset: { width: 0, height: 4 },
=======
    height: 50,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    shadowColor: '#E94560',
    shadowOffset: {
      width: 0,
      height: 4,
    },
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  checkoutButtonText: {
<<<<<<< HEAD
    fontSize: 18,
=======
    fontSize: 17,
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
    color: '#FFFFFF',
    fontWeight: '700',
    fontFamily: fonts.medium,
  },
});
