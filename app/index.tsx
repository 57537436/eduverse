import React from 'react';
import { Stack, Link } from 'expo-router';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { Heading } from '@gluestack-ui/themed';
import { Text, Image, ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types'; // Import the types
import HeaderButtons from '~/components/HeaderButtons'; // Import the custom header component

// Define navigation prop type
type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home: React.FC = () => {
  const navigation = useNavigation<NavigationProp>(); // Use the typed navigation

  return (
    <>
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

        {/* First Container */}
        <Container>
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
            </View>
          </ScrollView>
        </Container>

        {/* Second Container */}
        <Container>
          <Heading style={styles.containerHeading}>Software Engineering</Heading>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.imageRow}>
              <Image
                source={require('../assets/hlooho.jpg')}
                style={styles.image}
                alt="Software Engineering"
              />
              <Image
                source={require('../assets/soft.jpg')}
                style={styles.image}
                alt="Software"
              />
              <Image
                source={require('../assets/clss.jpg')}
                style={styles.image}
                alt="Class"
              />
            </View>
          </ScrollView>
        </Container>

        {/* Third Container */}
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

          <Link href={{ pathname: '/details', params: { name: 'Dan' }}} asChild>
            <Button title="Show Details" />
          </Link>
        </Container>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingVertical: 10,
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
});

export default Home;
