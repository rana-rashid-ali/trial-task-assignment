import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const StatsSection = ({checkInRate, longestStreak}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.statsLabel}>STATS</Text>
      <View style={styles.statsRow}>
        <LinearGradient
          colors={['#0f2d70', '#0c255d']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.statCard}>
          <Text style={styles.statValue}>{checkInRate}%</Text>
          <Text style={styles.statLabel}>Check-In rate</Text>
        </LinearGradient>

        <View style={styles.statDivider} />

        <LinearGradient
          colors={['#0f2d70', '#0c255d']}
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
    marginBottom: 24,
  },
  statsLabel: {
    color: '#ea8bf5',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 8,
    paddingLeft: 4,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(16, 45, 96, 0.6)',
    borderRadius: 24,
    padding: 14,
  },
  statCard: {
    flex: 1,
    borderRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 14,
    alignItems: 'center',
  },
  statDivider: {
    width: 1,
    height: '70%',
    backgroundColor: 'rgba(182, 191, 218, 0.2)',
    marginHorizontal: 10,
  },
  statValue: {
    color: '#f4c542',
    fontSize: 28,
    fontWeight: '800',
  },
  statLabel: {
    color: '#b6bfda',
    fontSize: 14,
    marginTop: 6,
  },
  blueValue: {
    color: '#56d6ff',
  },
});

export default StatsSection;
