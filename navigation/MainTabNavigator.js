import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { withAuthenticator, AmplifyTheme } from "aws-amplify-react-native";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import AddProfileScreen from "../screens/AddProfileScreen";

const customTheme = {
  ...AmplifyTheme,
  sectionHeader: { ...AmplifyTheme.sectionHeader },
  buttonText: { ...AmplifyTheme.buttonText },
  buttonDisabled: { ...AmplifyTheme.buttonDisabled, borderRadius: 5 }
};


const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-list${focused ? '-box' : ''}`
          : 'md-list'
      }
    />
  ),
};

const AddProfileStack = createStackNavigator({
  AddProfile: AddProfileScreen,
});

AddProfileStack.navigationOptions = {
  tabBarLabel: 'Add Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-add${focused ? '-circle' : ''}` : 'md-add'}
    />
  ),
};


export default withAuthenticator(
  createBottomTabNavigator({
    HomeStack,
    AddProfileStack,
  }),
  false,
  [],
  null,
  customTheme
);
