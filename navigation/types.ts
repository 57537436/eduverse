// navigation/types.ts

import { ReactNode } from "react";

export type Course = {
  instructor: ReactNode;
  instructorExperience: ReactNode;
  instructorPerformance: ReactNode;
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
  index: undefined; 
  Details: { category: string };
  AllProgrammingLanguages: undefined;
  ComputerScienceDetails: undefined;
  CourseDetail: { course: Course };
  AI_Courses: undefined;
  CourseOverview: { course: string }; 
  PaymentScreen: { courseTitle: string; 
    courseDescription: string; 
    courseImg: string; 
    coursePrice: number;  };
  CourseDetails: { course: any };
  SignUpScreen: undefined;
  LogInScreen: undefined;
  Profile: undefined;
  AccountScreen: undefined; 
  PasswordChangeScreen: undefined;
  place: undefined;

  
  EnrolledModules: {
    modules: {
      id: number;
      name: string;
      description: string;
      image: any;
      progress: number;
    }[];
  };
  personalEdit: { user: 
    { name: 
      string; surname: 
      string; email: 
      string; contactNumbers: 
      string[] } }; 
  passwordChange: undefined;
  personal: undefined; 
  account: undefined;
  EditPersonalScreen: 
  { user: 
    { name: 
      string; surname: 
      string; email: 
      string; contactNumbers: 
      string[] } }; 
};
