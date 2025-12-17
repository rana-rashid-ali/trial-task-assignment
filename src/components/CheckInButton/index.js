import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CheckInButton = ({onPress, text = 'Check-In Now'}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.wrapper}
      onPress={onPress}>
      <LinearGradient
        colors={['#f4c542', '#f5a623']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'stretch',
  },
  button: {
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
  },
  text: {
    color: '#0b1426',
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
});

export default CheckInButton;
