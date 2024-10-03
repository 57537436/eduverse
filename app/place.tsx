import React, { useState } from 'react';
import { Stack } from 'expo-router';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { Heading } from '@gluestack-ui/themed';
import { Text, Image, ScrollView, View, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';
import Footer from './Footer'; // Import Footer
import { Searchbar } from 'react-native-paper';

type NavigationProp = StackNavigationProp<RootStackParamList, 'index'>;

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation<NavigationProp>();

  // Programming courses data
  const programmingCourses = [
    { title: 'PHP', description: 'Server-side scripting language.', image: require('../assets/php.jpg') },
    { title: 'COO', description: 'Object-oriented programming language.', image: require('../assets/coo.jpg') },
    { title: 'Java', description: 'High-level, class-based programming language.', image: require('../assets/java.jpg') },
    { title: 'C Programming', description: 'Procedural programming language.', image: require('../assets/c-programming.png') },
    { title: 'Java Programming', description: 'Advanced concepts of Java.', image: require('../assets/java-programming.jpg') },
    { title: 'Python Programming', description: 'Versatile programming language for web development and data analysis.', image: require('../assets/python-programming.jpg') },
    { title: 'C++ Programming', description: 'Language supporting object-oriented, generic, and functional programming.', image: require('../assets/cpp-programming.png') },
  ];

  // Computer Science courses data
  const computerScienceCourses = [
    { title: 'Data Structures', description: 'Study of data organization and manipulation.', image: require('../assets/data-structures.jpg') },
    { title: 'Operating Systems', description: 'Fundamentals of operating system design and implementation.', image: require('../assets/operating-systems.jpg') },
    { title: 'Computer Networks', description: 'Introduction to network protocols and architecture.', image: require('../assets/computer-networks.jpg') },
    { title: 'Database Management', description: 'Design and management of databases.', image: require('../assets/database-management.jpg') },
    { title: 'Data Analysis', description: 'Techniques and tools for analyzing data.', image: require('../assets/data-analysis.jpg') },
    { title: 'Software Engineering', description: 'Principles and practices of software development.', image: require('../assets/software-engineering.jpg') },
  ];

  // AI courses data
  const aiCourses = [
    { title: 'Introduction to AI', description: 'Learn the basics of Artificial Intelligence.', price: 'R1299.99', image: require('../assets/ai1.jpg') },
    { title: 'Machine Learning Basics', description: 'Introduction to machine learning techniques.', price: 'R129.99', image: require('../assets/ai2.jpg') },
    { title: 'Deep Learning Fundamentals', description: 'Explore deep learning methodologies.', price: 'R149.99', image: require('../assets/ai3.jpg') },
  ];

  // Filter function to filter courses based on search query
  const filterCourses = (courses: any[]) => {
    return courses.filter(course => course.title.toLowerCase().includes(searchQuery.toLowerCase()));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen 
        options={{
          headerTitle: () => (
            <View style={styles.headerContainer}>
              <Image 
                source={require('../assets/logo.png')} 
                style={styles.logo}
                resizeMode="contain"
              />
              <Searchbar
                placeholder="Search"
                onChangeText={setSearchQuery}
                value={searchQuery}
                style={styles.searchBar} 
              />
            </View>
          ),
        }} 
      />

      <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={styles.scrollView}>
        {/* Programming Section */}
        <Container>
          <View style={styles.sectionHeader}>
            <Heading style={styles.containerHeading}>Programming</Heading>
            <TouchableOpacity onPress={() => navigation.navigate('AllProgrammingLanguages')}>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.moduleRow}>
              {filterCourses(programmingCourses).map((course, index) => (
                <View key={index} style={styles.moduleContainer}>
                  <TouchableOpacity onPress={() => navigation.navigate('CourseOverview', { course: course.title })}>
                    <Image source={course.image} style={styles.moduleImage} accessibilityLabel={course.title} />
                    <Text style={styles.moduleTitle}>{course.title}</Text>
                    <Text style={styles.moduleDescription}>{course.description}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </ScrollView>
        </Container>

        {/* Computer Science Section */}
        <Container>
          <View style={styles.sectionHeader}>
            <Heading style={styles.containerHeading}>Computer Science</Heading>
            <TouchableOpacity onPress={() => navigation.navigate('ComputerScienceDetails')}>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.moduleRow}>
              {filterCourses(computerScienceCourses).map((course, index) => (
                <View key={index} style={styles.moduleContainer}>
                  <TouchableOpacity onPress={() => navigation.navigate('CourseOverview', { course: course.title })}>
                    <Image source={course.image} style={styles.moduleImage} accessibilityLabel={course.title} />
                    <Text style={styles.moduleTitle}>{course.title}</Text>
                    <Text style={styles.moduleDescription}>{course.description}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </ScrollView>
        </Container>

        {/* Artificial Intelligence Section */}
        <Container>
          <View style={styles.sectionHeader}>
            <Heading style={styles.containerHeading}>Artificial Intelligence</Heading>
            <TouchableOpacity onPress={() => navigation.navigate('AI_Courses')}>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.moduleRow}>
              {filterCourses(aiCourses).map((course, index) => (
                <View key={index} style={styles.moduleContainer}>
                  <TouchableOpacity onPress={() => navigation.navigate('CourseOverview', { course: course.title })}>
                    <Image source={course.image} style={styles.moduleImage} accessibilityLabel={course.title} />
                    <Text style={styles.moduleTitle}>{course.title}</Text>
                    <Text style={styles.moduleDescription}>{course.description}</Text>
                    <Text style={styles.modulePrice}>{course.price}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </ScrollView>
        </Container>
      </ScrollView>

      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: -20,
    marginRight: -20,
  },

  headerContainer: {
    alignItems: 'center',
    paddingVertical: 10,
    flexDirection: 'row', // Aligns logo and text in a row
    justifyContent: 'center',
    paddingLeft: -10,
  },
  headerText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#333',
    marginLeft: 0, // Space between logo and text

  },
  
  scrollView: {
    paddingVertical: -10,
    paddingBottom: 60, // Ensure content doesn't overlap with Footer
    paddingLeft: 0, 
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
    marginLeft: 0,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  heading: {
    fontSize: 32,
    fontWeight: '300',
    marginHorizontal: 10,
    color: '#333',
    marginLeft: 0,
  },
  containerHeading: {
    marginHorizontal: 5,
    fontSize: 20,
    fontWeight: '300',
    color: '#333',
    marginLeft: 0,
    
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Pushes items to the edges
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: -25,
    paddingLeft: 0,
  },
  moduleRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingLeft: 0,
  },
  moduleContainer: {
    width: 220,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 10,
    elevation: 2, // Shadow effect for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.1, // Shadow opacity for iOS
    shadowRadius: 4, // Shadow radius for iOS
    marginLeft: 0,
  },
  moduleImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  moduleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  moduleDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  modulePrice: {
    fontSize: 16,
    color: '#007bff',
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 150,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  viewAllText: {
    color: '#007bff',
    fontSize: 16,
    textAlign: 'right',
    fontWeight: 'bold', // To make it look like a clickable link
    textDecorationLine: 'underline', // Underline the text to indicate it's clickable
    paddingHorizontal: 5,
  },
  searchBarContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    elevation: 2, // Shadow effect for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.1, // Shadow opacity for iOS
    shadowRadius: 4, // Shadow radius for iOS
  },
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  logo: {
    width: 100, // Adjusted size
    height: 30,
    marginLeft: -100, // Adjusted size
  },
  searchBar: {
    height: 50, // Adjust height as needed
    borderRadius: 25, // Rounded corners
    backgroundColor: '#f0f0f0', // Light background
    elevation: 2, // Optional shadow effect
    paddingHorizontal: 10, // Padding inside the search bar
     width: '95%', // Adjust width to increase the length (e.g., 90% of the screen width)
    marginLeft: -20, // Margin to space it from the logo
  },
});

export default Home;
