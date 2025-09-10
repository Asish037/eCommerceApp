import React from 'react';
<<<<<<< HEAD
import {ActivityIndicator, Platform} from 'react-native';
=======
import {ActivityIndicator} from 'react-native';
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../Constant/Colors';
import {FONTS} from '../../Constant/Font';
import {moderateScale, verticalScale} from '../../PixelRatio';

export default function GradientButton({style, onPress, title, disabled}) {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      disabled={disabled}>
      <LinearGradient
<<<<<<< HEAD
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
=======
        start={{x: 0.0, y: 0.5}}
        end={{x: 0.7, y: 1.0}}
        locations={[0, 0.6, 1]}
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
        colors={COLORS.gradientButton}
        style={styles.linearGradient}>
        {disabled ? (
          <ActivityIndicator color={COLORS.white} size="small" />
        ) : (
          <Text style={styles.buttonText}>{title}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
<<<<<<< HEAD
    height: Platform.OS === 'ios' ? verticalScale(60) : verticalScale(55),
    width: '100%',
    borderRadius: moderateScale(15),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    alignSelf: 'center',
  },
  linearGradient: {
    height: Platform.OS === 'ios' ? verticalScale(60) : verticalScale(55),
    width: '100%',
    paddingHorizontal: moderateScale(20),
    borderRadius: moderateScale(15),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: Platform.OS === 'ios' ? moderateScale(18) : moderateScale(16),
    fontFamily: Platform.OS === 'ios' ? 'System' : FONTS.title,
    fontWeight: Platform.OS === 'ios' ? '600' : 'bold',
    textAlign: 'center',
    color: COLORS.white,
    includeFontPadding: false,
    textAlignVertical: 'center',
    lineHeight: Platform.OS === 'ios' ? moderateScale(22) : moderateScale(20),
=======
    height: verticalScale(50),
    //width: '100%',
    width: moderateScale(250),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    height: verticalScale(50),
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: moderateScale(16),
    fontFamily: FONTS.title,
    textAlign: 'center',
    // margin: 10,
    color: COLORS.black,
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  },
});
