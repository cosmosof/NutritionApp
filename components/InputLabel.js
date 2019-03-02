import React from "react";
import { Text, Platform } from "react-native";
import PropTypes from "prop-types";
import {Colors, Fonts} from '../constants'

export default (InputLabel = ({ label, containerStyle }) => {
  return (
    <Text
      style={{
        ...containerStyle,
        fontFamily: Platform.OS == 'ios' ? Fonts.typeIOS.condensed :  Fonts.typeAndroid.condensed,
        color: Colors.vividBlue,
        width: 90,
        fontSize: 14,
        fontWeight: "500",
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10
      }}
    >
      {label}
    </Text>
  );
});

InputLabel.propTypes = {
  label: PropTypes.string.isRequired,
  containerStyle: PropTypes.object
};