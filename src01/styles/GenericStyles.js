import {StyleSheet} from 'react-native';

<<<<<<< HEAD
import {COLORS} from '../Constant/Colors';
=======
import colors from '../common/colors';
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd

/**
 * mr - margin right
 * ml - margin left
 * mt - margin top
 * p  - padding
 * px - padding horizontal
 */
export const GenericStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  mr12: {
    marginRight: 12,
  },
  mt12: {
    marginTop: 12,
  },
  mt24: {
    marginTop: 24,
  },
  mr4: {
    marginRight: 4,
  },
  mb12: {
    marginBottom: 12,
  },
  upperCase: {
    textTransform: 'uppercase',
  },
  noBorder: {
    borderWidth: 0,
  },
  whiteBackgroundContainer: {
<<<<<<< HEAD
    backgroundColor: COLORS.white,
=======
    backgroundColor: colors.WHITE,
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
    flex: 1,
  },
  bold: {
    fontWeight: 'bold',
  },
  fill: {
    flex: 1,
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  positiveText: {
<<<<<<< HEAD
    color: COLORS.green,
  },
  negativeText: {
    color: COLORS.red,
=======
    color: colors.GREEN,
  },
  negativeText: {
    color: colors.RED,
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  },
  centerAlignedText: {
    textAlign: 'center',
  },
  centerAligned: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlightedInfoText: {
    fontSize: 12,
<<<<<<< HEAD
    backgroundColor: COLORS.lightRed,
=======
    backgroundColor: colors.LIGHT_RED,
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
    padding: 8,
    borderRadius: 2,
  },
  // use CustomCard when background is non-white else use this style
  card: {
<<<<<<< HEAD
    borderColor: COLORS.silver,
=======
    borderColor: colors.SILVER,
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 2,
    borderLeftWidth: 1,
    borderRadius: 5,
    padding: 12,
<<<<<<< HEAD
    backgroundColor: COLORS.white,
=======
    backgroundColor: colors.WHITE,
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  },
  underline: {
    textDecorationLine: 'underline',
  },
  greyBar: {
    height: 1,
<<<<<<< HEAD
    backgroundColor: COLORS.silver,
=======
    backgroundColor: colors.SILVER,
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  },
  p16: {
    padding: 16,
  },
  navigationHeaderBorder: {
    borderBottomWidth: 1,
<<<<<<< HEAD
    borderBottomColor: COLORS.silver,
=======
    borderBottomColor: colors.SILVER,
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  },
  rightAligned: {
    justifyContent: 'flex-end',
  },
});

export function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0.5 * elevation},
    shadowOpacity: 0.5,
    shadowRadius: 0.8 * elevation,
    borderWidth: 0.1,
  };
}
