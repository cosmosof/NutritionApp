import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage
} from "react-native";
import { WebBrowser } from "expo";
import { Auth } from "aws-amplify";
import API, { graphqlOperation } from "@aws-amplify/api";
import { listNutritions } from "../src/graphql/queries";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { MonoText } from "../components/StyledText";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor() {
    super();
    this._saveUserAsync();
    this.state = {
      profileData: []
    };
  }
  async componentDidMount() {
    const profileData = await API.graphql(graphqlOperation(listNutritions));
    this.setState({ profileData: profileData.data.listNutritions.items });
  }
  _signOut = async () => {
    try {
      await AsyncStorage.clear();
      await Auth.signOut();
      this.props.navigation.navigate("Onboarding");
    } catch (err) {
      console.warn(err);
    }
  };

  _saveUserAsync = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser({ bypassCache: false });
      if (user.username) {
        try {
          await AsyncStorage.setItem("user", user.username);
        } catch (err) {
          console.warn(err);
        }
      }
    } catch (err) {
      console.warn(err);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Card title="Profiles">
            {this.state.profileData &&
              this.state.profileData.map((p, i) => (
                <ListItem
                  key={i}
                  title={p.name}
                  subtitle={
                    <View key={i} style={{ margin: 5 }}>
                      <Text>{p.dob}</Text>
                      <Text>{p.profileId}</Text>
                      <Text>{p.gender}</Text>
                      <Text>{p.weight}</Text>
                      <Text>{p.height}</Text>
                      <Text>{p.activity_level}</Text>
                    </View>
                  }
                />
              ))}
          </Card>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
});
