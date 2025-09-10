import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import LinearGradient from 'react-native-linear-gradient';
<<<<<<< HEAD
import { moderateScale, verticalScale } from '../PixelRatio';
=======
import {moderateScale, verticalScale} from '../PixelRatio';
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
<<<<<<< HEAD
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../Constant/Colors';
import { FONTS } from '../Constant/Font';

const Settings = () => {
  const navigation = useNavigation();
  const handleLogout = () => {
    
=======
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../Constant/Colors';
import {FONTS} from '../Constant/Font';

const Settings = () => {
  const navigation = useNavigation();

  console.log('Rendering Settings Screen');
  const handleLogout = () => {
    console.log('Logout pressed');
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: () => navigation.navigate('Landing'),
        },
      ],
<<<<<<< HEAD
      { cancelable: true },
=======
      {cancelable: true},
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
    );
  };

  return (
    <LinearGradient style={styles.container} colors={COLORS.gradient}>
      <Header />
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>Manage your account and preferences</Text>
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {/* Account Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Account</Text>
          <View style={styles.menuContainer}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigation.navigate('EditProfile')}>
              <View
                style={[
                  styles.menuIconContainer,
<<<<<<< HEAD
                  { backgroundColor: '#FFF3E0' },
=======
                  {backgroundColor: '#FFF3E0'},
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
                ]}>
                <MaterialCommunityIcons
                  name="account-edit"
                  size={moderateScale(24)}
                  color="#FF9800"
                />
              </View>
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuText}>Edit Profile</Text>
                <Text style={styles.menuSubText}>
                  Update your personal information
                </Text>
              </View>
              <MaterialIcons
                name="chevron-right"
                size={moderateScale(24)}
                color="#6C757D"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() =>
<<<<<<< HEAD
                navigation.navigate('EditAddress', { pageTitle: 'Edit Address' })
=======
                navigation.navigate('EditAddress', {pageTitle: 'Edit Address'})
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
              }>
              <View
                style={[
                  styles.menuIconContainer,
<<<<<<< HEAD
                  { backgroundColor: '#E3F2FD' },
=======
                  {backgroundColor: '#E3F2FD'},
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
                ]}>
                <MaterialIcons
                  name="location-on"
                  size={moderateScale(24)}
                  color="#2196F3"
                />
              </View>
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuText}>Edit Address</Text>
                <Text style={styles.menuSubText}>
                  Manage your delivery addresses
                </Text>
              </View>
              <MaterialIcons
                name="chevron-right"
                size={moderateScale(24)}
                color="#6C757D"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Rewards & Offers Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Rewards & Offers</Text>
          <View style={styles.menuContainer}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigation.navigate('MyCoupons')}>
              <View
                style={[
                  styles.menuIconContainer,
<<<<<<< HEAD
                  { backgroundColor: '#FFF8E1' },
=======
                  {backgroundColor: '#FFF8E1'},
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
                ]}>
                <MaterialCommunityIcons
                  name="ticket-percent"
                  size={moderateScale(24)}
                  color="#FFC107"
                />
              </View>
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuText}>My Coupons</Text>
                <Text style={styles.menuSubText}>
                  View and manage discount coupons
                </Text>
              </View>
              <MaterialIcons
                name="chevron-right"
                size={moderateScale(24)}
                color="#6C757D"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() =>
                Alert.alert(
                  'Coming Soon',
                  'Rewards collection feature will be available soon!',
                )
              }>
              <View
                style={[
                  styles.menuIconContainer,
<<<<<<< HEAD
                  { backgroundColor: '#FCE4EC' },
=======
                  {backgroundColor: '#FCE4EC'},
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
                ]}>
                <MaterialCommunityIcons
                  name="gift-outline"
                  size={moderateScale(24)}
                  color="#E91E63"
                />
              </View>
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuText}>Rewards</Text>
                <Text style={styles.menuSubText}>
                  Collect points and earn rewards
                </Text>
              </View>
              <MaterialIcons
                name="chevron-right"
                size={moderateScale(24)}
                color="#6C757D"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Support Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Support</Text>
          <View style={styles.menuContainer}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigation.navigate('HelpCenter')}>
              <View
                style={[
                  styles.menuIconContainer,
<<<<<<< HEAD
                  { backgroundColor: '#E8F5E8' },
=======
                  {backgroundColor: '#E8F5E8'},
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
                ]}>
                <MaterialCommunityIcons
                  name="help-circle-outline"
                  size={moderateScale(24)}
                  color="#4CAF50"
                />
              </View>
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuText}>Help Center</Text>
                <Text style={styles.menuSubText}>Get help and support</Text>
              </View>
              <MaterialIcons
                name="chevron-right"
                size={moderateScale(24)}
                color="#6C757D"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() =>
                Alert.alert(
                  'Contact Us',
                  'Email: support@app.com\nPhone: +1-234-567-8900',
                )
              }>
              <View
                style={[
                  styles.menuIconContainer,
<<<<<<< HEAD
                  { backgroundColor: '#F3E5F5' },
=======
                  {backgroundColor: '#F3E5F5'},
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
                ]}>
                <MaterialCommunityIcons
                  name="headset"
                  size={moderateScale(24)}
                  color="#9C27B0"
                />
              </View>
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuText}>Customer Service</Text>
                <Text style={styles.menuSubText}>Contact our support team</Text>
              </View>
              <MaterialIcons
                name="chevron-right"
                size={moderateScale(24)}
                color="#6C757D"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Other Options Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>More Options</Text>
          <View style={styles.menuContainer}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigation.navigate('Privacy')}>
              <View
                style={[
                  styles.menuIconContainer,
<<<<<<< HEAD
                  { backgroundColor: '#FFF3E0' },
=======
                  {backgroundColor: '#FFF3E0'},
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
                ]}>
                <MaterialIcons
                  name="privacy-tip"
                  size={moderateScale(24)}
                  color="#FF9800"
                />
              </View>
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuText}>Privacy Policy</Text>
                <Text style={styles.menuSubText}>Read our privacy policy</Text>
              </View>
              <MaterialIcons
                name="chevron-right"
                size={moderateScale(24)}
                color="#6C757D"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.menuItem, styles.lastMenuItem]}
              onPress={() =>
                Alert.alert('App Info', 'Version: 1.0.0\nBuild: 100')
              }>
              <View
                style={[
                  styles.menuIconContainer,
<<<<<<< HEAD
                  { backgroundColor: '#E1F5FE' },
=======
                  {backgroundColor: '#E1F5FE'},
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
                ]}>
                <AntDesign
                  name="infocirlceo"
                  size={moderateScale(24)}
                  color="#00BCD4"
                />
              </View>
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuText}>About App</Text>
                <Text style={styles.menuSubText}>
                  App version and information
                </Text>
              </View>
              <MaterialIcons
                name="chevron-right"
                size={moderateScale(24)}
                color="#6C757D"
              />
            </TouchableOpacity>
<<<<<<< HEAD
            <TouchableOpacity
              style={[styles.menuItem, styles.lastMenuItem]}
              onPress={handleLogout}>
              <View
                style={[
                  styles.menuIconContainer,
                  { backgroundColor: '#FFEBEE' },
=======

            <TouchableOpacity
              style={[styles.menuItem, styles.lastMenuItem]}
              onPress={handleLogout}>

              
              <View
                style={[
                  styles.menuIconContainer,
                  {backgroundColor: '#FFEBEE'},
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
                ]}>
                <Ionicons
                  name="log-out-outline"
                  size={moderateScale(24)}
                  color="#F44336"
                />
              </View>
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuText}>Logout</Text>
                <Text style={styles.menuSubText}>Sign out of your account</Text>
              </View>
              <MaterialIcons
                name="chevron-right"
                size={moderateScale(24)}
                color="#6C757D"
              />
            </TouchableOpacity>
<<<<<<< HEAD

=======
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    width: '100%',
    height: '100%',
=======
    paddingHorizontal: moderateScale(10),
    paddingTop: moderateScale(10),
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  },
  headerContainer: {
    marginBottom: moderateScale(24),
    paddingHorizontal: moderateScale(4),
  },
  title: {
    fontSize: moderateScale(23),
    fontWeight: '700',
<<<<<<< HEAD
    color: COLORS.black,
=======
    color: COLORS.text,
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
    fontFamily: FONTS.Bold,
    marginTop: moderateScale(4),
    marginBottom: moderateScale(4),
  },
  subtitle: {
    fontSize: moderateScale(13),
<<<<<<< HEAD
    color: '#2c2c2c',
=======
    color: COLORS.subtext,
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
    fontFamily: FONTS.Regular,
    lineHeight: moderateScale(20),
  },
  scrollContent: {
    paddingBottom: moderateScale(16),
  },
  sectionContainer: {
    marginBottom: moderateScale(20),
  },
  sectionTitle: {
    fontSize: moderateScale(16),
    fontWeight: '600',
<<<<<<< HEAD
    color: COLORS.black,
=======
    color: COLORS.text,
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
    fontFamily: FONTS.Medium,
    marginBottom: moderateScale(10),
    paddingHorizontal: moderateScale(6),
  },
  menuContainer: {
    // backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(16),
    // elevation: 3,
    // shadowColor: '#000',
    // shadowOffset: {
    // width: 0,
    // height: 2,
    // },
    // shadowOpacity: 0.1,
    // shadowRadius: 8,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    borderBottomWidth: 0.5,
    // borderBottomColor: '#F0F0F0',
    backgroundColor: 'transparent',
  },
  lastMenuItem: {
    borderBottomWidth: 0,
  },
  menuIconContainer: {
    width: moderateScale(48),
    height: moderateScale(48),
    borderRadius: moderateScale(12),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: moderateScale(16),
  },
  menuTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  menuText: {
    fontSize: moderateScale(14),
<<<<<<< HEAD
    color: COLORS.black,
=======
    color: COLORS.text,
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
    fontFamily: FONTS.Medium,
    fontWeight: '600',
    lineHeight: moderateScale(20),
    marginBottom: moderateScale(2),
  },
  menuSubText: {
<<<<<<< HEAD
    fontSize: moderateScale(13),
    color: '#6C757D',
    fontFamily: FONTS.Regular,
    lineHeight: moderateScale(16),
=======
    fontSize: moderateScale(12),
    color: COLORS.subtext,
    fontFamily: FONTS.Regular,
    lineHeight: moderateScale(15),
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  },
});
