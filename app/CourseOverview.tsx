import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, FlatList, Image } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

// Define the Course interface with optional properties
interface Course {
  name: string;
  description: string;
  price: string;
  image: any;
  lessons?: string[];
  materials?: string[];
  youtubeLink?: string;
}

// Define the type for the stack parameter list
type RootStackParamList = {
  CourseOverview: { course: Course };
};

// Extract the route parameter type
type CourseOverviewRouteProp = RouteProp<RootStackParamList, 'CourseOverview'>;

// Reusable Section component with styling
const Section: React.FC<{ title: string, items?: string[] }> = ({ title, items }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionHeading}>{title}</Text>
      {items && items.length > 0 ? (
        <FlatList
          data={items.map((item, index) => ({ key: item, index }))}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.sectionItem}>{item.key}</Text>
            </View>
          )}
          keyExtractor={(item) => item.key}
        />
      ) : (
        <Text style={styles.sectionItem}>No items available.</Text>
      )}
    </View>
  );
};

const CourseOverview: React.FC = () => {
  // Get route and course parameters
  const route = useRoute<CourseOverviewRouteProp>();
  const { course } = route.params;

  // Ensure youtubeLink is a string before using it
  const handleWatchVideo = () => {
    if (course.youtubeLink) {
      Linking.openURL(course.youtubeLink);
    } else {
      console.warn('No video link available.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={course.image} style={styles.courseImage} />
        <Text style={styles.courseName}>{course.name}</Text>
        <Text style={styles.coursePrice}>{course.price}</Text>
      </View>
      
      <Text style={styles.courseDescription}>{course.description}</Text>
      
      {/* Use Section component for lessons */}
      <Section title="Lessons" items={course.lessons} />

      {/* Use Section component for materials */}
      <Section title="Materials" items={course.materials} />

      {course.youtubeLink && (
        <TouchableOpacity style={styles.button} onPress={handleWatchVideo}>
          <Text style={styles.buttonText}>Watch Video Tutorial</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

// Define styles
const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#f9f9f9',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  courseImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  courseName: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  coursePrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 15,
  },
  courseDescription: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#007bff',
    paddingBottom: 5,
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  sectionItem: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CourseOverview;
