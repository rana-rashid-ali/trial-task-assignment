import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NextCheckInTimer = ({time = '00:00:00'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        ⏱ Next Check-in <Text style={styles.time}>{time}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    color: '#cfd5ec',
    fontSize: 14,
  },
  time: {
    color: '#f4c542',
    fontWeight: '700',
  },
});

export default NextCheckInTimer;
