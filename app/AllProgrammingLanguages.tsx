import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container } from '~/components/Container';

interface Course {
  name: string;
  description: string;
  price: string;
  image: any;
  lessons?: string[];
  materials?: string[];
  youtubeLink?: string;
}

// Sample course data
const courses: Course[] = [
  {
    name: 'C Programming',
    description: 'Learn the basics of C programming, a foundational language for computer science.',
    price: '$29.99',
    image: require('../assets/c-programming.png'),
  },
  {
    name: 'Java Programming',
    description: 'Master Java programming with this comprehensive course, suitable for all levels.',
    price: '$39.99',
    image: require('../assets/java-programming.jpg'),
  },
  {
    name: 'Python Programming',
    description: 'Explore Python programming, from fundamentals to advanced topics.',
    price: '$49.99',
    image: require('../assets/python-programming.jpg'),
  },
  {
    name: 'C++ Programming',
    description: 'Understand C++ programming concepts with practical examples and exercises.',
    price: '$34.99',
    image: require('../assets/cpp-programming.png'),
  },
  {
    name: 'React.js',
    description: 'Build modern web applications using React.js, a popular JavaScript library.',
    price: '$59.99',
    image: require('../assets/advanced-react.png'),
    lessons: ['Introduction to React', 'Components and Props', 'State and Lifecycle', 'Hooks'],
    materials: ['React Documentation', 'Official React Tutorial'],
    youtubeLink: 'https://www.youtube.com/watch?v=DLX62G4lc44',
  },
  {
    name: 'JavaScript',
    description: 'Learn JavaScript, the essential language for web development.',
    price: '$24.99',
    image: require('../assets/basic-javascript.jpg'),
    lessons: ['Basic Syntax', 'DOM Manipulation', 'ES6 Features'],
    materials: ['MDN Web Docs', 'JavaScript.info'],
    youtubeLink: 'https://www.youtube.com/watch?v=2qDyw7UMPSs',
  },
  {
    name: 'Laravel',
    description: 'Master Laravel, a powerful PHP framework for web development.',
    price: '$54.99',
    image: require('../assets/java.jpg'),
    lessons: ['Getting Started with Laravel', 'Routing and Middleware', 'Building a RESTful API'],
    materials: ['Laravel Documentation', 'Laravel From Scratch'],
    youtubeLink: 'https://www.youtube.com/watch?v=ImtZ5yY4dL8',
  },
  {
    name: 'HTML',
    description: 'Get started with HTML, the building block of web development.',
    price: '$19.99',
    image: require('../assets/html.jpeg'),
    lessons: ['HTML Basics', 'Forms and Input Elements', 'Semantic HTML'],
    materials: ['W3Schools HTML Tutorial', 'HTML5 Rocks'],
    youtubeLink: 'https://www.youtube.com/watch?v=UB1O30fR-EE',
  },
];

const AllProgrammingLanguages: React.FC = () => {
  const navigation = useNavigation<any>(); // Use correct type here

  const handleCourseClick = (course: Course) => {
    navigation.navigate('CourseOverview', { course });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Container>
          <Text style={styles.heading}>All Programming Languages</Text>
          <View style={styles.imageRow}>
            {courses.map((course, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleCourseClick(course)}
                style={styles.courseContainer}
              >
                <Image source={course.image} style={styles.image} />
                <Text style={styles.imageName}>{course.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    paddingVertical: 10,
    paddingBottom: 60, // Ensure content doesn't overlap with Footer
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 20,
  },
  imageRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  courseContainer: {
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  imageName: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default AllProgrammingLanguages;
