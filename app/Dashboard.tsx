import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Heading } from '@gluestack-ui/themed';
import { Container } from '~/tamagui.config';
import SearchBar from './SearchBar'; // Adjust the path if needed
import Footer from './Footer'; // Adjust the path if needed'


// Updated course data
const allCourses = [
  { id: '1', name: 'Basic JavaScript', image: require('../assets/basic-javascript.jpg') },
  { id: '2', name: 'Advanced React.js', image: require('../assets/advanced-react.png') },
  { id: '3', name: 'Introduction to Python', image: require('../assets/introduction-python.jpg') },
  { id: '4', name: 'Mastering TypeScript', image: require('../assets/mastering-typescript.jpg') },
  

];

const Dashboard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchVisible, setSearchVisible] = useState(false);

  // Filter courses based on search query
  const filteredCourses = allCourses.filter(course =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchPress = () => {
    setSearchVisible(!isSearchVisible);
  };

  return (
    <Container style={styles.container}>
      <Heading style={styles.heading}>Welcome to Your Dashboard</Heading>

      {isSearchVisible && (
        <SearchBar query={searchQuery} onChange={setSearchQuery} />
      )}

      <ScrollView>
        <View style={styles.section}>
          <Heading style={styles.sectionHeading}>My Courses</Heading>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.courseContainer}>
              {filteredCourses.length > 0 ? (
                filteredCourses.map(course => (
                  <TouchableOpacity
                    key={course.id}
                    style={styles.courseCard}
                    onPress={() => console.log('Go to Course Details')}
                  >
                    <Image
                      source={course.image}
                      style={styles.courseImage}
                    />
                    <Text style={styles.courseTitle}>{course.name}</Text>
                  </TouchableOpacity>
                ))
              ) : (
                <Text style={styles.noCoursesText}>No courses found</Text>
              )}
            </View>
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Heading style={styles.sectionHeading}>User Progress</Heading>
          <Text style={styles.progressText}>You have completed 5 out of 10 modules.</Text>
        </View>

        <View style={styles.quickLinks}>
          <TouchableOpacity style={styles.linkButton} onPress={() => console.log('Go to Profile')}>
            <Text style={styles.linkText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkButton} onPress={() => console.log('Go to Settings')}>
            <Text style={styles.linkText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Footer onSearchPress={handleSearchPress} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 32,
    fontWeight: '500',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeading: {
    fontSize: 24,
    fontWeight: '400',
    marginBottom: 10,
  },
  courseContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  courseCard: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 8,
    alignItems: 'center',
    width: 150,
  },
  courseImage: {
    width: 120,
    height: 80,
    borderRadius: 8,
  },
  courseTitle: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '500',
  },
  noCoursesText: {
    fontSize: 16,
    fontWeight: '400',
    alignSelf: 'center',
    marginTop: 20,
  },
  progressText: {
    fontSize: 16,
    fontWeight: '400',
  },
  quickLinks: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  linkButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 8,
  },
  linkText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Dashboard;
