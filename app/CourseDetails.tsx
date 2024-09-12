import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Heading } from '@gluestack-ui/themed';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types'; // Import the types

// Define route prop type
type RoutePropType = RouteProp<RootStackParamList, 'CourseDetails'>;

const CourseDetails: React.FC = () => {
  const route = useRoute<RoutePropType>();
  const { course } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image source={course.image} style={styles.courseImage} accessibilityLabel={course.title} />
        <View style={styles.courseInfo}>
          <Heading style={styles.courseTitle}>{course.title}</Heading>
          <Text style={styles.courseDescription}>{course.description}</Text>
          <Text style={styles.coursePrice}>{course.price}</Text>
          <TouchableOpacity 
            style={styles.enrollButton}
            onPress={() => { /* Add enrollment logic here */ }}
          >
            <Text style={styles.enrollButtonText}>Enroll Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    padding: 10,
  },
  courseImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  courseInfo: {
    marginTop: 10,
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  courseDescription: {
    fontSize: 16,
    color: '#555',
    marginVertical: 10,
  },
  coursePrice: {
    fontSize: 20,
    color: '#007bff',
    fontWeight: 'bold',
  },
  enrollButton: {
    marginTop: 20,
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  enrollButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CourseDetails;
