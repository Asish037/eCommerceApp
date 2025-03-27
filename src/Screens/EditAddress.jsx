import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../Constant/Colors';
import {FONTS} from '../Constant/Font';
import {moderateScale, verticalScale} from '../PixelRatio';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import GradientButton from '../Components/Button/GradientButton';
import Toast from 'react-native-simple-toast';
import CustomInput from '../Components/CustomInput';
import { fonts } from '../utils/fonts';

const AddressScreen = () => {
  const navigation = useNavigation();
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [email, setemail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [fullname, SetFullname] = useState('');
  const [disabled, setdisabled] = useState(false);

  const saveNewAddress = async () => {
    // if (email == '' || pass == '') {
    //   Toast.show('Please enter email and password!');
    //   return;
    // }

    setdisabled(true);
    // let data = {
    //   email: email,
    //   password: pass,
    // };

    setdisabled(false);
    Toast.show('Update Profile Successfully!', Toast.SHORT);
    //navigation.navigate('AddressScreen');
    navigation.setOptions({ title: 'Updated!' })
  };

  return (
    <LinearGradient colors={COLORS.gradient} style={styles.container}>
      <ScrollView>  
        <View style={styles.body}>
        <View style={styles.inputFieldContainer}>
            <CustomInput
              label="Pincode"
              placeholder="98765"
              keyboardType="text"
              icon={
                ''
              }
            />
          </View>
          <View style={styles.inputFieldContainer}>
            <CustomInput
              label="House/ Flat/ Building No."
              placeholder="98765"
              keyboardType="text"
              icon={
                ''
              }
            />
          </View>
          <View style={styles.inputFieldContainer}>
            <CustomInput
              label="Road Name/ Area / Colony."
              placeholder="98765"
              keyboardType="text"
              icon={
                ''
              }
            />
          </View>
          <View style={styles.inputFieldContainer}>
            <CustomInput
              label="Contact Name"
              placeholder="Jhon Henry"
              keyboardType="text"
              icon={
                ''
              }
            />
          </View>
          <View style={styles.inputFieldContainer}>
            <CustomInput
              label="Phone Number"
              placeholder="765432189"
              keyboardType="text"
              icon={
                ''
              }
            />
          </View>
          <GradientButton
                      title="Save Address"
                      onPress={saveNewAddress}
                      // onPress={() => navigation.navigate('Password',{data:null})}
                    />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  body: {
    alignItems: 'center',
    margin: 0,
  },
  inputFieldContainer: {
    width: moderateScale(300),
    height: verticalScale(120),
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 10,
  },
});
