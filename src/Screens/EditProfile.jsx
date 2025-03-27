import React, {useState} from 'react';
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

const EditProfile = () => {
  const navigation = useNavigation();
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [email, setemail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [fullname, SetFullname] = useState('');
  const [disabled, setdisabled] = useState(false);

  const saveDetails = async () => {
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
    navigation.navigate('MainHome', {data: data});
  };

  return (
    <LinearGradient colors={COLORS.gradient} style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.hedaerUserName}>{'Hey,\nJohn Henry'}</Text>
        {/* <Image
          style={{
            width: moderateScale(95),
            height: moderateScale(95),
            borderRadius: moderateScale(50),
            borderWidth: 4,
            borderColor: COLORS.button,
            marginBottom: 5,
          }}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE_5aeaS13y24e1D7KBOIPNUwGflPnLR8AuQQUQ6tHDnycRg_2woHNm3fX1K_UYtxizZw&usqp=CAU',
          }}
        /> */}
        {/* <View style={styles.profileHeaderPicCircle}>
           
           <View>
             <Image
               // source={{uri: profilePicture}}
               source={{
                 uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE_5aeaS13y24e1D7KBOIPNUwGflPnLR8AuQQUQ6tHDnycRg_2woHNm3fX1K_UYtxizZw&usqp=CAU',
               }}
               height={120}
               width={120}
               style={styles.picture}
             />
             
           </View>
           </View> */}
        <View style={styles.profileHeaderPicCircle}>
          {/* <Text style={{fontSize: 25, color: COLORS.editButtonColor}}>
                  {'A'}
                </Text> */}
          <Image
            // source={{uri: profilePicture}}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE_5aeaS13y24e1D7KBOIPNUwGflPnLR8AuQQUQ6tHDnycRg_2woHNm3fX1K_UYtxizZw&usqp=CAU',
            }}
            height={120}
            width={120}
            style={styles.picture}
          />
        </View>
        <View style={styles.editIcon}>
          <TouchableOpacity>
            <MaterialIcons
              name="edit"
              color={COLORS.button}
              style={{
                alignSelf: 'center',
              }}
              //onPress={() => handleProfileUpload()}
              size={22}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <TouchableWithoutFeedback onPress={() => {}}>
          <View style={styles.body}>
            <View style={styles.inputFieldContainer}>
              <CustomInput
                    label='Your Email' placeholder='zerodegreecoder@gmail.com'
                    keyboardType="email-address"
                    icon={
                        <MaterialCommunityIcons name={"email-edit-outline"} size={22} color={COLORS.button} style={styles.icon} />
                    }
                />
            </View>
            <View style={styles.inputFieldContainer}>
               <CustomInput
                    label='Your Mobile Number' placeholder='9876543209'
                    keyboardType={'phone-pad'}
                    icon={
                        <MaterialCommunityIcons name={"phone-check"} size={22} color={COLORS.button} style={styles.icon} />
                    }
                />
            </View>
            <View style={styles.inputFieldContainer}>
               <CustomInput
                    label='Your Full Name' placeholder='Jhon Henry'
                     keyboardType="text"
                    icon={
                        <MaterialCommunityIcons name={"account"} size={22} color={COLORS.button} style={styles.icon} />
                    }
                />
            </View>
            <View>
              <GradientButton
                title="Save Details"
                onPress={saveDetails}
                disabled={disabled}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </LinearGradient>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerSection: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 0.2,
    borderColor: COLORS.textInput,
    paddingBottom: 20,
  },
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
  textInput: {
    width: moderateScale(250),
    height: verticalScale(50),
    // paddingLeft: 10,
    color: COLORS.black,
    fontFamily: FONTS.Regular,
    fontSize: moderateScale(15),
    backgroundColor: COLORS.lightgray,
    paddingLeft: 20,
    borderRadius: 5,
    marginBottom: 7,
  },
  inputFieldContainer: {
    // borderWidth: 1,
    // borderColor: COLORS.button,
    // borderRadius: 12,
    width: moderateScale(320),
    height: verticalScale(120),
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 10
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
    // borderColor: COLORS.logoColor,
    // borderWidth: 2,
  },
  icon: {
    marginHorizontal: 10,
  },
});
