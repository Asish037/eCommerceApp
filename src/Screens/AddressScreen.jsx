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
  Pressable,
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
import CustomAlert from '../Components/Modal/CustomAlert';

const AddressScreen = () => {
  const navigation = useNavigation();
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [email, setemail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [fullname, SetFullname] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
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
      <ScrollView>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.navigate('EditAddress', { pageTitle : 'Add New Address' })}  >
            <MaterialIcons
              name="add"
              color={COLORS.button}
              style={{
                alignSelf: 'center',
              }}
              //onPress={() => handleProfileUpload()}
              size={40}
            />
            <Text style={styles.headTitle}>Add New Address</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bodySec}>
          <View style={styles.bodyLeftPart}>
          <Text style={[styles.subHeadTitle, {color:'blue', padding: 5}]}>
            Default</Text>
          <Text style={[styles.headTitle, {color: COLORS.black}]}>John Henry</Text>
          <Text style={[styles.subHeadTitle, {color: COLORS.black}]}>132 My Street, Kingston, New York 12401 </Text>
          <Text style={[styles.subHeadTitle, {color: COLORS.black}]}>New York 12401 </Text>
          <Text style={[styles.subHeadTitle, {color: COLORS.black}]}>9876543210 </Text>
          </View>
          <View style={styles.bodyRightPart}>
          <TouchableOpacity onPress={() => navigation.navigate('EditAddress', { pageTitle : 'Edit Your Address' })}  >
            <MaterialCommunityIcons
              name="book-edit"
              color={COLORS.button}
              style={{
                alignSelf: 'center',
              }}
              size={40}
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
             <MaterialIcons
              name="delete"
              color={COLORS.liteBlack}
              style={{
                alignSelf: 'center',
              }}
              //onPress={() => handleProfileUpload()}
              size={40}
            />
            </TouchableOpacity>
          </View>
          <View style={styles.centeredView}>
            <CustomAlert 
                modalVisible={modalVisible} 
                setModalVisible={setModalVisible}
                title={'Delete'}
                message={'Want to sure delete this record?'} 
                android={{
                  container: {
                    backgroundColor: COLORS.theme
                  },
                  title: {
                    color: COLORS.black,
                    fontFamily: 'Roboto',
                    fontSize: 26,
                    fontWeight: 'regular',
                  },
                  message: {
                    color: COLORS.white,
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    fontWeight: 'regular',
                  },
                }}
                ios={{
                  container: {
                    backgroundColor: 'yellow'
                  },
                  title: {
                    color: 'red',
                    fontFamily: 'Roboto',
                    fontSize: 26,
                    fontWeight: 'regular',
                  },
                  message: {
                    color: 'blue',
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    fontWeight: 'regular',
                  },
                }}
                buttons={[{
                  text: 'no'
                },{
                  text: 'Yes',
                  func: () => {console.log('Yes Pressed')},
                  styles: {
                    color: COLORS.white,
                    fontSize: 18,
                    fontWeight: 'bold',
                    fontFamily: 'Roboto',
                    textTransform: 'none',
                    backgroundColor: COLORS.black
                  }
                }]}
            />
          </View>
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
  addNewAddrs: {
    width: moderateScale(350),
    height: verticalScale(60),
   flex: 1, flexDirection: 'row', 
   //flexWrap: 'wrap',
     position: 'relative'    ,
     padding: 5,
    borderBottomWidth: 0.2,
    borderColor: COLORS.textInput,
    backgroundColor: 'yellow'
  },
  headTitle: {
    color: COLORS.button,
    fontFamily: FONTS.Bold,
    fontSize: moderateScale(18),
    fontWeight: '700'
  },
  bodySec: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 0.2,
    borderColor: COLORS.textInput,
  },
  bodyLeftPart:{
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  bodyRightPart:{
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  subHeadTitle : 
  {fontSize: moderateScale(15), fontWeight: '500'},
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
});
