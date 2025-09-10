import { TouchableOpacity, Text } from 'react-native';
import React from 'react';

<<<<<<< HEAD
import {COLORS} from '../Constant/Colors';
=======
import colors from '../common/colors';
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd

const CustomButton = (props) => {
  const style = {};
  if (props.type === 'fill') {
<<<<<<< HEAD
    style.backgroundColor = COLORS.blue;
    style.borderWidth = 0;
  } else if (props.type === 'default') {
    style.borderColor = COLORS.blue;
=======
    style.backgroundColor = colors.BLUE;
    style.borderWidth = 0;
  } else if (props.type === 'default') {
    style.borderColor = colors.BLUE;
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  } else if (props.type === 'link') {
    style.borderWidth = 0;
  }
  return (
    <TouchableOpacity
      {...props}
      style={[
        {
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16,
          paddingRight: 16,
          borderWidth: 1,
          borderRadius: 3,
          alignSelf: 'flex-start',
        },
        style,
        props.buttonStyle,
        props.disabled ? { opacity: 0.5 } : {},
      ]}>
<<<<<<< HEAD
      <Text style={[{ textTransform: 'uppercase', fontSize: 12, color: COLORS.blue }, props.textStyle]}>{props.text}</Text>
=======
      <Text style={[{ textTransform: 'uppercase', fontSize: 12, color: colors.BLUE }, props.textStyle]}>{props.text}</Text>
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
    </TouchableOpacity>
  );
};

CustomButton.defaultProps = {
  type: 'default',
  disabled: false,
};

CustomButton.propTypes = {
  type: ['default', 'fill', 'link'],
  buttonStyle: {},
  textStyle: {},
  disabled: false,
  onPress: () => {},
  text: '',
};

export default CustomButton;

