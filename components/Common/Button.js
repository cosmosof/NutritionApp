// @flow

import React from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';
import styles from './Styles/ButtonStyles';

type Props = {
  buttonStyle?: Object,
  children?: string,
  disabled?: boolean,
  onPress: Function,
  styles?: Object,
  textStyle?: Object,
  title?: string,
};

export default function Button(props: Props) {
  const {container, disabledStyle, text} = styles;
  const {buttonStyle, children, disabled, onPress, textStyle, title} = props;

  return (
    <TouchableHighlight
      disabled={disabled}
      onPress={onPress}
      style={[container, buttonStyle, disabled && disabledStyle]}
      underlayColor="transparent"
    >
      <Text style={[text, textStyle]}>{children || title || ''}</Text>
    </TouchableHighlight>
  );
}

Button.defaultProps = {
  buttonStyle: undefined,
  children: undefined,
  disabled: false,
  styles: undefined,
  textStyle: undefined,
  title: undefined,
};
