import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Heading } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types'; // Import the types

// Define navigation prop type
type NavigationProp = StackNavigationProp<RootStackParamList, 'AI_Courses'>;

const AI_Courses: React.FC = () => {
  const navigation = useNavigation<NavigationProp>(); // Use the typed navigation

  const courses = [
    {
      title: 'Introduction to AI',
      description: 'Learn the basics of Artificial Intelligence, including key concepts and applications.',
      price: '$99.99',
      image: require('../assets/ai1.jpg')
    },
    {
      title: 'Machine Learning Basics',
      description: 'A comprehensive introduction to machine learning techniques and algorithms.',
      price: '$129.99',
      image: require('../assets/ai2.jpg')
    },
    {
      title: 'Deep Learning Fundamentals',
      description: 'Explore deep learning methodologies and their applications in AI.',
      price: '$149.99',
      image: require('../assets/ai3.jpg')
    },
    // Add more courses here
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Heading style={styles.heading}>Artificial Intelligence Courses</Heading>
        {courses.map((course, index) => (
          <View key={index} style={styles.courseContainer}>
            <Image source={course.image} style={styles.courseImage} accessibilityLabel={course.title} />
            <View style={styles.courseInfo}>
              <Text style={styles.courseTitle}>{course.title}</Text>
              <Text style={styles.courseDescription}>{course.description}</Text>
              <Text style={styles.coursePrice}>{course.price}</Text>
              <TouchableOpacity 
                style={styles.enrollButton}
                onPress={() => navigation.navigate('CourseDetails', { course })}
              >
                <Text style={styles.enrollButtonText}>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
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
  },
  heading: {
    fontSize: 28,
    fontWeight: '500',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  courseContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  courseImage: {
    width: 120,
    height: 90,
    borderRadius: 10,
    marginRight: 15,
  },
  courseInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  courseDescription: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  coursePrice: {
    fontSize: 16,
    color: '#007bff',
    fontWeight: 'bold',
  },
  enrollButton: {
    marginTop: 10,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  enrollButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default AI_Courses;
