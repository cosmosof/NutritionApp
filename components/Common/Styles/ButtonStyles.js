import {StyleSheet, Platform} from 'react-native';
import {Colors, Fonts} from './../../../constants';

export default StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    maxHeight: 40,
    padding: 8,
  },
  disabledStyle: {
    backgroundColor: Colors.disabledBackground,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontFamily: Platform.OS == 'ios' ? Fonts.typeIOS.condensed : Fonts.typeAndroid.condensed,
    textAlign: 'center',
  },
});
