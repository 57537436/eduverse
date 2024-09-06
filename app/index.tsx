import React from 'react';
import { Stack, Link } from 'expo-router';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import { Heading } from '@gluestack-ui/themed';
import { Text, Image, ScrollView, View } from 'react-native'; 



export default function Home() {
  return (
    <>
     <Heading style={{ fontSize: 32, fontWeight: '500' }}>Courses</Heading>
    <Text style={{ marginHorizontal: 5, fontSize: 16, marginBottom: -20  }}>What do you wanna learn?</Text>
      <Stack.Screen options={{ title: 'Home' }} />
          <Container>
          <Heading style={{marginHorizontal: -30, fontSize: 20, fontWeight: '400' }}>Programming</Heading>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', paddingVertical: 10 }}>

          <Image
           source={require('../assets/favicon.png')} // Replace with your image URL
          style={{ width: 200, height: 150, marginHorizontal: 1 }}
          alt="Programming Image" // Alt text to prevent warnings
        />

            <Image
           source={require('../assets/favicon.png')} // Replace with your image URL
          style={{ width: 200, height: 150, marginHorizontal: 80 }}
          alt="Programming Image" // Alt text to prevent warnings
              />

            <Image
           source={require('../assets/icon.png')} // Replace with your image URL
          style={{ width: 200, height: 150, marginHorizontal: 20 }}
          alt="Programming Image" // Alt text to prevent warnings
                />
                 </View>
                 </ScrollView>

          </Container>

          <Container>
          <Heading style={{marginHorizontal: -30, fontSize: 20, fontWeight: '400' }}>Software Engineering</Heading>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', paddingVertical: 10 }}>

          <Image
           source={require('../assets/favicon.png')} // Replace with your image URL
          style={{ width: 200, height: 150, marginHorizontal: 1 }}
          alt="Programming Image" // Alt text to prevent warnings
        />

            <Image
           source={require('../assets/favicon.png')} // Replace with your image URL
          style={{ width: 200, height: 150, marginHorizontal: 80 }}
          alt="Programming Image" // Alt text to prevent warnings
              />

            <Image
           source={require('../assets/icon.png')} // Replace with your image URL
          style={{ width: 200, height: 150, marginHorizontal: 20 }}
          alt="Programming Image" // Alt text to prevent warnings
                />
                 </View>
                 </ScrollView>

             <Link href={{ pathname: '/details', params: { name: 'Dan' }}} asChild>
              <Button title="Show Details" />
            </Link>
          </Container>
          
    </>
  );
}
