import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {fonts} from '../utils/fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import { COLORS } from '../Constant/Colors';
import {moderateScale} from  '../PixelRatio/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const WishlistCard = ({item, handleProductClick, toggleFavorite}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        handleProductClick(item);
      }}>
      <View style={styles.ImgContainer}>
        <Image source={{uri: item.image}} style={styles.coverImage} />
        <Text style={styles.rating}> {item.rating}
        <MaterialCommunityIcons
                    name="star"
                    style={{
                      color: COLORS.button,
                      fontSize: moderateScale(15),
                    }}
                  />
                  | 22
        </Text>
        
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <View style={styles.likeContainer}>
        <TouchableOpacity
          onPress={() => {
            toggleFavorite(item);
          }}>
            <Entypo name="cross" size={30} color="red" /> 
          {/* <MaterialCommunityIcons name="cross" size="30" color="red" /> */}
        </TouchableOpacity>
      </View>
      <View style={styles.bagContainer}>
        <Text style={styles.price}>MOVE TO BAG</Text>
      </View>
    </TouchableOpacity>
  );
};

export default WishlistCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    borderColor: COLORS.black,
    borderWidth: 2,
    borderRadius: 10
  },
  coverImage: {
    height: 256,
    width: '100%',
    borderRadius: 20,
    position: 'relative',
  },
  ImgContainer:{
    flex: 1
  },
  rating:{
    backgroundColor: COLORS.lightgray,
    borderColor: COLORS.grey,
    borderWidth: 1,
    borderRadius: 10,
    position: 'absolute',
    bottom: 20,
    left: 5
  },
  contentContainer: {
    padding: 10,
  },
  bagContainer:{
    backgroundColor: COLORS.pink,
    padding: 8,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.regular,
    fontWeight: '700',
    color: '#444444',
  },
  price: {
    fontSize: 18,
    fontFamily: fonts.medium,
  },
  likeContainer: {
    position: 'absolute',
    padding: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    right: 10,
    top: 10,
  },
  faviorate: {
    height: 20,
    width: 20,
  },
});
