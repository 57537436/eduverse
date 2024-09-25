import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Linking, SafeAreaView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Heading } from '@gluestack-ui/themed';
import { Avatar } from 'react-native-paper';

// Define Course type
interface Course {
  name: string;
  description: string;
  price: string;
  image: any;
  lessons?: string[];
  materials?: string[];
  youtubeLink?: string;
  instructor: string;
  instructorExperience: string; // Add experience field
  instructorPerformance: string; // Add performance field
}

// Define RootStackParamList type
type RootStackParamList = {
  CourseDetail: { course: Course };
};

// Define route prop type
type CourseDetailRouteProp = RouteProp<RootStackParamList, 'CourseDetail'>;

const CourseDetails: React.FC = () => {
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
      <Text style={styles.sectionItem}>{item}</Text>
    </View>
  );

  const renderSection = ({ title, data }: { title: string; data: string[] }) => (
    <View style={styles.section}>
      <Text style={styles.sectionHeading}>{title}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );

  const sections = [
    { title: 'Lessons', data: course.lessons || [] },
    { title: 'Materials', data: course.materials || [] },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <Image source={course.image} style={styles.courseImage} />
              <Heading style={styles.courseName}>{course.name}</Heading>
              <Text style={styles.coursePrice}>{course.price}</Text>
            </View>

            <Text style={styles.courseDescription}>{course.description}</Text>

            <Text style={styles.mainHeading}>Course Details</Text>

            {/* Instructor Profile Section (in ListHeaderComponent for scrolling) */}
            <View style={styles.section}>
              <View style={styles.profileContainer}>
                <Avatar.Image
                  size={90}
                  source={require('../assets/nu.jpg')} 
                />
                <View style={styles.profileInfo}>
                  <Text style={styles.profileName}>Instructor: {course.instructor}</Text>
                  <Text style={styles.profileDetails}>
                    Experience: {course.instructorExperience}
                  </Text>
                  <Text style={styles.profileDetails}>
                    Performance: {course.instructorPerformance}
                  </Text>
                </View>
              </View>
            </View>
          </>
        }
        data={sections}
        renderItem={({ item }) => renderSection(item)}
        keyExtractor={(item) => item.title}
        ListFooterComponent={
          <>
            {course.youtubeLink ? (
              <TouchableOpacity style={styles.button} onPress={handleWatchVideo}>
                <Text style={styles.buttonText}>Watch Intro</Text>
              </TouchableOpacity>
            ) : null}
          </>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  mainHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  profileInfo: {
    marginLeft: 15,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileDetails: {
    fontSize: 16,
    color: '#555',
  },
});

export default CourseDetails;
