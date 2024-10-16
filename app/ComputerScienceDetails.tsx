import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from './Footer'; // Adjust the import path as needed

interface Course {
  id: string;
  name: string;
  description: string;
  price: string;
  image: any;
  lessons?: string[];
  materials?: string[];
  youtubeLink?: string;
}

const { width } = Dimensions.get('window');

const courses: Course[] = [
  { 
    id: '1', 
    name: 'Data Structures', 
    description: 'Learn about different data structures and their applications.', 
    price: 'R2200', 
    image: require('../assets/data-structures.jpg'), 
    lessons: ['Introduction', 'Arrays', 'Linked Lists'], 
    materials: ['Data Structures Book'], 
    youtubeLink: 'https://www.youtube.com/watch?v=KJgsSFOSQv0' 
  },
  { 
    id: '2', 
    name: 'Operating Systems', 
    description: 'Explore the fundamentals of operating systems.', 
    price: 'R1300', 
    image: require('../assets/operating-systems.jpg'), 
    lessons: ['Basics of OS', 'Processes', 'Memory Management'], 
    materials: ['Operating Systems Book'], 
    youtubeLink: 'https://www.youtube.com/watch?v=1234567890' 
  },
  { 
    id: '3', 
    name: 'Computer Networks', 
    description: 'Understand the basics of computer networks.', 
    price: 'R2190', 
    image: require('../assets/computer-networks.jpg'), 
    lessons: ['Network Fundamentals', 'OSI Model', 'TCP/IP', 'Network Security'], 
    materials: ['Networking Essentials Book'], 
    youtubeLink: 'https://www.youtube.com/watch?v=9bZkp7q19f0' 
  },
  { 
    id: '4', 
    name: 'Database Management', 
    description: 'Learn about database management systems and their use.', 
    price: 'R1500', 
    image: require('../assets/database-management.jpg'), 
    lessons: ['Database Concepts', 'SQL Basics', 'Normalization', 'Transactions'], 
    materials: ['Database Management Systems Book'], 
    youtubeLink: 'https://www.youtube.com/watch?v=f1SgAv3L1Sg' 
  },
  { 
    id: '5', 
    name: 'Data Analysis', 
    description: 'Study data analysis techniques and tools.', 
    price: 'R1500', 
    image: require('../assets/data-analysis.jpg'), 
    lessons: ['Introduction to Data Analysis', 'Data Visualization', 'Statistical Analysis'], 
    materials: ['Data Analysis with Python Book'], 
    youtubeLink: 'https://www.youtube.com/watch?v=1KkKH8TVbhg' 
  },
  { 
    id: '6', 
    name: 'Software Engineering', 
    description: 'Dive into software engineering principles and practices.', 
    price: 'R2500', 
    image: require('../assets/software-engineering.jpg'), 
    lessons: ['Software Development Life Cycle', 'Agile Methodologies', 'Software Design Patterns'], 
    materials: ['Software Engineering Book'], 
    youtubeLink: 'https://www.youtube.com/watch?v=Q3W3s5FbgAg' 
  },
];

const ComputerScienceDetails: React.FC = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(courses);
  const navigation = useNavigation<any>(); // Use correct type here

  const handleCoursePress = (course: Course) => {
    navigation.navigate('CourseDetail', { course });
  };

  const handleSearchPress = () => {
    setSearchVisible(!searchVisible);
    if (!searchVisible) {
      setSearchQuery(''); // Clear search query when showing search bar
      setFilteredCourses(courses); // Reset filtered courses
    }
  };

  const handleSearchChange = (text: string) => {
    setSearchQuery(text);
    // Filter courses based on search query
    const filtered = courses.filter(course => course.name.toLowerCase().includes(text.toLowerCase()));
    setFilteredCourses(filtered);
  };

  const renderItem = ({ item }: { item: Course }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => handleCoursePress(item)}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.itemTitle}>{item.name}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <TouchableOpacity 
        onPress={() => navigation.navigate('enroll', { courseTitle: item.name })} 
        style={styles.enrollButton}>
        <Text style={styles.enrollButtonText}>Enroll Now</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {searchVisible && (
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search courses..."
              value={searchQuery}
              onChangeText={handleSearchChange}
            />
          </View>
        )}
        <Text style={styles.heading}>Computer Science Topics</Text>
        <FlatList
          data={filteredCourses}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.grid}
        />
      </View>
      {/* <Footer onSearchPress={handleSearchPress} data={[]} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  content: {
    flex: 1,
    paddingBottom: 60, // Ensure space for the footer
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 20,
    color: '#333',
  },
  searchContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    zIndex: 1, // Ensure search bar is on top of other elements
  },
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  grid: {
    justifyContent: 'space-around',
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    padding: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    maxWidth: (width / 2) - 20,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
  },
  itemPrice: {
    fontSize: 16,
    color: '#007bff',
    marginTop: 10,
  },
  enrollButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  enrollButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ComputerScienceDetails;
