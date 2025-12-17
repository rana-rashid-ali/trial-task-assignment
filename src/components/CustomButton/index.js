import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const CustomButton = ({onPress, text = ''}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'stretch',
  },
  button: {
    borderRadius: wp(4.5),
    paddingVertical: hp(2),
    alignItems: 'center',
    backgroundColor: '#FFD740',
  },
  text: {
    color: '#0b1426',
    fontSize: hp(2.25),
    fontWeight: '800',
    letterSpacing: wp(0.075),
  },
});

export default CustomButton;
