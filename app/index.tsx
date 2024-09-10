import React from 'react';
import { Stack, Link } from 'expo-router';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { Heading } from '@gluestack-ui/themed';
import { Text, Image, ScrollView, View } from 'react-native';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />

      {/* Wrapping everything inside a vertical ScrollView */}
      <ScrollView showsVerticalScrollIndicator={true}>
        <Heading style={{ fontSize: 32, fontWeight: '500', marginHorizontal: 5 }}>Courses</Heading>
        <Text style={{ marginHorizontal: 5, fontSize: 16, marginBottom: -20 }}>What do you wanna learn?</Text>

        {/* First Container - Programming */}
        <View style={{ marginBottom: -50 }}>
          <Container>
            {/* Row layout for Heading and See More Button */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Heading style={{ marginHorizontal: -30, fontSize: 20, fontWeight: '400' }}>Programming</Heading>
              <Link href={{ pathname: '/details', params: { category: 'Programming' } }} asChild>
                <Button title="View all" />
              </Link>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                <Image
                  source={require('../assets/favicon.png')}
                  style={{ width: 200, height: 150, marginHorizontal: 1 }}
                  alt="Programming Image"
                />
                <Image
                  source={require('../assets/favicon.png')}
                  style={{ width: 200, height: 150, marginHorizontal: 80 }}
                  alt="Programming Image"
                />
                <Image
                  source={require('../assets/icon.png')}
                  style={{ width: 200, height: 150, marginHorizontal: 20 }}
                  alt="Programming Image"
                />
                <Image
                  source={require('../assets/favicon.png')}
                  style={{ width: 200, height: 150, marginHorizontal: 1 }}
                  alt="Programming Image"
                />
              </View>
            </ScrollView>
          </Container>
        </View>

        {/* Second Container - Software Engineering */}
        <View style={{ marginBottom: -50 }}>
          <Container>
            {/* Row layout for Heading and See More Button */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Heading style={{ marginHorizontal: -30, fontSize: 20, fontWeight: '400' }}>Software Engineering</Heading>
              <Link href={{ pathname: '/details', params: { category: 'Software Engineering' } }} asChild>
                <Button title="View all" />
              </Link>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                <Image
                  source={require('../assets/favicon.png')}
                  style={{ width: 200, height: 150, marginHorizontal: 1 }}
                  alt="Software Engineering Image"
                />
                <Image
                  source={require('../assets/favicon.png')}
                  style={{ width: 200, height: 150, marginHorizontal: 80 }}
                  alt="Software Engineering Image"
                />
                <Image
                  source={require('../assets/icon.png')}
                  style={{ width: 200, height: 150, marginHorizontal: 20 }}
                  alt="Software Engineering Image"
                />
              </View>
            </ScrollView>
          </Container>
        </View>

        {/* Third Container - Artificial Intelligence */}
        <View style={{ marginBottom: -50 }}>
          <Container>
            {/* Row layout for Heading and See More Button */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Heading style={{ marginHorizontal: -30, fontSize: 20, fontWeight: '400' }}>Artificial Intelligence</Heading>
              <Link href={{ pathname: '/details', params: { category: 'Artificial Intelligence' } }} asChild>
                <Button title="View all" />
              </Link>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                <Image
                  source={require('../assets/favicon.png')}
                  style={{ width: 200, height: 150, marginHorizontal: 1 }}
                  alt="Artificial Intelligence Image"
                />
                <Image
                  source={require('../assets/favicon.png')}
                  style={{ width: 200, height: 150, marginHorizontal: 80 }}
                  alt="Artificial Intelligence Image"
                />
                <Image
                  source={require('../assets/icon.png')}
                  style={{ width: 200, height: 150, marginHorizontal: 20 }}
                  alt="Artificial Intelligence Image"
                />
              </View>
            </ScrollView>
          </Container>
        </View>
      </ScrollView>
    </>
  );
};


