import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import Home from './index'; // Import your Home screen
import AllImagesScreen from './images'; // Import the new screen
import PaymentScreen from './PaymentScreen';

// Define your stack param list
type RootStackParamList = {
  Home: undefined;
  AllImages: { category: string };
  PaymentScreen: {
    courseTitle: string;
    courseDescription: string;
    courseImg: string;
    coursePrice: number;
  }; // Adjust according to your route params
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
