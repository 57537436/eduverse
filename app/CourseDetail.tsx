// app/CourseDetail.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

type CourseDetailRouteProp = RouteProp<RootStackParamList, 'CourseDetail'>;

const CourseDetail: React.FC = () => {
  const route = useRoute<CourseDetailRouteProp>();
  const { course } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image source={course.image} style={styles.image} />
        <Text style={styles.title}>{course.name}</Text>
        <Text style={styles.description}>{course.description}</Text>
        <Text style={styles.price}>{course.price}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
  price: {
    fontSize: 18,
    color: '#007bff',
    marginTop: 10,
  },
});

export default CourseDetail;
