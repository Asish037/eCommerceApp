import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Alert,
  TextInput,
  Animated,
  Keyboard,
} from 'react-native';
import {COLORS} from '../Constant/Colors';
import {FONTS} from '../Constant/Font';
import {moderateScale, verticalScale} from '../PixelRatio';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import GradientButton from '../Components/Button/GradientButton';
import Toast from 'react-native-simple-toast';
import {fonts} from '../utils/fonts';

const EditAddress = ({route}) => {
  const navigation = useNavigation();
  const addressData = route.params?.addressData;
  const fromAddressScreen = route.params?.fromAddressScreen;
  const pageTitle = route.params?.pageTitle || 'Edit Address';

  const [formData, setFormData] = useState({
    pincode: addressData?.pincode || '',
    houseNumber: addressData?.houseNumber || '',
    roadName: addressData?.roadName || '',
    contactName: addressData?.contactName || '',
    phoneNumber: addressData?.phoneNumber || '',
    addressType: addressData?.type || 'Home',
    isDefault: addressData?.isDefault || false,
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const fadeAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    // Animate screen entrance
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    // Keyboard listeners
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidHideListener?.remove();
      keyboardDidShowListener?.remove();
    };
  }, [fadeAnim]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = 'Please enter a valid 6-digit pincode';
    }

    if (!formData.houseNumber.trim()) {
      newErrors.houseNumber = 'House/Flat number is required';
    }

    if (!formData.roadName.trim()) {
      newErrors.roadName = 'Road/Area name is required';
    }

    if (!formData.contactName.trim()) {
      newErrors.contactName = 'Contact name is required';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const saveNewAddress = async () => {
    if (!validateForm()) {
      Toast.show('Please fill all required fields correctly!', Toast.SHORT);
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Create address object
      const addressObject = {
        id: addressData?.id || Date.now().toString(),
        type: formData.addressType,
        contactName: formData.contactName,
        addressLine1: `${formData.houseNumber}, ${formData.roadName}`,
        addressLine2: `${formData.pincode}`,
        phoneNumber: formData.phoneNumber,
        pincode: formData.pincode,
        houseNumber: formData.houseNumber,
        roadName: formData.roadName,
        isDefault: formData.isDefault,
      };

      setIsLoading(false);

      if (addressData) {
        // Editing existing address
        Toast.show('Address updated successfully!', Toast.SHORT);
        if (fromAddressScreen) {
          navigation.navigate('AddressScreen', {
            updatedAddress: addressObject,
          });
        } else {
          navigation.goBack();
        }
      } else {
        // Adding new address
        Toast.show('Address added successfully!', Toast.SHORT);
        if (fromAddressScreen) {
          navigation.navigate('AddressScreen', {
            newAddress: addressObject,
          });
        } else {
          navigation.goBack();
        }
      }
    } catch (error) {
      setIsLoading(false);
      Alert.alert('Error', 'Failed to save address. Please try again.');
    }
  };

  const CustomHeader = () => (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color={COLORS.white} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{pageTitle}</Text>
      <View style={styles.headerRightSpace} />
    </View>
  );

  const InputField = ({
    icon,
    label,
    placeholder,
    keyboardType,
    value,
    onChangeText,
    error,
  }) => (
    <View style={styles.inputContainer}>
      <View style={styles.inputWrapper}>
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={COLORS.gradientButton[1]}
          style={styles.inputIcon}
        />
        <View style={styles.inputFieldWrapper}>
          <Text style={styles.inputLabel}>{label}</Text>
          <TextInput
            style={styles.textInput}
            placeholder={placeholder}
            placeholderTextColor={COLORS.grey}
            keyboardType={keyboardType}
            value={value}
            onChangeText={onChangeText}
          />
        </View>
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        backgroundColor={COLORS.gradientButton[1]}
        barStyle="light-content"
      />
      <Animated.View style={[styles.animatedContainer, {opacity: fadeAnim}]}>
        <LinearGradient
          colors={['#f8f9fa', '#e9ecef']}
          style={styles.container}>
          <CustomHeader />

          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContentContainer}
            keyboardShouldPersistTaps="handled">
            <View style={styles.formContainer}>
              <View style={styles.sectionHeader}>
                <MaterialIcons
                  name="location-on"
                  size={24}
                  color={COLORS.gradientButton[1]}
                />
                <Text style={styles.sectionTitle}>Address Details</Text>
              </View>

              <InputField
                icon="map-marker-outline"
                label="Pincode"
                placeholder="Enter 6-digit pincode"
                keyboardType="numeric"
                value={formData.pincode}
                onChangeText={value => handleInputChange('pincode', value)}
                error={errors.pincode}
              />

              <InputField
                icon="home-outline"
                label="House/Flat/Building No."
                placeholder="Enter house/flat number"
                keyboardType="default"
                value={formData.houseNumber}
                onChangeText={value => handleInputChange('houseNumber', value)}
                error={errors.houseNumber}
              />

              <InputField
                icon="road"
                label="Road Name/Area/Colony"
                placeholder="Enter road name or area"
                keyboardType="default"
                value={formData.roadName}
                onChangeText={value => handleInputChange('roadName', value)}
                error={errors.roadName}
              />

              {/* Address Type Selector */}
              <View style={styles.addressTypeContainer}>
                <Text style={styles.sectionTitle}>Address Type</Text>
                <View style={styles.addressTypeButtons}>
                  {['Home', 'Office', 'Other'].map(type => (
                    <TouchableOpacity
                      key={type}
                      style={[
                        styles.addressTypeButton,
                        formData.addressType === type &&
                          styles.selectedAddressType,
                      ]}
                      onPress={() => handleInputChange('addressType', type)}>
                      <MaterialIcons
                        name={
                          type === 'Home'
                            ? 'home'
                            : type === 'Office'
                            ? 'business'
                            : 'location-on'
                        }
                        size={20}
                        color={
                          formData.addressType === type
                            ? COLORS.white
                            : COLORS.button
                        }
                      />
                      <Text
                        style={[
                          styles.addressTypeText,
                          formData.addressType === type &&
                            styles.selectedAddressTypeText,
                        ]}>
                        {type}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Default Address Toggle */}
              <TouchableOpacity
                style={styles.defaultToggleContainer}
                onPress={() =>
                  handleInputChange('isDefault', !formData.isDefault)
                }>
                <View style={styles.defaultToggleLeft}>
                  <MaterialIcons name="star" size={20} color={COLORS.button} />
                  <Text style={styles.defaultToggleText}>
                    Set as default address
                  </Text>
                </View>
                <View
                  style={[
                    styles.toggleSwitch,
                    formData.isDefault && styles.toggleSwitchActive,
                  ]}>
                  <View
                    style={[
                      styles.toggleIndicator,
                      formData.isDefault && styles.toggleIndicatorActive,
                    ]}
                  />
                </View>
              </TouchableOpacity>

              <View style={styles.sectionHeader}>
                <MaterialIcons
                  name="contact-phone"
                  size={24}
                  color={COLORS.gradientButton[1]}
                />
                <Text style={styles.sectionTitle}>Contact Information</Text>
              </View>

              <InputField
                icon="account-outline"
                label="Contact Name"
                placeholder="Enter contact person name"
                keyboardType="default"
                value={formData.contactName}
                onChangeText={value => handleInputChange('contactName', value)}
                error={errors.contactName}
              />

              <InputField
                icon="phone-outline"
                label="Phone Number"
                placeholder="Enter 10-digit phone number"
                keyboardType="phone-pad"
                value={formData.phoneNumber}
                onChangeText={value => handleInputChange('phoneNumber', value)}
                error={errors.phoneNumber}
              />
            </View>
          </ScrollView>

          <View
            style={[
              styles.buttonContainer,
              keyboardVisible && styles.buttonContainerKeyboard,
            ]}>
            <GradientButton
              title={isLoading ? 'Saving...' : 'Save Address'}
              onPress={saveNewAddress}
              disabled={isLoading}
              style={styles.saveButton}
            />
          </View>
        </LinearGradient>
      </Animated.View>
    </SafeAreaView>
  );
};

export default EditAddress;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.gradientButton[1],
  },
  animatedContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
    paddingVertical: verticalScale(15),
    backgroundColor: COLORS.gradientButton[1],
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  backButton: {
    padding: moderateScale(8),
    borderRadius: moderateScale(20),
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  headerTitle: {
    fontSize: moderateScale(18),
    fontWeight: '600',
    color: COLORS.white,
    fontFamily: fonts.medium,
  },
  headerRightSpace: {
    width: moderateScale(40),
  },
  scrollView: {
    flex: 1,
  },
  scrollContentContainer: {
    paddingBottom: verticalScale(100),
  },
  formContainer: {
    padding: moderateScale(20),
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(20),
    marginBottom: verticalScale(15),
    paddingBottom: verticalScale(10),
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gradientButton[1] + '30',
  },
  sectionTitle: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: COLORS.gradientButton[1],
    marginLeft: moderateScale(8),
    fontFamily: fonts.medium,
  },
  inputContainer: {
    marginBottom: verticalScale(20),
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: COLORS.white,
    borderRadius: moderateScale(12),
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(5),
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    borderWidth: 1,
    borderColor: COLORS.lightgray,
  },
  inputFieldWrapper: {
    flex: 1,
  },
  inputLabel: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: COLORS.gradientButton[1],
    marginBottom: verticalScale(5),
    fontFamily: fonts.medium,
  },
  textInput: {
    fontSize: moderateScale(14),
    color: COLORS.black,
    paddingVertical: verticalScale(8),
    paddingHorizontal: 0,
    fontFamily: fonts.regular,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightgray,
  },
  inputIcon: {
    marginRight: moderateScale(10),
  },
  errorText: {
    fontSize: moderateScale(12),
    color: COLORS.red,
    marginTop: verticalScale(5),
    marginLeft: moderateScale(15),
    fontFamily: fonts.regular,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.white,
    paddingHorizontal: moderateScale(20),
    paddingVertical: verticalScale(15),
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
  },
  saveButton: {
    width: '100%',
    borderRadius: moderateScale(12),
  },
  buttonContainerKeyboard: {
    paddingBottom: verticalScale(5),
  },
  addressTypeContainer: {
    marginBottom: verticalScale(20),
  },
  addressTypeButtons: {
    flexDirection: 'row',
    marginTop: verticalScale(10),
  },
  addressTypeButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: verticalScale(12),
    paddingHorizontal: moderateScale(16),
    marginRight: moderateScale(8),
    backgroundColor: COLORS.white,
    borderRadius: moderateScale(8),
    borderWidth: 1,
    borderColor: COLORS.button,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  selectedAddressType: {
    backgroundColor: COLORS.button,
  },
  addressTypeText: {
    fontSize: moderateScale(14),
    fontWeight: '500',
    color: COLORS.button,
    marginLeft: moderateScale(6),
    fontFamily: fonts.medium,
  },
  selectedAddressTypeText: {
    color: COLORS.white,
  },
  defaultToggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(15),
    paddingHorizontal: moderateScale(15),
    backgroundColor: COLORS.white,
    borderRadius: moderateScale(12),
    marginBottom: verticalScale(20),
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  defaultToggleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  defaultToggleText: {
    fontSize: moderateScale(16),
    fontWeight: '500',
    color: COLORS.black,
    marginLeft: moderateScale(8),
    fontFamily: fonts.medium,
  },
  toggleSwitch: {
    width: moderateScale(50),
    height: verticalScale(26),
    backgroundColor: '#ccc',
    borderRadius: moderateScale(13),
    justifyContent: 'center',
    paddingHorizontal: moderateScale(2),
  },
  toggleSwitchActive: {
    backgroundColor: COLORS.button,
  },
  toggleIndicator: {
    width: moderateScale(22),
    height: moderateScale(22),
    backgroundColor: COLORS.white,
    borderRadius: moderateScale(11),
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  toggleIndicatorActive: {
    transform: [{translateX: moderateScale(24)}],
  },
});
