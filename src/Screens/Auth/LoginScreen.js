import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-simple-toast';
import {useDispatch} from 'react-redux';
import GradientButton from '../../Components/Button/GradientButton';
import ImageWithTitle from '../../Components/Header/ImageWithTitle';
import {COLORS} from '../../Constant/Colors';
import {FONTS} from '../../Constant/Font';
import {moderateScale, verticalScale} from '../../PixelRatio';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../../Components/CustomInput';

export default function LoginScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  const [hidepass, sethidepass] = useState(true);
  const [disabled, setdisabled] = useState(false);

  const emailInput = useRef();
  const passwordInput = useRef();

  const loginUser = async () => {
    if (email == '' || pass == '') {
      Toast.show('Please enter email and password!');
      return;
    }

    setdisabled(true);
    let data = {
      email: email,
      password: pass,
    };
    // let result = await Auth.login(data);
    // console.log('result', result);
    // if (result && result.status) {
    //   Toast.show('Login Successfully!', Toast.SHORT);
    //   await Auth.setAccount(result.data);
    //   await Auth.setToken(result.data.token);
    //   dispatch(setUser(result.data));
    // } else {
    //   Toast.show('Invalid credentials!', Toast.SHORT);
    // }
    setdisabled(false);
    Toast.show('Login Successfully!', Toast.SHORT);
    navigation.navigate('MainHome', {data: data});
  };

  return (
    <LinearGradient colors={COLORS.gradient} style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={{flex: 1}}
        enableOnAndroid={true}
        enableAutomaticScroll={Platform.OS === 'ios'}
        behavior="padding"
        keyboardVerticalOffset={0}
        style={{padding: 5}}>
        <View style={styles.body}>
          <ImageWithTitle title="Login" />

          <View style={styles.inputFieldContainer}>
            <CustomInput
              label="Your Email"
              placeholder="zerodegreecoder@gmail.com"
              keyboardType="email-address"
              type="text"
              isRequired={true}
              ref={emailInput}
              onChangeText={setemail}
              returnKeyType="next"
              onSubmitEditing={e => emailInput.current.focus(e)}
              blurOnSubmit={false}
              icon={
                <MaterialCommunityIcons
                  name={'email-edit-outline'}
                  size={22}
                  color={COLORS.button}
                  style={styles.icon}
                />
              }
            />
          </View>
          <View style={styles.inputFieldContainer}>
            <CustomInput
              label="Your Password"
              placeholder="*******"
              type="password"
              isRequired={true}
              secureTextEntry={true}
              ref={passwordInput}
              onChangeText={setpass}
              icon={
                <MaterialCommunityIcons
                  name={'lock'}
                  size={22}
                  color={COLORS.button}
                  style={styles.icon}
                />
              }
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Email')}>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
          <View>
            <GradientButton
              title="Login"
              onPress={loginUser}
              disabled={disabled}
            />

            {/* <SocialLogin /> */}

            <Text
              style={{
                color: COLORS.button,
                fontFamily: FONTS.Regular,
                fontSize: 13,
                marginVertical: moderateScale(15),
                textAlign: 'center',
              }}>
              Don't have an account?{' '}
              <Text
                onPress={() => navigation.navigate('Register')}
                style={{
                  fontFamily: FONTS.title,
                  textDecorationLine: 'underline',
                }}>
                Sign Up
              </Text>
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  body: {
    alignItems: 'center',
    margin: 10,
  },
  inputFieldContainer: {
    width: moderateScale(300),
    height: verticalScale(120),
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 10,
  },
  forgotPassword: {
    fontFamily: FONTS.Regular,
    fontSize: moderateScale(11.5),
    color: COLORS.button,
    textAlign: 'right',
    margin: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
});
