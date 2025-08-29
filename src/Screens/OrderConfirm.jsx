import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const OrderConfirm = () => {
  const navigation = useNavigation();

    return (
        <LinearGradient
        colors={['#e3e3e3ff', '#c3adb1ff']}
        style={styles.container}>
        {/* <Header /> */}
            <View style={styles.content}>
                <Text style={styles.title}>Order Successful!!</Text>
                <Text style={styles.subtitle}>Your order has been placed successfully. Waita and it will be delivered soon.</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('MainHome')}
                        style={styles.button1}>
                        <Text style={styles.buttonText}>Keep Shopping</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Orders')}
                        style={styles.button2}>
                        <Text style={styles.buttonText}>View our orders</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
};

export default OrderConfirm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 30,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '80%',
    },
    button1: {
        backgroundColor: '#007BFF',
        padding: 12,
        borderRadius: 5,
        marginVertical: 10,
    },
    button2: {
        backgroundColor: '#28a745',
        padding: 12,
        borderRadius: 5,
        marginVertical: 10,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
    },
});
