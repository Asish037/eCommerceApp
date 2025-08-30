import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header';
import { useNavigation } from '@react-navigation/native';

const PaymentMethod = ({ route }) => {
  const { selectedPaymentMethod, total } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Payment Method</Text>
        <Text style={styles.subtitle}>Selected Payment Method: {selectedPaymentMethod}</Text>
        <Text style={styles.subtitle}>Total Amount: ${total}</Text>
        <View style={styles.buttonContainer}>
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
      </View>
    </View>
  )
}

export default PaymentMethod

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#353333ff',
  },
  buttonContainer: {
    marginTop: 20,
  },
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