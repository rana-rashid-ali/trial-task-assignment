import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#101C3A',
  },
  container: {
    flex: 1,
    padding: wp(4),
  },
  scrollContent: {
    paddingBottom: hp(2),
  },
  rewardList: {
    marginBottom: hp(2),
  },
});
