import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import OnboardingNavigator from './OnboardingNavigator';

export default createAppContainer(createSwitchNavigator({
  Onboarding: OnboardingNavigator,
  Main: MainTabNavigator,
}));

