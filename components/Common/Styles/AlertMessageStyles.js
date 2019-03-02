import {StyleSheet} from 'react-native';
import {Colors, Fonts} from './../../../constants';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginVertical: 10,
  },
  contentContainer: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  icon: {
    color: Colors.steel,
  },
  message: {
    color: Colors.steel,
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.regular,
    fontWeight: 'bold',
    marginTop: 10,
    marginHorizontal: 10,
    textAlign: 'center',
  },
});
