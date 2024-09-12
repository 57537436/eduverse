// screens/CourseDetails.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

type CourseDetailsRouteProp = RouteProp<{ CourseDetails: { course: any } }, 'CourseDetails'>;

const CourseDetails: React.FC = () => {
  const route = useRoute<CourseDetailsRouteProp>();
  const { course } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image source={course.image} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{course.title}</Text>
          <Text style={styles.description}>{course.description}</Text>
          <Text style={styles.price}>{course.price}</Text>
          <Text style={styles.enrollButton}>Enroll in this course</Text>
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
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  detailsContainer: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  price: {
    fontSize: 18,
    color: '#007bff',
    marginBottom: 20,
  },
  enrollButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: 15,
    textAlign: 'center',
    borderRadius: 5,
  },
});

export default CourseDetails;
