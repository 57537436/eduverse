// navigation/types.ts

export type Course = {
  id: string;
  name: string; // Use 'name' instead of 'title'
  description: string;
  image: any; // You can use `number` if you're using static image resources
  price: string;
  lessons?: string[];
  materials?: string[];
  youtubeLink?: string;
};

export type RootStackParamList = {
  Home: undefined; // No parameters for Home screen
  Details: { category: string };
  AllProgrammingLanguages: undefined;
  ComputerScienceDetails: undefined;
  CourseDetail: { course: Course };
  AI_Courses: undefined;
  CourseOverview: { course: string }; // Added this line
  CourseDetails: { course: any };
  SignUpScreen: undefined;
  Profile: undefined;
  AccountScreen: undefined; // Changed 'account' to 'AccountScreen' for consistency
  PasswordChangeScreen: undefined;
  personalEdit: { user: 
    { name: 
      string; surname: 
      string; email: 
      string; contactNumbers: 
      string[] } }; 
  passwordChange: undefined;
  personal: undefined; // Changed 'passwordChange' to 'PasswordChangeScreen' for consistency
  account: undefined;
  EditPersonalScreen: 
  { user: 
    { name: 
      string; surname: 
      string; email: 
      string; contactNumbers: 
      string[] } }; 
};
