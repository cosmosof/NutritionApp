import { StyleSheet, Platform } from "react-native";
import {Colors, Metrics, Fonts} from '../../constants'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.gray,
    flex: 1,
    paddingTop: 20
  }, 
  navbarHeader: {
    color: Colors.darkMatBlue2,
    fontSize: 18,
    fontWeight: '600',
    fontFamily: Platform.OS == 'ios' ? Fonts.typeIOS.condensed : Fonts.typeAndroid.condensed,
    paddingLeft: Platform.OS == 'ios' ? 0 : 10,
  },
});
