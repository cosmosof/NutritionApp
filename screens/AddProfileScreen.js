import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { Card, ListItem, Button, Icon } from "react-native-elements";

export default class AddProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Add Profile"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Button title="Sign out!" onPress={this._signOut} />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
