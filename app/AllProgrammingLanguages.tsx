import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Course {
  name: string;
  description: string;
  price: string;
  image: any;
  lessons?: string[];
  materials?: string[];
  youtubeLink?: string;
}

const { width } = Dimensions.get('window');

const courses: Course[] = [
  {
    name: 'C Programming',
    description: 'Learn the basics of C programming, a foundational language for computer science.',
    price: '$29.99',
    image: require('../assets/c-programming.png'),
    lessons: ['Introduction to C', 'Variables and Data Types', 'Control Structures', 'Functions', 'Pointers'],
    materials: ['C Programming Book', 'C Reference Manual'],
    youtubeLink: 'https://www.youtube.com/watch?v=KJgsSFOSQv0',
  },
  {
    name: 'Java Programming',
    description: 'Master Java programming with this comprehensive course, suitable for all levels.',
    price: '$39.99',
    image: require('../assets/java-programming.jpg'),
    lessons: ['Java Basics', 'OOP Concepts', 'Collections Framework', 'Exception Handling', 'Multithreading'],
    materials: ['Java Documentation', 'Effective Java Book'],
    youtubeLink: 'https://www.youtube.com/watch?v=grEKMHGYyns',
  },
  {
    name: 'Python Programming',
    description: 'Explore Python programming, from fundamentals to advanced topics.',
    price: '$49.99',
    image: require('../assets/python-programming.jpg'),
    lessons: ['Python Basics', 'Data Structures', 'File Handling', 'Modules and Packages', 'Advanced Topics'],
    materials: ['Python Documentation', 'Automate the Boring Stuff with Python'],
    youtubeLink: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
  },
  {
    name: 'C++ Programming',
    description: 'Understand C++ programming concepts with practical examples and exercises.',
    price: '$34.99',
    image: require('../assets/cpp-programming.png'),
    lessons: ['Introduction to C++', 'Object-Oriented Programming', 'Templates', 'STL', 'File Handling'],
    materials: ['C++ Primer', 'The C++ Programming Language'],
    youtubeLink: 'https://www.youtube.com/watch?v=vLnPwxZdW4Y',
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

  const renderItem = ({ item }: { item: Course }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => handleCourseClick(item)}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.itemTitle}>{item.name}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <TouchableOpacity style={styles.enrollButton}>
        <Text style={styles.enrollButtonText}>View Details</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>All Programming Languages</Text>
        <FlatList
          data={courses}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          numColumns={2}
          columnWrapperStyle={styles.grid}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  content: {
    flex: 1,
    paddingBottom: 60,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 20,
    color: '#333',
  },
  grid: {
    justifyContent: 'space-around',
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    padding: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    maxWidth: (width / 2) - 20,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
  },
  itemPrice: {
    fontSize: 16,
    color: '#007bff',
    marginTop: 10,
  },
  enrollButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  enrollButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default AllProgrammingLanguages;
