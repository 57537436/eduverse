// app/CourseDetail.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, Linking, TouchableOpacity, FlatList } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

type CourseDetailRouteProp = RouteProp<RootStackParamList, 'CourseDetail'>;

const CourseDetail: React.FC = () => {
  const route = useRoute<CourseDetailRouteProp>();
  const { course } = route.params;

  const handleWatchVideo = () => {
    if (course.youtubeLink) {
      Linking.openURL(course.youtubeLink);
    } else {
      console.warn('No video link available.');
    }
  };

  const renderItem = ({ item }: { item: string }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image source={course.image} style={styles.image} />
        <Text style={styles.title}>{course.name}</Text>
        <Text style={styles.description}>{course.description}</Text>
        <Text style={styles.price}>{course.price}</Text>

        {/* Lessons Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Lessons</Text>
          {course.lessons ? (
            <FlatList
              data={course.lessons}
              renderItem={renderItem}
              keyExtractor={(item) => item}
            />
          ) : (
            <Text style={styles.sectionItem}>No lessons available.</Text>
          )}
        </View>

        {/* Materials Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Materials</Text>
          {course.materials ? (
            <FlatList
              data={course.materials}
              renderItem={renderItem}
              keyExtractor={(item) => item}
            />
          ) : (
            <Text style={styles.sectionItem}>No materials available.</Text>
          )}
        </View>

        {/* Video Link */}
        {course.youtubeLink && (
          <TouchableOpacity style={styles.button} onPress={handleWatchVideo}>
            <Text style={styles.buttonText}>Watch Video Tutorial</Text>
          </TouchableOpacity>
        )}
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
  section: {
    marginVertical: 20,
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 5,
  },
  itemText: {
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  sectionItem: {
    fontSize: 16,
    color: '#666',
  },
});

export default CourseDetail;
