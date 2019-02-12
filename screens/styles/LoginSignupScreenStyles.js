import { StyleSheet } from 'react-native'
import {Colors, Metrics, Fonts} from '../../constants'

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.background,
  },
  contentContainer: {
    flexGrow: 1, justifyContent: 'center', alignItems: 'center'
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.snow,
    margin: Metrics.baseMargin,
    borderRadius: 4,
    minWidth: 360,
    maxWidth: 440,
    borderWidth: 1,
    borderColor: '#D5DEE5',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    //marginTop: 50
  },
  row: {
    paddingTop: Metrics.baseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    minWidth: 320

  },
  titleRow: {
    paddingTop: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    minWidth: 320
  },
  formLine: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.cloud,
    paddingBottom: Metrics.doubleBaseMargin
  },
  formTitle: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.condensed,
    textAlign: 'center',
    color: Colors.charcoal
  },
  rowLabel: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.condensed,
    color: Colors.charcoal
  },
  textInput: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.base,
    height: 30,
    color: Colors.coal,
    borderBottomWidth: 1,
    borderBottomColor: Colors.silver,
    minWidth: 220
  },
  forgotPasswordRow: {
    paddingBottom: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    flexDirection: 'row',
    minWidth: 320
  },
  forgotPasswordText: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.medium,
    color: Colors.charcoal,
  },
  warningTexPasswordRecovery: {
    fontSize: 12,
    color: Colors.darkMatPurple,
    textAlign: 'left',
    minWidth: 320,
    paddingHorizontal: Metrics.doubleBaseMargin
  },
  warningTex: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.base,
    color: Colors.darkMatPurple,
    paddingTop: Metrics.baseMargin
  },
  warningTexForCreate: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.base,
    color: Colors.fire,
    paddingTop: Metrics.baseMargin,
    textAlign: 'center',
    alignSelf: 'center'
  },
  textInputReadonly: {
    height: 30,
    color: Colors.steel
  },
  loginRow: {
    paddingBottom: Metrics.smallMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    flexDirection: 'row',
    minWidth: 320

  },
  warningRow: {
    paddingBottom: Metrics.smallMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    flexDirection: 'row'
  },
  warningRowForPasswordRecovery: {
    paddingHorizontal: Metrics.doubleBaseMargin,
    flexDirection: 'row'
  },
  warningRowForCreate: {
    paddingBottom: Metrics.smallMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  loginButtonWrapper: {
    flex: 1, height: 36
  },
  loginButtonLeft: {
    flex: 1,
    borderColor: Colors.darkMatPurple,
    backgroundColor: Colors.medMatPurple,
    padding: 6,
    borderWidth: 1,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
    borderRightWidth: 0,
    justifyContent: 'center'
  },
  loginButtonRight: {
    flex: 1,
    borderColor: Colors.medMatPurple,
    backgroundColor: Colors.lightMatPurple,
    padding: 6,
    borderWidth: 1,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
    borderLeftWidth: 0,
    justifyContent: 'center'
  },
  loginButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.darkMatPurple,
    backgroundColor: Colors.medMatPurple,
    padding: 6,
    borderRadius: 2,
    justifyContent: 'center'

  },
  loginText: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.medium,
    textAlign: 'center',
    color: Colors.snow
  },
  loginTextBold: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.cbold,
    textAlign: 'center',
    color: Colors.ricePaper
  },
  topLogo: {
    width: 147 / 1.5,
    height: 43 / 1.5,
    marginBottom: 20
  },
  inputStyle: {
    color: Colors.charcoal,
    fontSize: 12
  },
  cancelText: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.medium,
    color: Colors.medMatPurple
  }
})
