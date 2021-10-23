import {StyleSheet} from 'react-native';
import { COLORS } from '../../theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK_SECONDARY,
    paddingTop: getStatusBarHeight() + 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    width: '100%',
    backgroundColor: COLORS.BLACK_SECONDARY,
    color: COLORS.PINK,

  }
});
