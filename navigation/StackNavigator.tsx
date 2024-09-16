// StackNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '~/app/index'; // Ensure this path is correct
import { RootStackParamList } from '~/navigation/types'; // Adjust the path if needed
import CourseDetail from '~/app/CourseDetail';
import CourseOverview from '~/app/CourseOverview';

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CourseDetail" component={CourseDetail} />
      
      {/* Add other screens here if necessary */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
