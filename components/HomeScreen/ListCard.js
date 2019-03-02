// @flow

import * as React from 'react';
import {Text, View} from 'react-native';
import styles from './Styles/ListCardStyles';

type Props = { data: Object, styles: Object };

export default function ListCard(props: Props) {
  const {container, value, label, oddRow, row} = styles;
  const {name, id, gender, weight, key, height, activity_level} = props.data;
  return (
    <View
      key={key}
      style={container}
    >
      <View style={oddRow}>
        <Text style={label}>Name </Text>
        <Text style={value}> {name} </Text>
      </View>
      <View style={row}>
        <Text style={label}>Gender </Text>
        <Text style={value}> {gender} </Text>
      </View>
      <View style={oddRow}>
        <Text style={label}>Weight</Text>
        <Text style={value}> {weight} </Text>
      </View>
      <View style={row}>
        <Text style={label}>Height</Text>
        <Text style={value}> {height} </Text>
      </View>
      <View style={oddRow}>
        <Text style={label}>Activity Level</Text>
        <Text style={value}> {activity_level} </Text>
      </View>
    </View>
  );
}
