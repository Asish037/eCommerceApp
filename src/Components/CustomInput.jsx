import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useRef, forwardRef, useImperativeHandle} from 'react';

import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from '@react-navigation/native';
import {COLORS} from '../Constant/Colors';
import {moderateScale, verticalScale} from '../PixelRatio';
import {FONTS} from '../Constant/Font';

// const CustomInput = forwardRef(({
//   label,
//   placeholder,
//   keyboardType,
//   type,
//   isRequired,
//   secureTextEntry= '',
//   ref,
//   onChangeText,
//   returnKeyType = '',
//   onSubmitEditing = '',
//   blurOnSubmit = '',
//   icon
// }) => {
   const CustomInput = forwardRef(( props, ref) => {
   
  const [secureTextEntery, setSecureTextEntery] = useState(true);
  const [value, setValue] = useState('');
  const [errorText, setErrorText] = useState('');
  const [hidepass, sethidepass] = useState(true);
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    validateEmail: validateEmail,
    focus() {
      inputRef.current.focus();
    },
  }));
  const {colors} = useTheme();
  console.log('deghhhh=='+JSON.stringify(props.type))

  const validateEmail = () => {
    if (props.type == 'email') {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (!value) {
        setErrorText(
          <Text style={{color: COLORS.themeColor}}>
            Please enter email address
          </Text>,
        );
      } else if (reg.test(value) === false) {
        setErrorText(
          <Text style={{color: COLORS.themeColor}}>
            The email address must include @
          </Text>,
        );
      } else {
        setErrorText('');
      }
    } else if (props.type == 'password') {
      if (value.length === 0) {
        setErrorText(
          <Text style={{color: COLORS.themeColor}}>Please enter password</Text>,
        );
      } else {
        setErrorText('');
        setValue(value);
      }
    } else if (props.type == 'text') {
      if (value.length === 0) {
        setErrorText(
          <Text style={{color: COLORS.themeColor}}>
            Please enter {props.placeholder.toLowerCase()} field
          </Text>,
        );
      } else {
        setErrorText('');
        setValue(props.value);
      }
    } else {
      if (props.isRequired) {
        if (!value) {
          setErrorText(
            <Text style={{color: COLORS.themeColor}}>
              Please enter {placeholder.toLowerCase()}
            </Text>,
          );
        } else {
          setErrorText('');
        }
      } else {
        setErrorText('');
      }
    }
  };
  const handleChange = val => {
    props.onChangeText(val);
    if (props.type == 'email') {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (!val) {
        setErrorText(
          <Text style={{color: '#FF641E'}}>Please enter email address</Text>,
        );
      } else if (reg.test(val) === false) {
        setErrorText(
          <Text style={{color: '#FF641E'}}>
            The email address must include @
          </Text>,
        );
      } else {
        setErrorText('');
        setValue(val);
      }
    } else if (
      props.secureTextEntry !== undefined &&
      props.secureTextEntry === true
    ) {
      let reg =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
      if (!val) {
        setErrorText(
          <Text style={{color: COLORS.themeColor}}>
            Please enter {placeholder.toLowerCase()}
          </Text>,
        );
      } else {
        setErrorText('');
        setValue(val);
      }
    } else {
      if (props.isRequired) {
        if (!val) {
          setErrorText(
            <Text style={{color: '#FF641E'}}>
              Please enter {placeholder.toLowerCase()}
            </Text>,
          );
        } else {
          setErrorText('');
          setValue(val);
        }
      } else {
        setErrorText('');
        setValue(val);
      }
    }
  };
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.inputLabel,
          {
            color: colors.textPrimary,
          },
        ]}>
        {props.label}
      </Text>

      <View style={styles.inputFieldContainer}>
        {props.icon}
        <TextInput
          style={[styles.textInput, {color: colors.textPrimary}]}
          placeholder={props.placeholder}
          placeholderTextColor={colors.iconSecondary}
          secureTextEntry={props.type === 'password' && secureTextEntery}
          keyboardType={props.keyboardType} 
          onChangeText={event => handleChange(event)}
          onBlur={validateEmail}
        />
        {props.type === 'password' && (
          <TouchableOpacity
            onPress={() => setSecureTextEntery(!secureTextEntery)}>
            <Feather
              name={secureTextEntery ? 'eye-off' : 'eye'}
              size={22}
              color={COLORS.button}
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.mrgnBtn}>
        {errorText ? (
          <View>
            <Text>{errorText}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
});


export default CustomInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    width: '100%',
  },
  inputLabel: {
    fontFamily: FONTS.SemiBold,
    fontSize: 20,
    marginVertical: 10,
  },
  inputFieldContainer: {
    borderWidth: 1,
    borderColor: COLORS.button,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 10,
  },

  textInput: {
    flex: 1,
    fontSize: 10,
    width: moderateScale(270),
    height: verticalScale(50),
    color: COLORS.black,
    fontFamily: FONTS.Regular,
    fontSize: moderateScale(15),
    backgroundColor: COLORS.lightgray,
    paddingLeft: 20,
    borderRadius: 5,
    marginBottom: 7,
  },
  mrgnBtn:{
    marginBottom:12,
  },
});
