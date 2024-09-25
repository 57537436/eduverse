import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Linking, SafeAreaView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

interface Course {
  name: string;
  description: string;
  price: string;
  image: any;
  lessons?: string[];
  materials?: string[];
  youtubeLink?: string;
}

type RootStackParamList = {
  CourseOverview: { course: Course };
};

type CourseOverviewRouteProp = RouteProp<RootStackParamList, 'CourseOverview'>;

const CourseOverview: React.FC = () => {
  const route = useRoute<CourseOverviewRouteProp>();
  const { course } = route.params;

  const handleWatchVideo = () => {
    if (course.youtubeLink) {
      Linking.openURL(course.youtubeLink);
    } else {
      console.warn('No video link available.');
    }
  };

  const handleEnroll = () => {
    // Implement your enroll logic here
    console.log(`Enrolled in ${course.name}`);
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
      <View style={styles.header}>
        <Image source={course.image} style={styles.courseImage} />
        <Text style={styles.courseName}>{course.name}</Text>
        <Text style={styles.coursePrice}>{course.price}</Text>
      </View>

      <Text style={styles.courseDescription}>{course.description}</Text>

      <FlatList
        data={sections}
        renderItem={({ item }) => renderSection(item)}
        keyExtractor={(item) => item.title}
        ListHeaderComponent={<Text style={styles.mainHeading}>Course Details</Text>}
        ListFooterComponent={
          <>
            {course.youtubeLink && (
              <TouchableOpacity style={styles.button} onPress={handleWatchVideo}>
                <Text style={styles.buttonText}>Watch Video Tutorial</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity style={styles.enrollButton} onPress={handleEnroll}>
              <Text style={styles.enrollButtonText}>Enroll Now</Text>
            </TouchableOpacity>
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
  enrollButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  enrollButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  mainHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
});

export default CourseOverview;
