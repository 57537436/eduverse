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
          headerTitle: () => (
            <Image 
              source={require('../assets/nu.jpg')} // Update path to your logo image
              style={styles.logo}
              resizeMode="contain"
            />
          ),
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
        {/* Section: Programming Languages */}
        <Container>
          <View style={styles.sectionHeader}>
            <Heading style={styles.containerHeading}>Programming</Heading>
            <TouchableOpacity 
              onPress={() => navigation.navigate('AllProgrammingLanguages')} // Navigate to view all programming languages
            >
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.moduleRow}>
              {/* Programming Modules */}
              <View style={styles.moduleContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('CourseOverview', { course: 'PHP' })}>
                  <Image
                    source={require('../assets/php.jpg')}
                    style={styles.moduleImage}
                    accessibilityLabel="PHP"
                  />
                  <Text style={styles.moduleTitle}>PHP</Text>
                  <Text style={styles.moduleDescription}>Server-side scripting language.</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.moduleContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('CourseOverview', { course: 'COO' })}>
                  <Image
                    source={require('../assets/coo.jpg')}
                    style={styles.moduleImage}
                    accessibilityLabel="COO"
                  />
                  <Text style={styles.moduleTitle}>COO</Text>
                  <Text style={styles.moduleDescription}>Object-oriented programming language.</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.moduleContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('CourseOverview', { course: 'Java' })}>
                  <Image
                    source={require('../assets/java.jpg')}
                    style={styles.moduleImage}
                    accessibilityLabel="Java"
                  />
                  <Text style={styles.moduleTitle}>Java</Text>
                  <Text style={styles.moduleDescription}>High-level, class-based programming language.</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.moduleContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('CourseOverview', { course: 'C Programming' })}>
                  <Image
                    source={require('../assets/c-programming.png')}
                    style={styles.moduleImage}
                    accessibilityLabel="C Programming"
                  />
                  <Text style={styles.moduleTitle}>C Programming</Text>
                  <Text style={styles.moduleDescription}>Procedural programming language.</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.moduleContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('CourseOverview', { course: 'Java Programming' })}>
                  <Image
                    source={require('../assets/java-programming.jpg')}
                    style={styles.moduleImage}
                    accessibilityLabel="Java Programming"
                  />
                  <Text style={styles.moduleTitle}>Java Programming</Text>
                  <Text style={styles.moduleDescription}>Advanced concepts of Java.</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.moduleContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('CourseOverview', { course: 'Python Programming' })}>
                  <Image
                    source={require('../assets/python-programming.jpg')}
                    style={styles.moduleImage}
                    accessibilityLabel="Python Programming"
                  />
                  <Text style={styles.moduleTitle}>Python Programming</Text>
                  <Text style={styles.moduleDescription}>Versatile programming language for web development and data analysis.</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.moduleContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('CourseOverview', { course: 'C++ Programming' })}>
                  <Image
                    source={require('../assets/cpp-programming.png')}
                    style={styles.moduleImage}
                    accessibilityLabel="C++ Programming"
                  />
                  <Text style={styles.moduleTitle}>C++ Programming</Text>
                  <Text style={styles.moduleDescription}>Language supporting object-oriented, generic, and functional programming.</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </Container>

        {/* Section: Computer Science */}
        <Container>
          <View style={styles.sectionHeader}>
            <Heading style={styles.containerHeading}>Computer Science</Heading>
            <TouchableOpacity 
              onPress={() => navigation.navigate('ComputerScienceDetails')} // Navigate to view all Computer Science topics
            >
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.moduleRow}>
              {/* Computer Science Modules */}
              <View style={styles.moduleContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('CourseOverview', { course: 'Data Structures' })}>
                  <Image
                    source={require('../assets/data-structures.jpg')}
                    style={styles.moduleImage}
                    accessibilityLabel="Data Structures"
                  />
                  <Text style={styles.moduleTitle}>Data Structures</Text>
                  <Text style={styles.moduleDescription}>Study of data organization and manipulation.</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.moduleContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('CourseOverview', { course: 'Operating Systems' })}>
                  <Image
                    source={require('../assets/operating-systems.jpg')}
                    style={styles.moduleImage}
                    accessibilityLabel="Operating Systems"
                  />
                  <Text style={styles.moduleTitle}>Operating Systems</Text>
                  <Text style={styles.moduleDescription}>Fundamentals of operating system design and implementation.</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.moduleContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('CourseOverview', { course: 'Computer Networks' })}>
                  <Image
                    source={require('../assets/computer-networks.jpg')}
                    style={styles.moduleImage}
                    accessibilityLabel="Computer Networks"
                  />
                  <Text style={styles.moduleTitle}>Computer Networks</Text>
                  <Text style={styles.moduleDescription}>Introduction to network protocols and architecture.</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.moduleContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('CourseOverview', { course: 'Database Management' })}>
                  <Image
                    source={require('../assets/database-management.jpg')}
                    style={styles.moduleImage}
                    accessibilityLabel="Database Management"
                  />
                  <Text style={styles.moduleTitle}>Database Management</Text>
                  <Text style={styles.moduleDescription}>Design and management of databases.</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.moduleContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('CourseOverview', { course: 'Data Analysis' })}>
                  <Image
                    source={require('../assets/data-analysis.jpg')}
                    style={styles.moduleImage}
                    accessibilityLabel="Data Analysis"
                  />
                  <Text style={styles.moduleTitle}>Data Analysis</Text>
                  <Text style={styles.moduleDescription}>Techniques and tools for analyzing data.</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.moduleContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('CourseOverview', { course: 'Software Engineering' })}>
                  <Image
                    source={require('../assets/software-engineering.jpg')}
                    style={styles.moduleImage}
                    accessibilityLabel="Software Engineering"
                  />
                  <Text style={styles.moduleTitle}>Software Engineering</Text>
                  <Text style={styles.moduleDescription}>Principles and practices of software development.</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </Container>

        {/* Section: Artificial Intelligence */}
        <Container>
          <View style={styles.sectionHeader}>
            <Heading style={styles.containerHeading}>Artificial Intelligence</Heading>
            <TouchableOpacity 
              onPress={() => navigation.navigate('AI_Courses')} // Navigate to view all AI courses
            >
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.moduleRow}>
              {/* AI Modules */}
              <View style={styles.moduleContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('CourseOverview', { course: 'Introduction to AI' })}>
                  <Image
                    source={require('../assets/ai1.jpg')}
                    style={styles.moduleImage}
                    accessibilityLabel="Introduction to AI"
                  />
                  <Text style={styles.moduleTitle}>Introduction to AI</Text>
                  <Text style={styles.moduleDescription}>Learn the basics of Artificial Intelligence, including key concepts and applications.</Text>
                  <Text style={styles.modulePrice}>R1299.99</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.moduleContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('CourseOverview', { course: 'Machine Learning Basics' })}>
                  <Image
                    source={require('../assets/ai2.jpg')}
                    style={styles.moduleImage} 
                    accessibilityLabel="Machine Learning Basics"
                  />
                  <Text style={styles.moduleTitle}>Machine Learning Basics</Text>
                  <Text style={styles.moduleDescription}>A comprehensive introduction to machine learning techniques and algorithms.</Text>
                  <Text style={styles.modulePrice}>R129.99</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.moduleContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('CourseOverview', { course: 'Deep Learning Fundamentals' })}>
                  <Image
                    source={require('../assets/ai3.jpg')}
                    style={styles.moduleImage}
                    accessibilityLabel="Deep Learning Fundamentals"
                  />
                  <Text style={styles.moduleTitle}>Deep Learning Fundamentals</Text>
                  <Text style={styles.moduleDescription}>Explore deep learning methodologies and their applications in AI.</Text>
                  <Text style={styles.modulePrice}>R149.99</Text>
                </TouchableOpacity>
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
  containerHeading: {
    marginHorizontal: 5,
    fontSize: 20,
    fontWeight: '400',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Pushes items to the edges
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: -25,
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
    textAlign: 'right',
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
  logo: {
    width: 100, // Adjusted size
    height: 30, // Adjusted size
  },
});

export default Home;
