import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../app/index'; // Ensure correct path
import Dashboard from '../app/Dashboard'; // Ensure correct path

const Stack = createStackNavigator();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
      <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: 'Dashboard' }} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
