import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationProp = StackNavigationProp<RootStackParamList, 'ComputerScienceDetails'>;

const ComputerScienceDetails: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const courses = [
    {
      name: 'Data Structures',
      description: 'Learn about different data structures and their applications.',
      image: require('../assets/data-structures.jpg'),
      price: '$100',
    },
    {
      name: 'Operating Systems',
      description: 'Explore the fundamentals of operating systems.',
      image: require('../assets/operating-systems.jpg'),
      price: '$120',
    },
    {
      name: 'Computer Networks',
      description: 'Understand the basics of computer networks.',
      image: require('../assets/computer-networks.jpg'),
      price: '$110',
    },
    {
      name: 'Database Management',
      description: 'Learn about database management systems and their use.',
      image: require('../assets/database-management.jpg'),
      price: '$130',
    },
    {
      name: 'Data Analysis',
      description: 'Study data analysis techniques and tools.',
      image: require('../assets/data-analysis.jpg'),
      price: '$140',
    },
    {
      name: 'Software Engineering',
      description: 'Dive into software engineering principles and practices.',
      image: require('../assets/software-engineering.jpg'),
      price: '$150',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.imageRow}>
          {courses.map((course, index) => (
            <TouchableOpacity
              key={index}
              style={styles.itemContainer}
              onPress={() => navigation.navigate('CourseDetail', { course })}
            >
              <Image source={course.image} style={styles.image} />
              <Text style={styles.itemTitle}>{course.name}</Text>
              <Text style={styles.itemDescription}>{course.description}</Text>
              <Text style={styles.itemPrice}>{course.price}</Text>
            </TouchableOpacity>
          ))}
        </View>
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
  },
  imageRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  itemContainer: {
    width: '45%',
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    padding: 10,
    elevation: 2, // Shadow effect for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.1, // Shadow opacity for iOS
    shadowRadius: 4, // Shadow radius for iOS
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
});

export default ComputerScienceDetails;
