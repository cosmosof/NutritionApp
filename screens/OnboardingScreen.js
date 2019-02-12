import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  AsyncStorage
} from "react-native";
import { Auth } from "aws-amplify";

export default class OnboardingScreen extends React.Component {
  constructor() {
    super();
    this._userAuthAsync();
  }
  _userAuthAsync = async () => {
    try {
      const user = await AsyncStorage.getItem("user");
      if (user) return this.props.navigation.navigate("Main");
    } catch (err) {
      console.warn(err);
    }
  };
  _navigateHandler = () => {
    this.props.navigation.navigate("Main");
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={{ margin: 20 }}>Onboarding Screen Content</Text>
        <Button title="Next!" onPress={this._navigateHandler} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
