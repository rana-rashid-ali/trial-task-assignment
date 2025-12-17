import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const NextCheckInTimer = ({time = '00:00:00'}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/icons/timer.png')} />
      <Text style={styles.text}>
        {'  '}Next Check-in <Text style={styles.time}>{time}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#cfd5ec',
    fontSize: hp(1.5),
  },
  time: {
    color: '#f4c542',
    fontWeight: '700',
  },
  timerIcon: {
    width: wp(4),
    height: hp(2),
    marginRight: wp(1),
  },
});

export default NextCheckInTimer;
