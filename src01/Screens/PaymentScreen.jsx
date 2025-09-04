import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../Components/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../Constant/Colors';
import {FONTS} from '../Constant/Font';

const PaymentScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('cash');

  const total = route.params?.grandTotal || '0.00';
  const selectedAddress = route.params?.selectedAddress;
  const cartItems = route.params?.cartItems || [];

  const paymentMethods = [
    {id: 'cash', name: 'Cash', icon: '💵'},
    {id: 'credit', name: 'Credit Card', icon: '💳'},
    {id: 'debit', name: 'Debit Card', icon: '💳'},
    {id: 'UPI', name: 'UPI', icon: '🏦'},
  ];

  const renderPaymentMethod = method => (
    <TouchableOpacity
      key={method.id}
      style={[
        styles.paymentMethodCard,
        selectedPaymentMethod === method.id && styles.selectedPaymentMethod,
      ]}
      onPress={() => setSelectedPaymentMethod(method.id)}>
      <View style={styles.paymentMethodContent}>
        <Text style={styles.paymentMethodIcon}>{method.icon}</Text>
        <Text style={styles.paymentMethodText}>{method.name}</Text>
      </View>
      <View
        style={[
          styles.radioButton,
          selectedPaymentMethod === method.id && styles.radioButtonSelected,
        ]}
      />
    </TouchableOpacity>
  );

  return (
    <LinearGradient colors={COLORS.gradient} style={styles.gradientContainer}>
      <Header />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Header Title */}
        <View style={styles.headerSection}>
          <Text style={styles.screenTitle}>Payment Method</Text>
          <Text style={styles.screenSubtitle}>
            Choose your preferred payment option
          </Text>
        </View>

        {/* Order Summary Card */}
        <View style={styles.summaryCard}>
          <Text style={styles.cardTitle}>Order Summary</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal:</Text>
            <Text style={styles.summaryValue}>
              ${parseFloat(total).toFixed(2)}
            </Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Shipping:</Text>
            <Text style={styles.summaryValue}>Free</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.summaryRow}>
            <Text style={styles.totalLabel}>Total:</Text>
            <Text style={styles.totalValue}>
              ${parseFloat(total).toFixed(2)}
            </Text>
          </View>
        </View>

        {/* Payment Methods */}
        <View style={styles.paymentSection}>
          <Text style={styles.sectionTitle}>Select Payment Method</Text>
          {paymentMethods.map(renderPaymentMethod)}
        </View>

        {/* Address Section */}
        <View style={styles.addressSection}>
          <View style={styles.addressSectionHeader}>
            <Text style={styles.sectionTitle}>Delivery Address</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('AddressScreen', {
                  fromPayment: true,
                  grandTotal: total,
                  selectedAddress,
                })
              }>
              <Text style={styles.changeAddressText}>Change</Text>
            </TouchableOpacity>
          </View>

          {selectedAddress ? (
            <View style={styles.selectedAddressCard}>
              <View style={styles.addressHeader}>
                <MaterialIcons
                  name={selectedAddress.type === 'Home' ? 'home' : 'business'}
                  size={20}
                  color={COLORS.button}
                />
                <Text style={styles.addressType}>{selectedAddress.type}</Text>
                {selectedAddress.isDefault && (
                  <View style={styles.defaultBadge}>
                    <Text style={styles.defaultBadgeText}>Default</Text>
                  </View>
                )}
              </View>
              <Text style={styles.addressContactName}>
                {selectedAddress.contactName}
              </Text>
              <Text style={styles.addressLine}>
                {selectedAddress.addressLine1}
              </Text>
              <Text style={styles.addressLine}>
                {selectedAddress.addressLine2}
              </Text>
              <Text style={styles.addressPhone}>
                {selectedAddress.phoneNumber}
              </Text>
            </View>
          ) : (
            <TouchableOpacity
              style={styles.addressButton}
              onPress={() =>
                navigation.navigate('AddressScreen', {
                  fromPayment: true,
                  grandTotal: total,
                })
              }>
              <Text style={styles.addressButtonText}>
                📍 Select Delivery Address
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>

      {/* Bottom Action Button */}
      <View style={styles.bottomSection}>
        <View style={styles.payButton}>
          <TouchableOpacity
            style={styles.payButtonTouchable}
            onPress={() => {
              // Handle payment processing
              navigation.navigate('ConfirmOrder', {
                selectedPaymentMethod,
                total,
                cartItems,
              });
              console.log('Processing payment with:', selectedPaymentMethod);
              // You can add payment processing logic here
            }}>
            <Text style={styles.payButtonText}>
              Pay ${parseFloat(total).toFixed(2)}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    padding: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
  },
  headerSection: {
    marginTop: 10,
    marginBottom: 15,
  },
  screenTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: COLORS.text,
    fontFamily: FONTS.Bold,
    marginBottom: 5,
  },
  screenSubtitle: {
    fontSize: 14,
    // color: COLORS.grey,
    color: COLORS.subtext,
    fontFamily: FONTS.Regular,
  },

  // Order Summary Card
  summaryCard: {
    backgroundColor: COLORS.card,
    borderRadius: 15,
    padding: 20,
    marginBottom: 25,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
    fontFamily: FONTS.Bold,
    marginBottom: 15,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  summaryLabel: {
    fontSize: 16,
    color: COLORS.subtext,
    fontFamily: FONTS.Regular,
  },
  summaryValue: {
    fontSize: 16,
    color: COLORS.text,
    fontFamily: FONTS.Medium,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.lightgray,
    marginVertical: 10,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    fontFamily: FONTS.Bold,
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.button,
    fontFamily: FONTS.Bold,
  },

  // Payment Methods Section
  paymentSection: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
    fontFamily: FONTS.Bold,
    marginBottom: 15,
  },
  paymentMethodCard: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectedPaymentMethod: {
    borderColor: 'transparent',
    backgroundColor: '#A40606',
    // shadowColor: "#000",
  },
  paymentMethodContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  paymentMethodIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  paymentMethodText: {
    fontSize: 15,
    color: COLORS.text,
    fontFamily: FONTS.Medium,
    flex: 1,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#171010ff',
    position: 'absolute',
    right: 15,
    top: 15,
  },
  radioButtonSelected: {
    borderColor: 'grey',
    backgroundColor: '#171010ff',
  },

  // Address Section
  addressSection: {
    marginBottom: 20,
  },
  addressSectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  changeAddressText: {
    color: COLORS.text,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: FONTS.Medium,
  },
  selectedAddressCard: {
    backgroundColor: COLORS.button,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.button,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  addressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  addressType: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.button,
    marginLeft: 8,
    fontFamily: FONTS.Medium,
  },
  defaultBadge: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 8,
  },
  defaultBadgeText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: '500',
    fontFamily: FONTS.Medium,
  },
  addressContactName: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
    fontFamily: FONTS.Medium,
    marginBottom: 4,
  },
  addressLine: {
    fontSize: 14,
    color: COLORS.subtext,
    fontFamily: FONTS.Regular,
    lineHeight: 20,
    marginBottom: 2,
  },
  addressPhone: {
    fontSize: 14,
    color: COLORS.subtext,
    fontFamily: FONTS.Regular,
    marginTop: 4,
  },
  addressButton: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 15,
    borderWidth: 1,
    borderColor: COLORS.button,
    shadowColor: COLORS.text,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  addressButtonText: {
    fontSize: 16,
    // color: COLORS.theme,
    fontFamily: FONTS.Medium,
    textAlign: 'center',
  },

  // Bottom Section
  bottomSection: {
    backgroundColor: COLORS.card,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    shadowColor: COLORS.button,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  payButton: {
    borderRadius: 15,
    overflow: 'hidden',
  },
  payButtonTouchable: {
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  payButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    // color: COLORS.white,
    fontFamily: FONTS.Bold,
  },
});
