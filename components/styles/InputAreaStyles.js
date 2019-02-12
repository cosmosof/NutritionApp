import { StyleSheet } from 'react-native';
import {Colors, Fonts} from '../../constants'

export default StyleSheet.create({
  textInput: {
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.small, 
    height: 36,
    color: Colors.coal,
    padding: 10,
    width: 200,
    borderWidth: 1,
    borderColor: Colors.steel,
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
