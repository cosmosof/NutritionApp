// @flow

import React from 'react';
import {Text} from 'react-native';
import {Colors} from '../../Constants';

import styles from './Styles/TabBarLabelStyles';

type Props = {
  focused: boolean,
  title: string,
  textStyle?: Object,
  styles?: Object,
};

export default function TabBarLabel(props: Props) {
  const {textStyle, title} = props;
  const {text} = styles;

  return (
    <Text style={[text, textStyle, {color: props.focused ? Colors.vividBlue : Colors.tabIconDefault}]}>{title}</Text>
  );
}

TabBarLabel.defaultProps = {
  styles: undefined,
  textStyle: undefined,
};
