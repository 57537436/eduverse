import React from 'react';
import { Stack } from 'expo-router';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { Heading } from '@gluestack-ui/themed';
import { Text, Image, ScrollView, View, TouchableOpacity, StyleSheet, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types'; // Import the types
import HeaderButtons from '~/components/HeaderButtons'; // Import the custom header component
import Footer from './Footer'; // Import the Footer component

// Define navigation prop type
type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home: React.FC = () => {
  const navigation = useNavigation<NavigationProp>(); // Use the typed navigation

  const handleSearchPress = () => {
    // Handle search button press
    console.log('Search button pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen 
        options={{
          title: 'Home',
          headerRight: () => <HeaderButtons />, // Set custom header component
        }} 
      />

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
          <TouchableWithoutFeedback 
            onPress={() => navigation.navigate('AllProgrammingLanguages')} // Navigate to view all programming languages
          >
            <Text style={styles.viewAllText}>View All Programming Languages</Text>
          </TouchableWithoutFeedback>
          <Heading style={styles.containerHeading}>Programming</Heading>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.imageRow}>
              <Image
                source={require('../assets/php.jpg')}
                style={styles.image}
                alt="PHP"
              />
              <Image
                source={require('../assets/coo.jpg')}
                style={styles.image}
                alt="COO"
              />
              <Image
                source={require('../assets/java.jpg')}
                style={styles.image}
                alt="Java"
              />
              <Image
                source={require('../assets/c-programming.png')}
                style={styles.image}
                alt="C Programming"
              />
              <Image
                source={require('../assets/java-programming.jpg')}
                style={styles.image}
                alt="Java Programming"
              />
              <Image
                source={require('../assets/python-programming.jpg')}
                style={styles.image}
                alt="Python Programming"
              />
              <Image
                source={require('../assets/cpp-programming.png')}
                style={styles.image}
                alt="C++ Programming"
              />
            </View>
          </ScrollView>
        </Container>

        {/* Second Container: Computer Science */}
        <Container>
          <TouchableWithoutFeedback 
            onPress={() => navigation.navigate('ComputerScienceDetails')} // Navigate to view all Computer Science topics
          >
            <Text style={styles.viewAllText}>View All Computer Science Topics</Text>
          </TouchableWithoutFeedback>
          <Heading style={styles.containerHeading}>Computer Science</Heading>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.imageRow}>
              <Image
                source={require('../assets/data-structures.jpg')}
                style={styles.image}
                alt="Data Structures"
              />
              <Image
                source={require('../assets/operating-systems.jpg')}
                style={styles.image}
                alt="Operating Systems"
              />
              <Image
                source={require('../assets/computer-networks.jpg')}
                style={styles.image}
                alt="Computer Networks"
              />
              <Image
                source={require('../assets/database-management.jpg')}
                style={styles.image}
                alt="Database Management"
              />
              <Image
                source={require('../assets/data-analysis.jpg')}
                style={styles.image}
                alt="Data Analysis"
              />
              <Image
                source={require('../assets/software-engineering.jpg')}
                style={styles.image}
                alt="Software Engineering"
              />
            </View>
          </ScrollView>
        </Container>

        {/* Third Container: Artificial Intelligence */}
        <Container>
          <Heading style={styles.containerHeading}>Artificial Intelligence</Heading>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.imageRow}>
              <Image
                source={require('../assets/new.jpg')}
                style={styles.image}
                alt="AI"
              />
              <Image
                source={require('../assets/coo.jpg')}
                style={styles.image}
                alt="COO"
              />
              <Image
                source={require('../assets/bist.jpg')}
                style={styles.image}
                alt="BIST"
              />
            </View>
          </ScrollView>

          <Button title="Show Details" onPress={() => navigation.navigate('Details', { category: 'Example' })} />
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
  image: {
    width: 200,
    height: 150,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  viewAllButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20, // Add vertical margin to avoid cut off
    marginHorizontal: 10, // Add horizontal margin to prevent clipping
    alignSelf: 'center', // Center the button horizontally
    minWidth: 150, // Set a minimum width to ensure visibility
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
});

export default Home;
