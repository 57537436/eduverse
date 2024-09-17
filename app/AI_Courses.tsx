import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, FlatList, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';
import Footer from './Footer'; // Adjust the import path as needed

const { width } = Dimensions.get('window');

// Define navigation prop type
type NavigationProp = StackNavigationProp<RootStackParamList, 'AI_Courses'>;

const AI_Courses: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchVisible, setSearchVisible] = useState(false);

  // Define courses data
  const courses = [
    {
      id: '1',
      name: 'Introduction to AI',
      description: 'Learn the basics of Artificial Intelligence, including key concepts and applications.',
      image: require('../assets/ai1.jpg'),
      price: 'R500.99',
      lessons: ['Lesson 1', 'Lesson 2'],
      materials: ['Material 1', 'Material 2'],
      youtubeLink: 'https://example.com/video',
    },
    {
      id: '2',
      name: 'Machine Learning Basics',
      description: 'A comprehensive introduction to machine learning techniques and algorithms.',
      image: require('../assets/ai2.jpg'),
      price: 'R1500.99',
      lessons: ['Lesson 1', 'Lesson 2'],
      materials: ['Material 1', 'Material 2'],
      youtubeLink: 'https://example.com/video',
    },
    {
      id: '3',
      name: 'Deep Learning Fundamentals',
      description: 'Explore deep learning methodologies and their applications in AI.',
      image: require('../assets/ai3.jpg'),
      price: 'R2000.99',
      lessons: ['Lesson 1', 'Lesson 2'],
      materials: ['Material 1', 'Material 2'],
      youtubeLink: 'https://example.com/video',
    },
  ];

  // Filter courses based on search query
  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle search toggle
  const handleSearchPress = () => {
    setSearchVisible(!isSearchVisible);
    if (isSearchVisible) {
      // Hide search bar and reset search query
      setSearchQuery('');
    }
  };

  // Navigate to course details
  const handleCoursePress = (course: typeof courses[0]) => {
    navigation.navigate('CourseDetails', { course });
  };

  const renderItem = ({ item }: { item: typeof courses[0] }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => handleCoursePress(item)}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.itemTitle}>{item.name}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <TouchableOpacity style={styles.enrollButton}>
        <Text style={styles.enrollButtonText}>View Details</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {isSearchVisible && (
          <TextInput
            style={styles.searchInput}
            placeholder="Search courses..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        )}
        <Text style={styles.heading}>Artificial Intelligence Courses</Text>
        <FlatList
          data={filteredCourses}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.grid}
        />
      </View>
      <Footer onSearchPress={handleSearchPress} />
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
  searchInput: {
    marginHorizontal: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 20,
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
  grid: {
    justifyContent: 'space-around',
  },
});

export default AI_Courses;
