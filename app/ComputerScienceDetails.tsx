// app/ComputerScienceDetails.tsx
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, FlatList, Dimensions, ImageSourcePropType } from 'react-native';
import { Container } from '~/components/Container';
import Footer from './Footer';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { Course } from '../navigation/types';

const { width } = Dimensions.get('window');

type NavigationProp = StackNavigationProp<RootStackParamList, 'ComputerScienceDetails'>;

const ComputerScienceDetails: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchVisible, setSearchVisible] = useState(false);

  const courses: Course[] = [
    { id: '1', name: 'Data Structures', description: 'Learn about different data structures and their applications.', price: 'R2200', image: require('../assets/data-structures.jpg') },
    { id: '2', name: 'Operating Systems', description: 'Explore the fundamentals of operating systems.', price: 'R1300', image: require('../assets/operating-systems.jpg') },
    { id: '3', name: 'Computer Networks', description: 'Understand the basics of computer networks.', price: 'R2190', image: require('../assets/computer-networks.jpg') },
    { id: '4', name: 'Database Management', description: 'Learn about database management systems and their use.', price: 'R1500', image: require('../assets/database-management.jpg') },
    { id: '5', name: 'Data Analysis', description: 'Study data analysis techniques and tools.', price: 'R1500', image: require('../assets/data-analysis.jpg') },
    { id: '6', name: 'Software Engineering', description: 'Dive into software engineering principles and practices.', price: 'R2500', image: require('../assets/software-engineering.jpg') },
  ];

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchPress = () => {
    setSearchVisible(!isSearchVisible);
  };

  const handleCoursePress = (course: Course) => {
    navigation.navigate('CourseDetail', { course });
  };

  const renderItem = ({ item }: { item: Course }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => handleCoursePress(item)}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.itemTitle}>{item.name}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
      <TouchableOpacity style={styles.enrollButton}>
        <Text style={styles.enrollButtonText}>Enroll in this course</Text>
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
        <Container>
          <Text style={styles.heading}>Computer Science Topics</Text>
          <FlatList
            data={filteredCourses}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={styles.grid}
          />
        </Container>
      </View>
      <Footer onSearchPress={handleSearchPress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingBottom: 60,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 20,
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

export default ComputerScienceDetails;