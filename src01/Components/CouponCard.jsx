import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {fonts} from '../utils/fonts';
import {moderateScale, verticalScale} from '../PixelRatio';

const CouponCard = ({item, handleCouponClick}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        handleCouponClick(item);
      }}>
      <View style={styles.imgContent}>
        <Image source={{uri: item.image_url}} style={styles.coverImage} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>{item.description}</Text>
          <Text style={styles.title}>Code : {item.code}</Text>
          <Text style={styles.price}>Expiry: {item.valid_until}</Text>
          <Text style={styles.viewProducts}>View Products</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CouponCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  coverImage: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: 'relative',
  },
  contentContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.regular,
    fontWeight: '700',
    color: '#444444',
  },
  imgContent: {
    flexDirection: 'row',
    width: moderateScale(300),
    height: verticalScale(100),
    //backgroundColor: 'blue',
  },
  viewProducts:{
    textDecorationLine: 'underline',
  }
});
