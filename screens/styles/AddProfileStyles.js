import { StyleSheet, Platform } from "react-native";
import {Colors, Metrics, Fonts} from '../../constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(244, 244, 244)',
    paddingTop: 10
  },
  contentContainer:{
  },
  inputRow: {
    flexDirection: "row",
    marginBottom: 10
  },
  input: {
    minWidth: 220,
    height: 40,
    backgroundColor: "white",
    paddingLeft: 10,
    paddingRight: 10,
    color: Colors.charcoal,
    borderColor: Colors.gray, borderWidth: 1,

  },
 
  button: {
    alignSelf: 'center',
    backgroundColor: Colors.vividBlue,
    borderColor: Colors.lighterMatBlue,
    marginBottom: 40,
    height: 40,
    width: 120
  },
  textArea: {
    minWidth: 220,
    height: 140,
    backgroundColor: "white",
    paddingLeft: 10,
    paddingRight: 10,
    color: Colors.charcoal

  },
  inputCol: {
    flexDirection: 'column',
    width: 220
  },
  error: {
    color: Colors.pastelRed,
    fontSize: 12,
    fontWeight: "400",
    paddingBottom: 10
    },
    activityInput: {
      padding: 6, borderColor: Colors.gray, borderWidth: 1, width: 220, height: 80, marginBottom: 5, backgroundColor: Colors.snow
    },
    activeList: {
      backgroundColor: Colors.vividBlue,
    },
    activeListText: {
      color: Colors.snow,
    },
    listHeader: {
      fontSize: 14,
      fontWeight: '600',
      fontFamily: Platform.OS == 'ios' ? Fonts.typeIOS.condensed :  Fonts.typeAndroid.condensed,

    },
    listText: {
      fontSize: 14,
      fontWeight: '400',
      fontFamily: Platform.OS == 'ios' ? Fonts.typeIOS.base :  Fonts.typeAndroid.base,



    },
    multipleInputRow: {
      flexDirection: "row",
      backgroundColor: 'gray'

    },
    buttonGroupText: {
      fontFamily: Platform.OS == 'ios' ? Fonts.typeIOS.base :  Fonts.typeAndroid.base,
    fontSize: Fonts.size.medium, 
    }
});
