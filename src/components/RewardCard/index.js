import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const RewardCard = ({
  title,
  subtitle,
  amount,
  crownColor,
  gradientColors,
  isHighlighted = false,
  isBlurred = false,
  amountColor = '#fff',
}) => {
  return (
    <LinearGradient
      colors={gradientColors}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={[
        styles.card,
        isHighlighted && styles.highlighted,
        isBlurred && styles.blurred,
      ]}>
      <View style={styles.content}>
        <View
          style={[
            styles.crown,
            {backgroundColor: crownColor},
            isHighlighted && styles.crownHighlighted,
          ]}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
      <Text
        style={[
          styles.amount,
          {color: amountColor},
          isBlurred && styles.amountBlurred,
        ]}>
        {amount}
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0f2d70',
    marginBottom: 12,
  },
  highlighted: {
    shadowColor: '#c03cff',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.35,
    shadowRadius: 20,
    elevation: 8,
  },
  blurred: {
    opacity: 0.6,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  crown: {
    width: 36,
    height: 26,
    borderRadius: 6,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  subtitle: {
    color: '#cfd5ec',
    fontSize: 13,
    marginTop: 2,
  },
  amount: {
    fontSize: 18,
    fontWeight: '800',
  },
  amountBlurred: {
    opacity: 0.7,
  },
  crownHighlighted: {
    shadowColor: '#ea8bf5',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
});

export default RewardCard;
