import * as React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Button, Text, ProgressBar, MD3Colors } from 'react-native-paper';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '~/navigation/types';
import { Container } from '~/components/Container';
import { Heading } from '@gluestack-ui/themed';

const ChangePasswordScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

   // Modules data to be passed to the new screen
   const enrolledModules = [
    {
      id: 1,
      name: 'PHP',
      description: 'Server-side scripting language.',
      image: require('../assets/php.jpg'),
      progress: 0.5,
    },
    {
      id: 2,
      name: 'COO',
      description: 'Object-oriented programming language.',
      image: require('../assets/coo.jpg'),
      progress: 0.5,
    },
    // Add more modules as needed
  ];

  // Handle account navigation
  const handleChangePasswordClick = () => {
    navigation.navigate('account');
  };

  const handleViewAllClick = () => {
    const enrolledModules = [
      { id: 1, name: 'PHP', description: 'Server-side scripting language.', image: require('../assets/php.jpg'), progress: 0.5 },
      { id: 2, name: 'COO', description: 'Object-oriented programming language.', image: require('../assets/coo.jpg'), progress: 0.5 },
      { id: 3, name: 'COO', description: 'Object-oriented programming language.', image: require('../assets/coo.jpg'), progress: 0.5 },
      // Add more modules as needed...
    ];
  
    navigation.navigate('EnrolledModules', { modules: enrolledModules });
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
        <TouchableOpacity style={styles.viewAllButton} onPress={handleViewAllClick}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>

        {/* Programming Modules with Vertical Scroll */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.moduleColumn}>
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
              <ProgressBar progress={0.5} color={MD3Colors.error50} style={styles.progressBar} />
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
              <ProgressBar progress={0.5} color={MD3Colors.error50} style={styles.progressBar} />
            </View>

            {/* Add more modules here following the same structure */}
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
              <ProgressBar progress={0.5} color={MD3Colors.error50} style={styles.progressBar} />
            </View>

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
  button: {
    marginTop: 16,
    backgroundColor: '#007bff',
    width: '80%',
    alignSelf: 'center',
    borderRadius: 5,
  },
  spacer: {
    height: 20, // Adjusted to a positive value for spacing
    marginBottom: -30, // Space between button and programming section
  },
  containerHeading: {
    fontSize: 24,
    marginBottom: 3, // Space between heading and "View All" button
  },
  viewAllButton: {
    alignSelf: 'flex-end', // Right-align "View All" button
    marginBottom: 20, // Space between "View All" button and the modules
  },
  viewAllText: {
    color: '#007bff',
    fontSize: 18,
  },
  moduleColumn: {
    flexDirection: 'column',
  },
  moduleContainer: {
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
  moduleImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  moduleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  moduleDescription: {
    fontSize: 14,
    color: '#666',
  },
  progressBar: {
    marginTop: 10, // Add some space above the progress bar
  },
});

export default ChangePasswordScreen;
