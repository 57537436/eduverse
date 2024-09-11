// app/CourseDetail.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';

type RouteParams = {
  course: {
    name: string;
    description: string;
    image: any; // Can be a require or a URL
    price: string;
  };
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'CourseDetail'>;

const CourseDetail: React.FC = () => {
  const route = useRoute();
  const { course } = route.params as RouteParams;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image source={course.image} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.heading}>{course.name}</Text>
          <Text style={styles.description}>{course.description}</Text>
          <Text style={styles.price}>Price: {course.price}</Text>
          <TouchableOpacity style={styles.enrollButton} onPress={() => console.log('Enroll button pressed')}>
            <Text style={styles.enrollButtonText}>Enroll in this</Text>
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
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  detailsContainer: {
    marginVertical: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
  },
  price: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  enrollButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  enrollButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CourseDetail;
