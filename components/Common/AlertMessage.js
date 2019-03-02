// @flow

import * as React from 'react';
import {View, Text} from 'react-native';

import styles from './Styles/AlertMessageStyles';

type Props = {
  show?: boolean,
  style?: Object,
  styles?: Object,
  title: string,
};

export default function AlertMessage(props: Props) {
  let messageComponent = null;
  if (props.show) {
    const {title} = props;
    return (
      <View style={[styles.container, props.style]}>
        <View style={styles.contentContainer}>
          <Text
            allowFontScaling={false}
            style={styles.message}
          >
            {title && title.toUpperCase()}
          </Text>
        </View>
      </View>
    );
  }
  return messageComponent;
}

AlertMessage.defaultProps = {
  show: true,
  style: undefined,
  styles: undefined,
};
