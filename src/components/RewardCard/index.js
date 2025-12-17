import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

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
    <TouchableOpacity activeOpacity={0.7}>
      <LinearGradient
        colors={gradientColors}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={[styles.card, isHighlighted && styles.highlighted]}>
        <View style={styles.content}>
          <Image
            source={require('../../assets/icons/crown.png')}
            style={[
              styles.crown,
              {tintColor: crownColor},
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
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: wp(4.5),
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(182, 191, 218, 0.2)',
    marginBottom: hp(1.5),
  },
  highlighted: {
    shadowColor: '#c03cff',
    shadowOffset: {width: 0, height: hp(1.2)},
    shadowOpacity: 0.35,
    shadowRadius: hp(2.5),
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
    width: wp(9),
    height: hp(3.2),
    borderRadius: wp(1.5),
    marginRight: wp(3),
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: hp(2),
    fontWeight: '700',
  },
  subtitle: {
    color: '#cfd5ec',
    fontSize: hp(1.6),
    marginTop: hp(0.25),
  },
  amount: {
    fontSize: hp(2.25),
    fontWeight: '800',
  },
  amountBlurred: {
    opacity: 0.2,
  },
  crownHighlighted: {
    shadowColor: '#ea8bf5',
    shadowOffset: {width: 0, height: hp(0.75)},
    shadowOpacity: 0.5,
    shadowRadius: hp(1.2),
    elevation: 5,
  },
});

export default RewardCard;
