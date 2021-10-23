import { StyleSheet } from 'react-native';
import { FONTS } from '../../theme';

export const styles = StyleSheet.create({
  container: { 
    flex: 1,
  },
  button: {
    height: 48,
    width: "100%",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "center",
    textAlign: "center",
  },
  title: {
    fontSize: 14,
    fontFamily: FONTS.BOLD,
  },
  icon:{
    marginRight: 12,
  }
});