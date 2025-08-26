import React, {useEffect} from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import GradientButton from '../../Components/Button/GradientButton';
import ImageWithTitle from '../../Components/Header/ImageWithTitle';
import {COLORS} from '../../Constant/Colors';
import {FONTS} from '../../Constant/Font';
import {moderateScale, verticalScale} from '../../PixelRatio';
import moment from 'moment';
//import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Toast from 'react-native-simple-toast';
// import Picker from '../../Components/DropDownPicker/Picker';
import CountryCityModal from '../../Components/Modal/CountryCityModal';
import {ETHNCITY_TYPE, GENDER} from '../../Constant/DATA';
//import Auth from '../../Service/Auth';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {ImageBackground} from 'react-native';
import model2 from '../../assets/model2.jpg';
import CustomInput from '../../Components/CustomInput';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const datet = new Date();

const year = datet.getFullYear();
const month = datet.getMonth();
const day = datet.getDate();

export default function Register() {
  const navigation = useNavigation();

  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // Define the registerUser function to handle registration logic
  const registerUser = () => {
    if (
      name == '' ||
      phone == '' ||
      email == '' ||
      password == ''
      // zip == '' ||
      // firstname == '' ||
      // lastname == ''
      // ||
      // gender == '' ||
      // Object.keys(city).length == 0 ||
      // dob == 'DOB' ||
      // ethncity == '' ||
      // Object.keys(states).length == 0
    ) {
      Toast.show('Please fill out all the required fields!');
      return;
    }

    let data = {
      // firstname: firstname,
      // lastname: lastname,
      // gender: gender,
      // dob: dateOfBirth,
      // zipcode: Number(zip),
      // ethncity: ethncity,
      // state: Object.keys(states).length > 0 ? states?.id : '',
      // city: Object.keys(city).length > 0 ? city?.id : '',
      name: name,
      phone: phone,
      email: email,
      password: password,
    };

    console.log('data', data);
    // return;

    navigation.navigate('Login', {data});
  };

  return (
    <ImageBackground source={model2} style={styles.bgImage} resizeMode="cover">
      {/* Stronger blur overlay for background, can use BlurView for real blur */}
      <View style={styles.blurOverlay} />
      <View style={styles.absoluteFill}>
        <View style={{flex: 1}}>
          <ScrollView
            style={{marginHorizontal: 0}}
            contentContainerStyle={{
              alignItems: 'flex-start',
              paddingTop: 24,
              paddingHorizontal: 18,
            }}
            showsVerticalScrollIndicator={false}>
            <View style={styles.body}>
              {/* Logo and title, smaller font, left aligned */}
              <Text style={styles.logoText}>
                <Text style={styles.logoBold}>Style</Text>ON
              </Text>
              <ImageWithTitle
                title="Create Account"
                style={styles.createTitle}
              />
              {/* All input fields and buttons wrapped in a single parent View, left aligned */}
              <View style={styles.formContainer}>
                {/* Name */}
                <View style={styles.inputFieldContainer}>
                  <CustomInput
                    label="Your Name"
                    placeholder="Name"
                    keyboardType="text"
                    onChangeText={text => setName(text)}
                    icon={
                      <MaterialCommunityIcons
                        name={'account'}
                        size={18} // smaller icon
                        color={COLORS.button}
                        style={styles.icon}
                      />
                    }
                    inputStyle={styles.inputStyle} // smaller font, left align
                    labelStyle={styles.labelStyle}
                  />
                </View>
                {/* Phone */}
                <View style={styles.inputFieldContainer}>
                  <CustomInput
                    label="Enter Phone Number"
                    placeholder="Enter Phone Number"
                    keyboardType="phone-pad"
                    onChangeText={text => setPhone(text)}
                    icon={
                      <MaterialCommunityIcons
                        name={'phone'}
                        size={18}
                        color={COLORS.button}
                        style={styles.icon}
                      />
                    }
                    inputStyle={styles.inputStyle}
                    labelStyle={styles.labelStyle}
                  />
                </View>
                {/* Email */}
                <View style={styles.inputFieldContainer}>
                  <CustomInput
                    label="Enter Email"
                    placeholder="Enter Email"
                    keyboardType="email-address"
                    onChangeText={text => setEmail(text)}
                    icon={
                      <MaterialCommunityIcons
                        name={'email-edit-outline'}
                        size={18}
                        color={COLORS.button}
                        style={styles.icon}
                      />
                    }
                    inputStyle={styles.inputStyle}
                    labelStyle={styles.labelStyle}
                  />
                </View>
                {/* Password */}
                <View style={styles.inputFieldContainer}>
                  <CustomInput
                    label="Enter Password"
                    placeholder="Enter Password"
                    keyboardType="password"
                    secureTextEntry={true}
                    type="password"
                    onChangeText={text => setPassword(text)}
                    icon={
                      <MaterialIcons
                        name={'lock'}
                        size={18}
                        color={COLORS.button}
                        style={styles.icon}
                      />
                    }
                    inputStyle={styles.inputStyle}
                    labelStyle={styles.labelStyle}
                  />
                </View>
                {/* Next Button */}
                <View style={styles.buttonContainer}>
                  <GradientButton
                    title="Next"
                    onPress={registerUser}
                    style={styles.gradientButton}
                    textStyle={styles.buttonText}
                  />
                </View>
                {/* Sign In Link, smaller font, left aligned */}
                <Text style={styles.signInPrompt}>
                  Already have an account?{' '}
                  <Text
                    onPress={() => navigation.navigate('Login')}
                    style={styles.signInText}>
                    Sign In
                  </Text>
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start', // push content to top
    alignItems: 'flex-start', // align to left
  },
  blurOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.62)', // Stronger blur effect
    zIndex: 1,
  },
  absoluteFill: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 2,
  },
  logoText: {
    fontSize: 20, // smaller font
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 4,
    marginTop: 0,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  logoBold: {
    color: 'red',
    fontWeight: '900',
  },
  createTitle: {
    fontSize: 14, // smaller font
    color: 'red',
    marginBottom: 10,
    alignSelf: 'flex-start',
    textAlign: 'left',
  },
  body: {
    alignItems: 'flex-start', // left align
    width: '100%',
    margin: 0,
    padding: 0,
  },
  formContainer: {
    width: '100%',
    alignItems: 'flex-start',
    marginTop: 5,
  },
  inputFieldContainer: {
    width: '95%',
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    marginVertical: 14, // more gap between fields
    marginHorizontal: 0,
  },
  inputStyle: {
    fontSize: 14, // smaller font
    fontWeight: 600,
    backgroundColor: 'transparent', // fully transparent input background
    color: '#070707ff',
    paddingLeft: 8,
    borderRadius: 5,
    height: 36,
    width: '100%',
    // Remove any border/shadow if CustomInput supports it
  },
  labelStyle: {
    fontSize: 11, // smaller label
    color: '#333',
    marginBottom: 2,
    marginLeft: 2,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  buttonContainer: {
    width: '95%',
    marginTop: 20,
    marginBottom: 24, // more gap below button
    alignSelf: 'flex-start',
  },
  gradientButton: {
    height: 25,
    borderRadius: 15,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14, // smaller font
    fontWeight: 'bold',
  },
  signInPrompt: {
    color: COLORS.button,
    fontFamily: FONTS.Medium,
    fontWeight: 600,
    fontSize: 15,
    marginTop: 24, // more gap above sign in text
    marginBottom: 8,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  signInText: {
    fontFamily: FONTS.title,
    textDecorationLine: 'underline',
    fontSize: 15,
    color: COLORS.red,
  },
});
