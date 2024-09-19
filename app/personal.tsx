import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Button, Avatar } from 'react-native-paper';

const ProfilePage: React.FC = () => {
  // Sample user data with surname
  const user = {
    name: 'Henry',
    surname: 'Stan', // Added surname
    email: 'john.doe@example.com',
    contactNumbers: ['+1-234-567-890', '+1-987-654-321'],
    // Replace with actual profile picture URL
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <View style={styles.header}>
          <View style={styles.textContainer}>
            <Text style={styles.sectionHeader}>Name</Text>
            <View style={styles.borderContainer}>
              <Text style={styles.name}>{user.name}</Text>
            </View>

            <Text style={styles.sectionHeader}>Surname</Text>
            <View style={styles.borderContainer}>
              <Text style={styles.surname}>{user.surname}</Text>
            </View>

            <Text style={styles.sectionHeader}>Email</Text>
            <View style={styles.borderContainer}>
              <Text style={styles.email}>{user.email}</Text>
            </View>

            <Text style={styles.sectionHeader}>Contact Numbers</Text>
            <View style={styles.borderContainer}>
              {user.contactNumbers.map((number, index) => (
                <Text key={index} style={styles.contactNumber}>
                  {number}
                </Text>
              ))}
            </View>
          </View>
        </View>
        <Card.Actions>
          <Button mode="contained" onPress={() => console.log('Edit Profile')}>Edit Profile</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    flex: 1,
    borderRadius: 10,
    elevation: 4,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  textContainer: {
    flex: 1,
    width: '100%',
  },
  sectionHeader: {
    fontSize: 18,    
    marginBottom: 4,
    marginTop: 16,
  },
  borderContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 8,
    marginBottom: 8,
    width: '100%',
  },
  name: {
    fontSize: 20,
    color: '#555',
  },
  surname: {
    fontSize: 18,
    color: '#555',
  },
  email: {
    fontSize: 16,
    color: '#555',
  },
  contactNumber: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
});

export default ProfilePage;
