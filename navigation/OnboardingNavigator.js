import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import OnboardingScreen from '../screens/OnboardingScreen';

const OnboardingNavigator = createStackNavigator({ Onboarding: OnboardingScreen }, {
  headerMode: 'none',
});

export default OnboardingNavigator