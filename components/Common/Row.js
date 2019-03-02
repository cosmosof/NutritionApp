// @flow

import * as React from 'react';
import {View} from 'react-native';

import styles from './Styles/RowStyles';

type Props = { children?: React.Node, style?: Object };

export default function Row(props: Props) {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
}

Row.defaultProps = {
  children: undefined,
  style: undefined,
};
