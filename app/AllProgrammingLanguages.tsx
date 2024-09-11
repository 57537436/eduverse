import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Container } from '~/components/Container'; // Assuming you have this component

// Define interface for course details
interface Course {
  name: string;
  description: string;
  price: string;
  image: any;
}

// Sample courses data
const courses: Course[] = [
  {
    name: 'C Programming',
    description: 'Learn the basics of C programming, a foundational language for computer science.',
    price: '$29.99',
    image: require('../assets/c-programming.png'),
  },
  {
    name: 'Java Programming',
    description: 'Master Java programming with this comprehensive course, suitable for all levels.',
    price: '$39.99',
    image: require('../assets/java-programming.jpg'),
  },
  {
    name: 'Python Programming',
    description: 'Explore Python programming, from fundamentals to advanced topics.',
    price: '$49.99',
    image: require('../assets/python-programming.jpg'),
  },
  {
    name: 'C++ Programming',
    description: 'Understand C++ programming concepts with practical examples and exercises.',
    price: '$34.99',
    image: require('../assets/cpp-programming.png'),
  },
];

const AllProgrammingLanguages: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Container>
          <Text style={styles.heading}>All Programming Languages</Text>
          <View style={styles.imageRow}>
            {courses.map((course, index) => (
              <TouchableOpacity key={index} onPress={() => handleCourseClick(course)} style={styles.courseContainer}>
                <Image
                  source={course.image}
                  style={styles.image}
                  alt={course.name}
                />
                <Text style={styles.imageName}>{course.name}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {selectedCourse && (
            <View style={styles.detailsContainer}>
              <Text style={styles.courseName}>{selectedCourse.name}</Text>
              <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
              <Text style={styles.coursePrice}>Price: {selectedCourse.price}</Text>
              <TouchableOpacity style={styles.enrollButton}>
                <Text style={styles.enrollButtonText}>Enroll in this Course</Text>
              </TouchableOpacity>
            </View>
          )}
        </Container>
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
    paddingBottom: 60, // Ensure content doesn't overlap with Footer
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 20,
  },
  imageRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  courseContainer: {
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  imageName: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  detailsContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  courseName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  courseDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  coursePrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  enrollButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  enrollButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default AllProgrammingLanguages;
