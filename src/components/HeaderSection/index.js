import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const HeaderSection = ({
  streakDays = 22,
  description = 'Keep a 60% or higher check-in rate to qualify for monthly ad-revenue rewards from the carousel above. View your estimated payout below.',
  highlightText = '60% or higher',
}) => {
  const parts = description.split(highlightText);

  return (
    <View style={styles.container}>
      <Text style={styles.streakTitle}>{streakDays}-day streak</Text>
      <Text style={styles.subtitle}>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index < parts.length - 1 && (
              <Text style={styles.highlight}>{highlightText}</Text>
            )}
          </React.Fragment>
        ))}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  streakTitle: {
    color: '#eef1ff',
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    color: '#b6bfda',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
  highlight: {
    color: '#c03cff',
    fontWeight: '700',
  },
});

export default HeaderSection;
