// navigation/RootStackNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../app/index';
import SignUpScreen from '../app/SignUpScreen';
import LogInScreen from '../app/LogInScreen';
import AllProgrammingLanguages from '~/app/AllProgrammingLanguages';
import ComputerScienceDetails from '~/app/ComputerScienceDetails';
import CourseDetail from '~/app/CourseDetail';
const Stack = createStackNavigator();

const RootStackNavigator: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    <Stack.Screen name="LogIn" component={LogInScreen} />
    <Stack.Screen name='AllProgrammingLanguages' component={AllProgrammingLanguages} />
    <Stack.Screen name='ComputerScienceDetails' component={ComputerScienceDetails} />
    <Stack.Screen name="ComputerScienceDetails" component={ComputerScienceDetails} />
    <Stack.Screen name="CourseDetail" component={CourseDetail} />
    
  </Stack.Navigator>
);

export default RootStackNavigator;
