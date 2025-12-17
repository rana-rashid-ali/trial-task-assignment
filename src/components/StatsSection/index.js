import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const StatsSection = ({checkInRate, longestStreak}) => {
  return (
    <View style={styles.container}>
      <View style={styles.statsRow}>
        <LinearGradient
          colors={['#1946d2', '#102c8f']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.statCard}>
          <Text style={styles.statValue}>{checkInRate}%</Text>
          <Text style={styles.statLabel}>Check-In rate</Text>
        </LinearGradient>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: hp(4),
            width: wp(20),
          }}>
          <Text style={styles.statsLabel}>STATS</Text>

          <View style={styles.statDivider} />
        </View>
        <LinearGradient
          colors={['#1946d2', '#102c8f']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.statCard}>
          <Text style={[styles.statValue, styles.blueValue]}>
            {longestStreak}
          </Text>
          <Text style={styles.statLabel}>Longest streak</Text>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: hp(4),
    //    backgroundColor: 'rgba(0,0,0,0)',
  },
  statsLabel: {
    color: '#ea8bf5',
    fontSize: hp(1.5),
    fontWeight: '700',
    marginBottom: hp(1),
    paddingLeft: wp(1),
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: wp(6),
    padding: wp(3.5),
  },
  statCard: {
    flex: 1,
    borderRadius: wp(5),
    paddingVertical: hp(2.2),
    paddingHorizontal: wp(3.5),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'white',
    shadowOffset: {width: 0, height: hp(0.5)},
    shadowOpacity: 1,
    shadowRadius: hp(1.2),
    elevation: 5,
  },
  statDivider: {
    width: wp(0.25),
    height: '70%',
    backgroundColor: 'rgba(182, 191, 218, 0.2)',
    marginHorizontal: wp(2.5),
  },
  statValue: {
    color: '#FFD740',
    fontSize: hp(3.5),
    fontWeight: '800',
  },
  statLabel: {
    color: '#D1D1E7',
    fontSize: hp(1.75),
    marginTop: hp(0.75),
  },
  blueValue: {
    color: '#56d6ff',
  },
});

export default StatsSection;
