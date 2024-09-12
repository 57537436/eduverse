import React, { useState } from 'react';
import { Stack } from 'expo-router';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { Heading } from '@gluestack-ui/themed';
import { Text, Image, ScrollView, View, TouchableOpacity, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types'; // Import the types
import HeaderButtons from '~/components/HeaderButtons'; // Import the custom header component
import Footer from './Footer'; // Import the Footer component

// Define navigation prop type
type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home: React.FC = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation<NavigationProp>(); // Use the typed navigation

  const handleSearchPress = () => {
    setSearchVisible(!searchVisible);
  };

  const handleSearchChange = (text: string) => {
    setSearchQuery(text);
    // Implement search logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen 
        options={{
          title: 'Home',
          headerRight: () => <HeaderButtons />, // Set custom header component
        }} 
      />

      {searchVisible && (
        <View style={styles.searchBarContainer}>
          <TextInput 
            style={styles.searchInput}
            placeholder="Search for courses..."
            value={searchQuery}
            onChangeText={handleSearchChange}
          />
        </View>
      )}

      <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={styles.scrollView}>
        {/* Button to Navigate to Dashboard */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Dashboard')} // Navigate to Dashboard
        >
          <Text style={styles.buttonText}>Go to Dashboard</Text>
        </TouchableOpacity>

        <Heading style={styles.heading}>Courses</Heading>
        <Text style={styles.subheading}>What do you wanna learn?</Text>

        {/* First Container: Programming Languages */}
        <Container>
          <TouchableOpacity 
            onPress={() => navigation.navigate('AllProgrammingLanguages')} // Navigate to view all programming languages
          >
            <Text style={styles.viewAllText}>View All Programming Languages</Text>
          </TouchableOpacity>
          <Heading style={styles.containerHeading}>Programming</Heading>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.imageRow}>
              <Image
                source={require('../assets/php.jpg')}
                style={styles.image}
                accessibilityLabel="PHP"
              />
              <Image
                source={require('../assets/coo.jpg')}
                style={styles.image}
                accessibilityLabel="COO"
              />
              <Image
                source={require('../assets/java.jpg')}
                style={styles.image}
                accessibilityLabel="Java"
              />
              <Image
                source={require('../assets/c-programming.png')}
                style={styles.image}
                accessibilityLabel="C Programming"
              />
              <Image
                source={require('../assets/java-programming.jpg')}
                style={styles.image}
                accessibilityLabel="Java Programming"
              />
              <Image
                source={require('../assets/python-programming.jpg')}
                style={styles.image}
                accessibilityLabel="Python Programming"
              />
              <Image
                source={require('../assets/cpp-programming.png')}
                style={styles.image}
                accessibilityLabel="C++ Programming"
              />
            </View>
          </ScrollView>
        </Container>

        {/* Second Container: Computer Science */}
        <Container>
          <TouchableOpacity 
            onPress={() => navigation.navigate('ComputerScienceDetails')} // Navigate to view all Computer Science topics
          >
            <Text style={styles.viewAllText}>View All Computer Science Topics</Text>
          </TouchableOpacity>
          <Heading style={styles.containerHeading}>Computer Science</Heading>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.imageRow}>
              <Image
                source={require('../assets/data-structures.jpg')}
                style={styles.image}
                accessibilityLabel="Data Structures"
              />
              <Image
                source={require('../assets/operating-systems.jpg')}
                style={styles.image}
                accessibilityLabel="Operating Systems"
              />
              <Image
                source={require('../assets/computer-networks.jpg')}
                style={styles.image}
                accessibilityLabel="Computer Networks"
              />
              <Image
                source={require('../assets/database-management.jpg')}
                style={styles.image}
                accessibilityLabel="Database Management"
              />
              <Image
                source={require('../assets/data-analysis.jpg')}
                style={styles.image}
                accessibilityLabel="Data Analysis"
              />
              <Image
                source={require('../assets/software-engineering.jpg')}
                style={styles.image}
                accessibilityLabel="Software Engineering"
              />
            </View>
          </ScrollView>
        </Container>

        {/* Third Container: Artificial Intelligence */}
        <Container>
          <TouchableOpacity 
            onPress={() => navigation.navigate('AI_Courses')} // Navigate to view all AI courses
          >
            <Text style={styles.viewAllText}>View All Artificial Intelligence Topics</Text>
          </TouchableOpacity>
          <Heading style={styles.containerHeading}>Artificial Intelligence</Heading>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.moduleRow}>
              {/* AI Module 1 */}
              <View style={styles.moduleContainer}>
                <Image
                  source={require('../assets/ai1.jpg')}
                  style={styles.moduleImage}
                  accessibilityLabel="Introduction to AI"
                />
                <Text style={styles.moduleTitle}>Introduction to AI</Text>
                <Text style={styles.moduleDescription}>Learn the basics of Artificial Intelligence, including key concepts and applications.</Text>
                <Text style={styles.modulePrice}>R1299.99</Text>
              </View>
              {/* AI Module 2 */}
              <View style={styles.moduleContainer}>
                <Image
                  source={require('../assets/ai2.jpg')}
                  style={styles.moduleImage}
                  accessibilityLabel="Machine Learning Basics"
                />
                <Text style={styles.moduleTitle}>Machine Learning Basics</Text>
                <Text style={styles.moduleDescription}>A comprehensive introduction to machine learning techniques and algorithms.</Text>
                <Text style={styles.modulePrice}>R129.99</Text>
              </View>
              {/* AI Module 3 */}
              <View style={styles.moduleContainer}>
                <Image
                  source={require('../assets/ai3.jpg')}
                  style={styles.moduleImage}
                  accessibilityLabel="Deep Learning Fundamentals"
                />
                <Text style={styles.moduleTitle}>Deep Learning Fundamentals</Text>
                <Text style={styles.moduleDescription}>Explore deep learning methodologies and their applications in AI.</Text>
                <Text style={styles.modulePrice}>R149.99</Text>
              </View>
              {/* Add more AI modules here */}
            </View>
          </ScrollView>

          <Button title="Show Details" onPress={() => navigation.navigate('AI_Courses')} />
        </Container>
      </ScrollView>

      {/* Add Footer component here */}
      <Footer onSearchPress={handleSearchPress} />
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
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  heading: {
    fontSize: 32,
    fontWeight: '500',
    marginHorizontal: 10,
  },
  subheading: {
    marginHorizontal: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  containerHeading: {
    marginHorizontal: 10,
    fontSize: 20,
    fontWeight: '400',
  },
  imageRow: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  moduleRow: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  moduleContainer: {
    width: 220,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 10,
    elevation: 2, // Shadow effect for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.1, // Shadow opacity for iOS
    shadowRadius: 4, // Shadow radius for iOS
  },
  moduleImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  moduleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  moduleDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  modulePrice: {
    fontSize: 16,
    color: '#007bff',
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 150,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  viewAllText: {
    color: '#007bff',
    fontSize: 16,
    marginVertical: 10,
    marginHorizontal: 10,
    textAlign: 'center',
    fontWeight: 'bold', // To make it look like a clickable link
    textDecorationLine: 'underline', // Underline the text to indicate it's clickable
  },
  searchBarContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    elevation: 2, // Shadow effect for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.1, // Shadow opacity for iOS
    shadowRadius: 4, // Shadow radius for iOS
  },
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default Home;
