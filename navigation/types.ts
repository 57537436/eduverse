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
  Home: undefined;
  Details: { category: string };
  AllProgrammingLanguages: undefined;
  ComputerScienceDetails: undefined;
  CourseDetail: { course: Course };
  AI_Courses: undefined;
  CourseOverview: { course: string }; // Add this line
  CourseDetails: { course: any };
  SignUpScreen: undefined;
  Profile: undefined;
};
