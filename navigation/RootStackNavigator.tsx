// navigation/RootStackNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import SignUpScreen from '../screens/SignUpScreen';
import LogInScreen from '../screens/LogInScreen';
import DetailsScreen from '../screens/DetailsScreen'; // Example details screen

const Stack = createStackNavigator();

const RootStackNavigator: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    <Stack.Screen name="LogIn" component={LogInScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} /> {/* Adjust to your actual Details screen */}
  </Stack.Navigator>
);

export default RootStackNavigator;
