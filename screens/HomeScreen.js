import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
  SafeAreaView,
  FlatList
} from "react-native";
import { WebBrowser } from "expo";
import Auth from "@aws-amplify/auth";
import API, { graphqlOperation } from "@aws-amplify/api";
import { listNutritions } from "../src/graphql/queries";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { Connect } from "aws-amplify-react-native";
import ListCard from "../components/HomeScreen/ListCard";
import Center from "../components/Common/Center";
import AlertMessage from "../components/Common/AlertMessage";
import Label from "../components/Common/Label";
import { MonoText } from "../components/StyledText";
import { Colors, Fonts, ActivityLevel } from "../constants";
import styles from "./styles/HomeScreenStyles";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <Label textStyle={styles.navbarHeader} title="Nutrition Profiles" />
    )
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
      <SafeAreaView style={styles.container}>
        <Connect query={graphqlOperation(listNutritions)}>
          {({
            data: { listNutritions },
            loading,
            error
          }) => {
            if (error) {
              return (
                <Center>
                  <AlertMessage show title="An error occured" />
                </Center>
              );
            }
            if (loading || !listNutritions) {
              return (
                <Center>
                  <AlertMessage show title="loading..." />
                </Center>
              );
            }
            if (listNutritions && listNutritions.items.length === 0) {
              return (
                <Center>
                  <AlertMessage show title="Nothing found..." />
                </Center>
              );
            }
            return (
              <FlatList
                data={listNutritions.items}
                keyExtractor={item => item.id}
                //onEndReached={() => console.warn(`onEndReached`)}
                onEndThreshold={0.5}
                //onRefresh={() => refetch()}
                //refreshing={networkStatus === 4}
                renderItem={({ item }) => <ListCard data={item} />}
              />
            );
          }}
        </Connect>
      </SafeAreaView>
    );
  }
}
