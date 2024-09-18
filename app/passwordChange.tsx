import * as React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '~/navigation/types';
import { Container } from '~/components/Container';
import { Heading } from '@gluestack-ui/themed';

const ChangePasswordScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Handle account navigation
  const handleChangePasswordClick = () => {
    navigation.navigate('account');
  };

  return (
    <View style={styles.container}>
      {/* Submit Button */}
      <Button mode="contained" style={styles.button} onPress={handleChangePasswordClick}>
        Change Password
      </Button>

      {/* Add space between the button and the next section */}
      <View style={styles.spacer} />

      {/* Programming Section */}
      <Container>
        {/* Heading at the top */}
        <Heading style={styles.containerHeading}>Modules enrolled in:</Heading>

        {/* View All Button */}
        <TouchableOpacity 
          style={styles.viewAllButton} 
          onPress={() => navigation.navigate('AllProgrammingLanguages')}
        >
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>

        {/* Programming Modules with Vertical Scroll */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.moduleColumn}>
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
            {/* Add the rest of the modules here in the same pattern... */}
            

          </View>
        </ScrollView>
      </Container>
    </View>
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
  searchBarContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  // ChangePasswordScreen specific styles
  button: {
    marginTop: 16,
    backgroundColor: '#007bff',
    width: '80%',
    alignSelf: 'center',
    borderRadius: 5,
  },
  spacer: {
    height: -11, // Space between button and programming section
  },
  containerHeading: {
    fontSize: 24,
    marginBottom: 30, // Space between heading and "View All" button
  },
  viewAllButton: {
    alignSelf: 'flex-end', // Right-align "View All" button
    marginBottom: -11, // Space between "View All" button and the modules
  },
  viewAllText: {
    color: '#007bff',
    fontSize: 20,
  },
  moduleColumn: {
    flexDirection: 'column',
  },
  moduleContainer: {
    width: '100%',
    marginBottom: 20, // Space between modules
  },
  moduleImage: {
    width: '60%',
    height: 110,
    borderRadius: 8,
  },
  moduleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  moduleDescription: {
    fontSize: 12,
    color: '#666',
  },
});



export default ChangePasswordScreen;
