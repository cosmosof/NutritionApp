import {Platform} from 'react-native';
import {StyleSheet} from 'react-native';
import {Colors, Fonts} from './../../../constants';

export default StyleSheet.create({
  text: {
    fontFamily: Platform.OS == 'ios' ? Fonts.typeIOS.condensed : Fonts.typeAndroid.condensed,
    textAlign: 'center',
  },
});
