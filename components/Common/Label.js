// @flow

import * as React from 'react';
import {Text} from 'react-native';

import styles from './Styles/LabelStyles';

type Props = {
  children?: string,
  styles?: Object,
  title?: string,
  textStyle?: Object,
};

export default function Label(props: Props) {
  const {children, textStyle, title} = props;
  const {text} = styles;

  return <Text style={[text, textStyle]}>{title || children || ''}</Text>;
}

Label.defaultProps = {
  children: undefined,
  styles: undefined,
  textStyle: undefined,
  title: undefined,
};
