import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../app/index'; // Ensure this path is correct
import Dashboard from '../app/Dashboard'; // Ensure this path is correct
import { RootStackParamList } from './types'; // Import types

const Stack = createStackNavigator<RootStackParamList>(); // Create a stack navigator with type

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ title: 'Dashboard' }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
