import React from 'react';
import { Stack, Link } from 'expo-router';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { Heading } from '@gluestack-ui/themed';
import { Text, Image, ScrollView, View, TouchableOpacity } from 'react-native';
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

      <ScrollView showsVerticalScrollIndicator={true}>
        {/* Button to Navigate to Dashboard */}
        <TouchableOpacity 
          style={{ backgroundColor: '#007bff', padding: 8, borderRadius: 5, margin: 10, alignItems: 'center' }} 
          onPress={() => navigation.navigate('Dashboard')} // Navigate to Dashboard
        >
          <Text style={{ color: '#fff', fontSize: 14 }}>Go to Dashboard</Text>
        </TouchableOpacity>

        <Heading style={{ fontSize: 32, fontWeight: '500', marginHorizontal: 5 }}>Courses</Heading>
        <Text style={{ marginHorizontal: 5, fontSize: 16, marginBottom: -20 }}>What do you wanna learn?</Text>

        {/* First Container */}
        <Container>
          <Heading style={{ marginHorizontal: -30, fontSize: 20, fontWeight: '400' }}>Programming</Heading>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
              <Image
                source={require('../assets/php.jpg')}
                style={{ width: 200, height: 150, marginHorizontal: 1, borderRadius: 10 }} // Apply rounded corners
                alt="Programming Image"
              />
              <Image
                source={require('../assets/coo.jpg')}
                style={{ width: 200, height: 150, marginHorizontal: 80, borderRadius: 10 }} // Apply rounded corners
                alt="Programming Image"
              />
              <Image
                source={require('../assets/java.jpg')}
                style={{ width: 200, height: 150, marginHorizontal: 20, borderRadius: 10 }} // Apply rounded corners
                alt="Programming Image"
              />
            </View>
          </ScrollView>
        </Container>

        {/* Second Container */}
        <Container>
          <Heading style={{ marginHorizontal: -30, fontSize: 20, fontWeight: '400' }}>Software Engineering</Heading>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
              <Image
                source={require('../assets/hlooho.jpg')}
                style={{ width: 200, height: 150, marginHorizontal: 1, borderRadius: 10 }} // Apply rounded corners
                alt="Programming Image"
              />
              <Image
                source={require('../assets/soft.jpg')}
                style={{ width: 200, height: 150, marginHorizontal: 80, borderRadius: 10 }} // Apply rounded corners
                alt="Programming Image"
              />
              <Image
                source={require('../assets/clss.jpg')}
                style={{ width: 200, height: 150, marginHorizontal: 20, borderRadius: 10 }} // Apply rounded corners
                alt="Programming Image"
              />
            </View>
          </ScrollView>
        </Container>

        {/* Third Container */}
        <Container>
          <Heading style={{ marginHorizontal: -30, fontSize: 20, fontWeight: '400' }}>Artificial Intelligence</Heading>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
              <Image
                source={require('../assets/new.jpg')}
                style={{ width: 200, height: 150, marginHorizontal: 1, borderRadius: 10 }} // Apply rounded corners
                alt="Programming Image"
              />
              <Image
                source={require('../assets/coo.jpg')}
                style={{ width: 200, height: 150, marginHorizontal: 80, borderRadius: 10 }} // Apply rounded corners
                alt="Programming Image"
              />
              <Image
                source={require('../assets/bist.jpg')}
                style={{ width: 200, height: 150, marginHorizontal: 20, borderRadius: 10 }} // Apply rounded corners
                alt="Programming Image"
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

export default Home;
