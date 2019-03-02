import { StyleSheet, Platform } from 'react-native';
import {Colors, Fonts} from '../../constants'

export default StyleSheet.create({
  textInput: {
    fontFamily: Platform.OS == 'ios' ? Fonts.typeIOS.base :  Fonts.typeAndroid.base,
    fontSize: Fonts.size.medium, 
    height: 40,
    color: Colors.coal,
    padding: 10,
    width: 200,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 2,
    backgroundColor: Colors.snow,
    marginBottom: 4
  },
  boxShadow: {
    borderColor: Colors.lightMatBlue,
    shadowColor: Colors.lightMatBlue,
		shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
		shadowRadius: 3,
    elevation: 1
  }
});
