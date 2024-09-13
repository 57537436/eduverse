// navigation/types.ts

export type Course = {
  id: string;
  name: string;
  description: string;
  image: any; // Use a more specific type if you have one, such as `number` for image resources
  price: string;
};

export type RootStackParamList = {
  Home: undefined;
  Details: { category: string };
  AllProgrammingLanguages: undefined;
  ComputerScienceDetails: undefined;
  CourseDetail: { course: Course };
  AI_Courses: undefined;
  CourseDetails: {course: any}

};
