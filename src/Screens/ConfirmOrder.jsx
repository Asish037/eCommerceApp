import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header';
import {useNavigation, useRoute} from '@react-navigation/native';

const ConfirmOrder = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const product = route.params?.product;
    const {selectedPaymentMethod,total = route.params?.total} = route.params;

    return (
        <View>
            <Header />
            <Text>Confirm Order</Text>
            {product && (
                <View>
                    <Text>Product Name: {product.name}</Text>
                    <Text>Product Price: {product.price}</Text>
                    <Text>Product Quantity: {product.quantity}</Text>
                    <Text>Payment Method: {selectedPaymentMethod}</Text>
                    <Text>Total Amount: {total}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('OrderConfirm')}>
                        <Text>Change Payment Method</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}

export default ConfirmOrder

const styles = StyleSheet.create({})