import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

<<<<<<< HEAD
import {COLORS} from '../Constant/Colors';
=======
import colors from '../common/colors';
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd

// To handle one plus issue, we are adding two spaces at the end of text. This will cause center alignment issue
// so in such places use Text from react-native
const CustomText = (props) => {
  return (
    <Text {...props} style={[styles.style, props.style]}>
      {props.children}
      {`  `}
    </Text>
  );
};

const styles = StyleSheet.create({
  style: {
<<<<<<< HEAD
    color: COLORS.black
=======
    color: colors.BLACK
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  }
});

CustomText.propTypes = {
  style: Text.propTypes.style
};

export default CustomText;
