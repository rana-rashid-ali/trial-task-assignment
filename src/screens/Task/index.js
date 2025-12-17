import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
const rewards = [
  {
    title: 'Legendary Rewards',
    subtitle: 'Upgrade to earn',
    amount: '$1,634',
    colors: ['#1946d2', '#102c8f'],
    badge: '#f7c948',
    blurred: true,
  },
  {
    title: 'Phantom Rewards',
    subtitle: 'Est. payout • 3 Passes',
    amount: '$634',
    colors: ['#c03cff', '#5831f8'],
    badge: '#ea8bf5',
    highlight: true,
  },
  {
    title: 'Oracle Rewards',
    subtitle: 'Lifetime pass required',
    amount: '$10,634',
    colors: ['#1946d2', '#102c8f'],
    badge: '#e7e9f9',
  },
  {
    title: 'Creator Rewards',
    subtitle: 'Earn FREE Gold Coins',
    amount: '333',
    colors: ['#107cd3', '#0755b5'],
    badge: '#5ee3ff',
  },
];

const Task = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#0b182b" />
      <LinearGradient
        colors={['#111f3a', '#0b1426']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          <Text style={styles.streakTitle}>22-day streak</Text>
          <Text style={styles.subtitle}>
            Keep a <Text style={styles.highlight}>60% or higher</Text> check-in
            rate to qualify for monthly ad-revenue rewards from the carousel
            above. View your estimated payout below.
          </Text>

          <View style={styles.statsRow}>
            <LinearGradient
              colors={['#0f2d70', '#0c255d']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.statCard}>
              <Text style={styles.statValue}>0%</Text>
              <Text style={styles.statLabel}>Check-In rate</Text>
            </LinearGradient>

            <View style={styles.statDivider} />

            <LinearGradient
              colors={['#0f2d70', '#0c255d']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.statCard}>
              <Text style={[styles.statValue, styles.blueValue]}>33</Text>
              <Text style={styles.statLabel}>Longest streak</Text>
            </LinearGradient>
          </View>

          <View style={styles.rewardList}>
            {rewards.map(item => (
              <LinearGradient
                key={item.title}
                colors={item.colors}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={[
                  styles.rewardCard,
                  item.highlight && styles.rewardHighlight,
                  item.blurred && styles.rewardBlurred,
                ]}>
                <View style={styles.rewardTextWrap}>
                  <View
                    style={[
                      styles.crown,
                      {backgroundColor: item.badge},
                      item.highlight && styles.crownHighlight,
                    ]}
                  />
                  <View>
                    <Text style={styles.rewardTitle}>{item.title}</Text>
                    <Text style={styles.rewardSubtitle}>{item.subtitle}</Text>
                  </View>
                </View>
                <Text
                  style={[
                    styles.rewardAmount,
                    item.highlight && styles.rewardAmountHighlight,
                  ]}>
                  {item.amount}
                </Text>
              </LinearGradient>
            ))}
          </View>

          <View style={styles.nextCheckin}>
            <Text style={styles.nextCheckinText}>
              ⏱ Next Check-in{' '}
              <Text style={styles.nextCheckinTime}>00:00:00</Text>
            </Text>
          </View>

          <TouchableOpacity activeOpacity={0.85} style={styles.ctaWrapper}>
            <LinearGradient
              colors={['#f4c542', '#f5a623']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.cta}>
              <Text style={styles.ctaText}>Check-In Now</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Task;
