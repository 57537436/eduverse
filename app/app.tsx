// app/App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AllProgrammingLanguages from './AllProgrammingLanguages';
import CourseOverview from './CourseOverview';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AllProgrammingLanguages">
        <Stack.Screen name="AllProgrammingLanguages" component={AllProgrammingLanguages} />
        <Stack.Screen name="CourseOverview" component={CourseOverview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
