import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../app/index'; // Ensure correct path


const Stack = createStackNavigator();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
