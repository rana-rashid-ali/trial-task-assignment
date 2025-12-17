import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0b1426',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  scrollContent: {
    paddingBottom: 30,
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
    marginBottom: 20,
  },
  highlight: {
    color: '#f4c542',
    fontWeight: '700',
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(16,45,96,0.6)',
    borderRadius: 24,
    padding: 14,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    borderRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 14,
  },
  statDivider: {
    width: 1,
    height: '70%',
    backgroundColor: 'rgba(182,191,218,0.2)',
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
  rewardList: {
    gap: 12,
    marginBottom: 26,
  },
  rewardCard: {
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0f2d70',
  },
  rewardHighlight: {
    shadowColor: '#c03cff',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.35,
    shadowRadius: 20,
    elevation: 8,
  },
  rewardBlurred: {
    opacity: 0.6,
  },
  rewardTextWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  crown: {
    width: 36,
    height: 26,
    borderRadius: 6,
  },
  crownHighlight: {
    shadowColor: '#ea8bf5',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  rewardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  rewardSubtitle: {
    color: '#cfd5ec',
    fontSize: 13,
    marginTop: 2,
  },
  rewardAmount: {
    color: '#f4c542',
    fontSize: 18,
    fontWeight: '800',
  },
  rewardAmountHighlight: {
    color: '#ff78d7',
  },
  nextCheckin: {
    alignItems: 'center',
    marginBottom: 20,
  },
  nextCheckinText: {
    color: '#cfd5ec',
    fontSize: 14,
  },
  nextCheckinTime: {
    color: '#f4c542',
    fontWeight: '700',
  },
  ctaWrapper: {
    alignSelf: 'stretch',
  },
  cta: {
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
  },
  ctaText: {
    color: '#0b1426',
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
});
