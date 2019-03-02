// @flow

import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '../../Constants/Colors';

type Props = { focused: boolean, name: string };

export default function TabBarIcon(props: Props) {
  return (
    <Icon
      color={props.focused ? Colors.vividBlue : Colors.tabIconDefault}
      name={props.name}
      size={26}
      style={{marginBottom: -3}}
    />
  );
}
