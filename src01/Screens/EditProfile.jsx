import React, {useState,useEffect, useContext} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StatusBar,
  Animated,
} from 'react-native';
import {COLORS} from '../Constant/Colors';
import {FONTS} from '../Constant/Font';
import {moderateScale, verticalScale} from '../PixelRatio';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import GradientButton from '../Components/Button/GradientButton';
import Toast from 'react-native-simple-toast';
import CustomInput from '../Components/CustomInput';
import Header from '../Components/Header';
import {CartContext} from '../Context/CartContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfile = () => {
  const navigation = useNavigation();

  const {user, login} = useContext(CartContext);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [email, setemail] = useState(
    user?.email || 'zerodegreecoder@gmail.com',
  );
  const [mobileNumber, setMobileNumber] = useState(
    user?.mobileNumber || '9876543209',
  );
  const [fullname, SetFullname] = useState(user?.fullname || 'John Henry');
  const [disabled, setdisabled] = useState(false);
  const [profileImageUri, setProfileImageUri] = useState(
    user?.profileImage ||
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE_5aeaS13y24e1D7KBOIPNUwGflPnLR8AuQQUQ6tHDnycRg_2woHNm3fX1K_UYtxizZw&usqp=CAU',
  );

  /*
  const {user, login} = useContext(CartContext);
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [profileImageUri, setProfileImageUri] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false) 
  */

  /*
  const fetchUserData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://api.example.com/user');
      const data = await response.json();

      if (response.ok) {
        console.log('User data fetched:', data);
        setFullName(data.fullname);
        setEmail(data.email);
        setMobileNumber(data.mobileNumber);
        setProfileImageUri(data.profileImage);
      } else {
        Toast.show(data.message || 'Failed to fetch user data');
        console.error('API Error:', data);
      }
    } catch (error) {
      Toast.show('An error occurred while fetching user data');
      console.error('Error fetching user data:', error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(()=>{
    if(user?.id){
      fetchUserData();
    }
    else{
      Toast.show('User not found');
    }

  }, [])

  */
  const saveDetails = async () => {

    if (!email || !mobileNumber || !fullname) {
      Toast.show('Please fill all required fields!');
      return;
    }


    // setIsSaving(true);
    // let data = {
    //   email: email,
    //   mobileNumber: mobileNumber,
    //   fullname: fullname,
    //   profileImage: profileImageUri,
    // };

    /*
    try{
      const response = await fetch('https://api.example.com/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

    if (response.ok) {
        // If API update is successful, also update local context and storage
        await AsyncStorage.setItem('userData', JSON.stringify(updatedUserData));
        await login(updatedUserData);
        Toast.show('Profile Updated Successfully!', Toast.LONG);
        setTimeout(() => {
          navigation.goBack();
        }, 1000);
      } else {
        const errorData = await response.json();
        Toast.show(`Failed to save profile: ${errorData.message}`);
        console.error('API Error:', errorData);
      }
    } catch (error) {
      Toast.show('Failed to save profile. Please try again.');
      console.error('Error saving profile:', error);
    }

    const handleImagePicker = () => {
    Toast.show('Image picker functionality to be implemented');
  };

  // Conditionally render a loading screen
  if (isLoading) {
    return (
      <LinearGradient colors={COLORS.gradient} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading Profile...</Text>
        </View>
      </LinearGradient>
    );
  }
    
    */

    setdisabled(true);
    let updatedUserData = {
      ...user,
      email: email,
      mobileNumber: mobileNumber,
      fullname: fullname,
      profileImage: profileImageUri,
    };

    try {
      // Save to AsyncStorage
      await AsyncStorage.setItem('userData', JSON.stringify(updatedUserData));

      // Update context
      await login(updatedUserData);

      setdisabled(false);
      Toast.show('Profile Updated Successfully!', Toast.LONG);

      // Navigate back or to main screen
      setTimeout(() => {
        navigation.goBack();
      }, 1000);
    } catch (error) {
      setdisabled(false);
      Toast.show('Failed to save profile. Please try again.');
      console.error('Error saving profile:', error);
    }
  };

  const handleImagePicker = () => {
    // Here you can add image picker logic
    Toast.show('Image picker functionality to be implemented');
  };

  return (
    <>
      {/* <StatusBar barStyle="light-content" backgroundColor="#bf284e" /> */}
      <LinearGradient colors={COLORS.gradient} style={styles.container}>
        <Header />

        {/* Profile Header Section */}
        <View style={styles.headerSection}>
          <View style={styles.profileInfo}>
            <View style={styles.greetingContainer}>
              <Text style={styles.greetingText}>Welcome back,</Text>
              <Text style={styles.userName}>{fullname || 'John Henry'}</Text>
              <Text style={styles.subText}>Let's update your profile</Text>
            </View>
          </View>

          <View style={styles.profileImageContainer}>
            <View style={styles.profileImageWrapper}>
              <Image
                source={{uri: profileImageUri}}
                style={styles.profileImage}
              />
              <LinearGradient
                colors={['rgba(194, 54, 54, 0.8)', 'rgba(194, 54, 54, 0.6)']}
                style={styles.imageOverlay}
              />
            </View>
            <TouchableOpacity
              style={styles.editImageButton}
              onPress={handleImagePicker}
              activeOpacity={0.8}>
              <LinearGradient
                colors={COLORS.gradientButton}
                style={styles.editImageGradient}>
                <Ionicons name="camera" color={COLORS.white} size={14} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        {/* Form Section */}
        <ScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>
          <View style={styles.formContainer}>
            <Text style={styles.sectionTitle}>Personal Information</Text>

            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <Text style={styles.inputLabel}>Full Name</Text>
                <View style={styles.inputFieldContainer}>
                  <MaterialCommunityIcons
                    name="account-outline"
                    size={25}
                    color={COLORS.button}
                    style={styles.inputIcon}
                  />
                  <TextInput
                    style={styles.textInput}
                    placeholder="Enter your full name"
                    placeholderTextColor="#a0a0a0"
                    value={fullname}
                    onChangeText={SetFullname}
                  />
                </View>
              </View>

              <View style={styles.inputWrapper}>
                <Text style={styles.inputLabel}>Email Address</Text>
                <View style={styles.inputFieldContainer}>
                  <MaterialCommunityIcons
                    name="email-outline"
                    size={25}
                    color={COLORS.button}
                    style={styles.inputIcon}
                  />
                  <TextInput
                    style={styles.textInput}
                    placeholder="Enter your email"
                    placeholderTextColor="#a0a0a0"
                    value={email}
                    onChangeText={setemail}
                    keyboardType="email-address"
                  />
                </View>
              </View>

              <View style={styles.inputWrapper}>
                <Text style={styles.inputLabel}>Mobile Number</Text>
                <View style={styles.inputFieldContainer}>
                  <MaterialCommunityIcons
                    name="phone-outline"
                    size={25}
                    color={COLORS.button}
                    style={styles.inputIcon}
                  />
                  <TextInput
                    style={styles.textInput}
                    placeholder="Enter your mobile number"
                    placeholderTextColor="#a0a0a0"
                    value={mobileNumber}
                    onChangeText={setMobileNumber}
                    keyboardType="phone-pad"
                  />
                </View>
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => navigation.goBack()}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.saveButton, disabled && styles.disabledButton]}
                onPress={saveDetails}
                disabled={disabled}
                activeOpacity={0.8}>
                <LinearGradient
                  colors={disabled ? ['#ccc', '#999'] : ['#ff8400ff', '#af5e07ff']}
                  style={styles.saveButtonGradient}>
                  <Text style={styles.saveButtonText}>
                    {disabled ? 'Saving...' : 'Save Changes'}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(10),
  },
  headerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(5),
    paddingVertical: verticalScale(15),
    marginHorizontal: moderateScale(10),
    marginTop: verticalScale(5),
    borderRadius: moderateScale(15),
  },
  profileInfo: {
    flex: 1,
  },
  greetingContainer: {
    marginRight: moderateScale(10),
    alignItems: 'flex-start', // Align text to the left
  },
  greetingText: {
    fontSize: moderateScale(20),
    // color: COLORS.grey,
    fontFamily: FONTS.Regular,
    marginBottom: verticalScale(1),
    color: COLORS.text,
  },
  userName: {
    fontSize: moderateScale(18),
    color: COLORS.black,
    fontFamily: FONTS.Bold,
    fontWeight: '700',
    marginBottom: verticalScale(2),
  },
  subText: {
    fontSize: moderateScale(12),
    color: COLORS.subtext,
    fontFamily: FONTS.Regular,
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImageWrapper: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(25),
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: COLORS.white,
    shadowColor: COLORS.button,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.1,
  },
  editImageButton: {
    position: 'absolute',
    bottom: -1,
    right: -1,
    width: moderateScale(20),
    height: moderateScale(20),
    borderRadius: moderateScale(10),
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: COLORS.white,
  },
  editImageGradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flex: 1,
    marginTop: verticalScale(10),
  },
  scrollContent: {
    paddingBottom: verticalScale(20),
  },
  formContainer: {
    marginHorizontal: moderateScale(4),
    borderRadius: moderateScale(15),
    padding: moderateScale(4),
  },
  sectionTitle: {
    fontSize: moderateScale(18),
    color: COLORS.black,
    fontFamily: FONTS.Bold,
    fontWeight: '600',
    marginBottom: verticalScale(15),
    textAlign: 'center',
    marginLeft: moderateScale(8),
  },
  inputContainer: {
    marginBottom: verticalScale(15),
    backgroundColor: 'transparent',
  },
  inputWrapper: {
    marginBottom: verticalScale(12),
  },
  inputLabel: {
    fontSize: moderateScale(12),
    color: COLORS.text,
    fontFamily: FONTS.Bold,
    fontWeight: '600',
    marginBottom: verticalScale(6),
    marginLeft: moderateScale(4),
  },
  inputFieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#f8f9fa',
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    paddingVertical: verticalScale(6),
    // borderWidth: 1,

    // borderColor: '#e9ecef',
    // paddingHorizontal: moderateScale(12),
    // height: verticalScale(40),
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.03,
    // shadowRadius: 2,
    // elevation: 1,
  },
  inputIcon: {
    marginRight: moderateScale(10),
    fontSize: moderateScale(20),
  },
  textInput: {
    height: 50,
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.gradientButton[1],
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    borderRadius: 8,
    fontSize: 16,
    color: COLORS.black,
    fontFamily: FONTS.Regular,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: moderateScale(10),
    marginTop: verticalScale(10),
  },
  cancelButton: {
    flex: 1,
    height: verticalScale(38),
    borderRadius: moderateScale(10),
    borderWidth: 2,
    borderColor: '#e67700ff',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  cancelButtonText: {
    fontSize: moderateScale(13),
    color: COLORS.button,
    fontFamily: FONTS.Bold,
    fontWeight: '700',
  },
  saveButton: {
    flex: 1,
    backgroundColor: COLORS.gradientButton[0],
    height: verticalScale(38),
    borderRadius: moderateScale(10),
    overflow: 'hidden',
    shadowColor: COLORS.button,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  disabledButton: {
    shadowOpacity: 0.1,
    elevation: 1,
  },
  saveButtonGradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: moderateScale(13),
    color: COLORS.white,
    fontFamily: FONTS.Bold,
    fontWeight: '600',
  },

  // Legacy styles (can be removed if not used elsewhere)
  hedaerUserName: {
    color: COLORS.black,
    fontFamily: FONTS.Bold,
    fontSize: moderateScale(25),
    fontWeight: '700',
  },
  headTitle: {
    color: COLORS.black,
    fontFamily: FONTS.title,
    fontSize: moderateScale(25),
    fontWeight: '700',
  },
  headSubTitle: {
    color: COLORS.grey,
    fontFamily: FONTS.LightItalic,
    fontSize: moderateScale(12),
    fontWeight: '400',
  },
  body: {
    alignItems: 'center',
    margin: 10,
  },
  isHighlighted: {
    borderColor: 'green',
  },
  editIcon: {
    position: 'absolute',
    top: 90,
    right: 30,
    height: 30,
    width: 30,
    backgroundColor: COLORS.white,
    borderColor: COLORS.button,
    borderWidth: 2,
    borderRadius: 15,
  },
  profilePicture: {
    borderRadius: 50,
    width: '100%',
    marginTop: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  picture: {
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 60,
    borderColor: COLORS.button,
    borderWidth: 2,
  },
  profileHeaderPicCircle: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    color: 'white',
    backgroundColor: COLORS.white,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 10,
  },
});
