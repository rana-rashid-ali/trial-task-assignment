import React from 'react';
import {SafeAreaView, StatusBar, View, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HeaderSection from '../../components/HeaderSection';
import StatsSection from '../../components/StatsSection';
import RewardCard from '../../components/RewardCard';
import NextCheckInTimer from '../../components/NextCheckInTimer';
import CheckInButton from '../../components/CheckInButton';
import {styles} from './styles';
import CustomButton from '../../components/CheckInButton';

const rewards = [
  {
    title: 'Legendary Rewards',
    subtitle: 'Upgrade to earn',
    amount: '$1,634',
    gradientColors: ['#1946d2', '#102c8f'],
    crownColor: '#f7c948',
    isBlurred: true,
    amountColor: '#f7c948',
  },
  {
    title: 'Phantom Rewards',
    subtitle: 'Est. payout • 3 Passes',
    amount: '$634',
    gradientColors: ['#c03cff', '#5831f8'],
    crownColor: '#ea8bf5',
    isHighlighted: true,
    amountColor: '#ea8bf5',
  },
  {
    title: 'Oracle Rewards',
    subtitle: 'Lifetime pass required',
    amount: '$10,634',
    gradientColors: ['#1946d2', '#102c8f'],
    crownColor: '#e7e9f9',
    amountColor: '#e7e9f9',
  },
  {
    title: 'Creator Rewards',
    subtitle: 'Earn FREE Gold Coins',
    amount: '333',
    gradientColors: ['#107cd3', '#0755b5'],
    crownColor: '#5ee3ff',
    amountColor: '#56d6ff',
  },
];

const Task = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={['#1946d2', '#102c8f']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0.3}}
        style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          <HeaderSection />

          <StatsSection checkInRate={0} longestStreak={33} />

          <View style={styles.rewardList}>
            {rewards.map(item => (
              <RewardCard
                key={item.title}
                title={item.title}
                subtitle={item.subtitle}
                amount={item.amount}
                crownColor={item.crownColor}
                gradientColors={item.gradientColors}
                isHighlighted={item.isHighlighted}
                isBlurred={item.isBlurred}
                amountColor={item.amountColor}
              />
            ))}
          </View>

          <NextCheckInTimer time="00:00:00" />

          <CustomButton text={'Check-In-Now'} />
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Task;
