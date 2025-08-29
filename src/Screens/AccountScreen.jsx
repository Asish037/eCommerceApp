import React, {useContext, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {COLORS} from '../Constant/Colors';
import {FONTS} from '../Constant/Font';
import {moderateScale} from '../PixelRatio';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {CartContext} from '../Context/CartContext';

const ViewProfile = () => {
  const navigation = useNavigation();
  const {user, loadUserData} = useContext(CartContext);

  // Reload user data whenever this screen comes into focus
  useFocusEffect(
    React.useCallback(() => {
      if (loadUserData) {
        loadUserData();
      }
    }, [loadUserData]),
  );

  return (
    <LinearGradient
      colors={['#e3e3e3ff', '#c3adb1ff']}
      style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings-outline" size={24} color={COLORS.black} />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <Image
              style={styles.profileImage}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE_5aeaS13y24e1D7KBOIPNUwGflPnLR8AuQQUQ6tHDnycRg_2woHNm3fX1K_UYtxizZw&usqp=CAU',
              }}
            />
          </View>
          <View style={styles.profileInfoContainer}>
            <Text style={styles.userName}>{user?.fullname}</Text>
            <Text style={styles.userEmail}>{user?.email}</Text>
          </View>
        </View>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>2334</Text>
            <Text style={styles.statLabel}>Orders</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>3665</Text>
            <Text style={styles.statLabel}>Wishlist</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>235</Text>
            <Text style={styles.statLabel}>Reviews</Text>
          </View>
        </View>

        {/* My Orders Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My orders</Text>
          <View style={styles.orderTrackingContainer}>
            <TouchableOpacity
              style={styles.orderTrackingItem}
              onPress={() =>
                navigation.navigate('Orders', {
                  status: 'pending_payment',
                  title: 'To Pay',
                  filter: 'unpaid',
                })
              }>
              <View style={styles.orderIcon}>
                <MaterialCommunityIcons
                  name="package-variant"
                  size={25}
                  color="#FF6B35"
                />
              </View>
              <Text style={styles.orderLabel}>To pay</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.orderTrackingItem}
              onPress={() =>
                navigation.navigate('Orders', {
                  status: 'processing',
                  title: 'To Ship',
                  filter: 'paid',
                })
              }>
              <View style={styles.orderIcon}>
                <MaterialCommunityIcons
                  name="truck"
                  size={25}
                  color="#4ECDC4"
                />
              </View>
              <Text style={styles.orderLabel}>To ship</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.orderTrackingItem}
              onPress={() =>
                navigation.navigate('Orders', {
                  status: 'shipped',
                  title: 'To Receive',
                  filter: 'shipped',
                })
              }>
              <View style={styles.orderIcon}>
                <MaterialCommunityIcons
                  name="truck-delivery"
                  size={25}
                  color="#45B7D1"
                />
              </View>
              <Text style={styles.orderLabel}>To receive</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.orderTrackingItem}
              onPress={() =>
                navigation.navigate('Orders', {
                  status: 'delivered',
                  title: 'To Review',
                  filter: 'delivered',
                })
              }>
              <View style={styles.orderIcon}>
                <MaterialIcons name="rate-review" size={25} color="#96CEB4" />
              </View>
              <Text style={styles.orderLabel}>To review</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.orderTrackingItem}
              onPress={() => navigation.navigate('Orders')}>
              <View style={styles.orderIcon}>
                <MaterialCommunityIcons
                  name="format-list-bulleted"
                  size={25}
                  color="#8E44AD"
                />
              </View>
              <Text style={styles.orderLabel}>View all</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem}>
            <View
              style={[styles.menuIconContainer, {backgroundColor: '#FFF3E0'}]}>
              <MaterialCommunityIcons
                name="wallet"
                size={moderateScale(24)}
                color="#FF9800"
              />
            </View>
            <Text style={styles.menuText}>My wallet</Text>
            <MaterialIcons
              name="chevron-right"
              size={moderateScale(24)}
              color="#6C757D"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('AddressScreen')}>
            <View
              style={[styles.menuIconContainer, {backgroundColor: '#E3F2FD'}]}>
              <MaterialIcons
                name="location-on"
                size={moderateScale(24)}
                color="#2196F3"
              />
            </View>
            <Text style={styles.menuText}>Shipping address</Text>
            <MaterialIcons
              name="chevron-right"
              size={moderateScale(24)}
              color="#6C757D"
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View
              style={[styles.menuIconContainer, {backgroundColor: '#FCE4EC'}]}>
              <MaterialCommunityIcons
                name="gift-outline"
                size={moderateScale(24)}
                color="#E91E63"
              />
            </View>
            <Text style={styles.menuText}>Rewards</Text>
            <MaterialIcons
              name="chevron-right"
              size={moderateScale(24)}
              color="#6C757D"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('MyCoupons')}>
            <View
              style={[styles.menuIconContainer, {backgroundColor: '#FFF8E1'}]}>
              <MaterialCommunityIcons
                name="ticket-percent"
                size={moderateScale(24)}
                color="#FFC107"
              />
            </View>
            <Text style={styles.menuText}>My Coupons</Text>
            <MaterialIcons
              name="chevron-right"
              size={moderateScale(24)}
              color="#6C757D"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.menuItem, {borderBottomWidth: 0}]}
            onPress={() => navigation.navigate('HelpCenter')}>
            <View
              style={[styles.menuIconContainer, {backgroundColor: '#E8F5E8'}]}>
              <MaterialCommunityIcons
                name="help-circle-outline"
                size={moderateScale(24)}
                color="#4CAF50"
              />
            </View>
            <Text style={styles.menuText}>Help Center</Text>
            <MaterialIcons
              name="chevron-right"
              size={moderateScale(24)}
              color="#6C757D"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default ViewProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(16),
    paddingTop: moderateScale(10),
  },
  scrollContainer: {
    paddingBottom: moderateScale(20),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(4),
    paddingVertical: moderateScale(15),
    marginBottom: moderateScale(10),
  },
  headerTitle: {
    fontSize: moderateScale(28),
    fontWeight: '700',
    color: COLORS.black,
    fontFamily: FONTS.Bold,
  },
  settingsButton: {
    padding: moderateScale(8),
    borderRadius: moderateScale(8),
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: moderateScale(24),
    paddingHorizontal: moderateScale(20),
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(16),
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginBottom: moderateScale(20),
  },
  profileImageContainer: {
    marginRight: moderateScale(16),
  },
  profileImage: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(40),
    borderWidth: 3,
    borderColor: '#f8f9fa',
  },
  profileInfoContainer: {
    flex: 1,
  },
  userName: {
    fontSize: moderateScale(24),
    fontWeight: '700',
    color: COLORS.black,
    fontFamily: FONTS.Bold,
    marginBottom: moderateScale(4),
  },
  userEmail: {
    fontSize: moderateScale(16),
    color: '#6C757D',
    fontWeight: '500',
    fontFamily: FONTS.Regular,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: moderateScale(24),
    paddingHorizontal: moderateScale(20),
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(16),
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginBottom: moderateScale(20),
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: moderateScale(22),
    fontWeight: '700',
    color: COLORS.black,
    fontFamily: FONTS.Bold,
    marginBottom: moderateScale(4),
  },
  statLabel: {
    fontSize: moderateScale(13),
    color: '#6C757D',
    fontFamily: FONTS.Regular,
    fontWeight: '500',
  },
  section: {
    marginBottom: moderateScale(20),
  },
  sectionTitle: {
    fontSize: moderateScale(20),
    fontWeight: '600',
    color: COLORS.black,
    fontFamily: FONTS.Bold,
    marginBottom: moderateScale(16),
    paddingHorizontal: moderateScale(4),
  },
  orderTrackingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    paddingVertical: moderateScale(24),
    paddingHorizontal: moderateScale(16),
    borderRadius: moderateScale(16),
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  orderTrackingItem: {
    alignItems: 'center',
    flex: 1,
    minWidth: moderateScale(60),
  },
  orderIcon: {
    width: moderateScale(48),
    height: moderateScale(48),
    borderRadius: moderateScale(12),
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: moderateScale(8),
  },
  orderLabel: {
    fontSize: moderateScale(12),
    color: COLORS.black,
    fontFamily: FONTS.Medium,
    textAlign: 'center',
    fontWeight: '600',
  },
  menuContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(16),
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginBottom: moderateScale(20),
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: moderateScale(16),
    paddingHorizontal: moderateScale(20),
    borderBottomWidth: 0.5,
    borderBottomColor: '#F0F0F0',
  },
  menuIconContainer: {
    width: moderateScale(48),
    height: moderateScale(48),
    borderRadius: moderateScale(12),
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: moderateScale(16),
  },
  menuText: {
    flex: 1,
    fontSize: moderateScale(16),
    color: COLORS.black,
    fontFamily: FONTS.Medium,
    fontWeight: '600',
    lineHeight: moderateScale(20),
  },
});
