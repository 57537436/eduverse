// navigation/RootStackNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../app/index';
import SignUpScreen from '../app/SignUpScreen';
import LogInScreen from '../app/LogInScreen';
import AllProgrammingLanguages from '~/app/AllProgrammingLanguages';
import ComputerScienceDetails from '~/app/ComputerScienceDetails';
import CourseDetail from '~/app/CourseDetail';
import CourseDetails from '~/app/CourseDetails';
import AI_Courses from '~/app/AI_Courses';
import CourseOverview from '~/app/CourseOverview';
import Profile from '~/app/Profile';
import AccountScreen from '../app/account';
import ChangePasswordScreen from '../app/passwordChange';

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
    <Stack.Screen name="AI_Courses" component={AI_Courses} />
    <Stack.Screen name="CourseDetails" component={CourseDetails} />
    <Stack.Screen name="CourseOverview" component={CourseOverview} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="passwordChange" component={ChangePasswordScreen} />

  </Stack.Navigator>
);

export default RootStackNavigator;
