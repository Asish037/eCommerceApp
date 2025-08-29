import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header';
import { useNavigation } from '@react-navigation/native';

const PaymentMethod = ({ route }) => {
  const { selectedPaymentMethod, total } = route.params;
  const navigation = useNavigation();

  return (
    <View>
      <Header />
      <Text>PaymentMethod</Text>
      <Text>Selected Payment Method: {selectedPaymentMethod}</Text>
      <Text>Total Amount: ${total}</Text>
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => {
          navigation.navigate('OrderConfirm', {
            selectedPaymentMethod,
            total,
          });
          // Handle confirmation logic here
        }}>
        <Text style={styles.confirmButtonText}>Confirm Payment</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PaymentMethod

const styles = StyleSheet.create({
  confirmButton: {
    backgroundColor: '#007BFF',
    padding: 12,
    width: '90%',
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  confirmButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
})