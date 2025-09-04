import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../Components/Header';
import Tags from '../Components/Tags';
import ProductCard from '../Components/ProductCard';
import coupon from '../data/coupon.json';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../Constant/Colors';
import {moderateScale} from '../PixelRatio';
import Coupons from '../Components/Coupons';
import CouponCard from '../Components/CouponCard';
// import Header from "../Components/Header";

const MyCoupons = () => {
  const [couponLists, setCopnonLists] = useState(coupon.coupons);
  const navigation = useNavigation();
  const handleCouponDetails = item => {
    //navigation.navigate("PRODUCT_DETAILS", { item });
  };

  return (
    <LinearGradient colors={COLORS.gradient} style={styles.container}>
      <Header />
      <FlatList
        ListHeaderComponent={
          <>
            <>
              <View style={styles.headerSection}>
                <Text style={styles.headingText}>My Coupons</Text>
                <MaterialCommunityIcons
                  name="wallet-giftcard"
                  style={{color: COLORS.button, fontSize: moderateScale(30)}}
                />
              </View>
            </>
            <Coupons />
          </>
        }
        data={couponLists}
        numColumns={1}
        renderItem={({item}) => (
          <CouponCard item={item} handleCouponClick={handleCouponDetails} />
        )}
        showsVerticalScrollIndicator={false}
      />
      <View></View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
  },

  headingText: {
    fontSize: 28,
    color: '#000000',
    marginVertical: 20,
    fontFamily: 'Poppins-Regular',
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchIcon: {
    height: 26,
    width: 26,
    marginHorizontal: 12,
  },
  textInput: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },
  headerSection: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 0.2,
    borderColor: COLORS.textInput,
    paddingBottom: 10,
  },
});
export default MyCoupons;
