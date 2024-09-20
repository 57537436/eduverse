import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, SafeAreaView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types'; // Adjust the path if needed

type Props = StackScreenProps<RootStackParamList, 'personalEdit'>; // Correct type for route and navigation

const EditPersonalScreen: React.FC<Props> = ({ route, navigation }) => {
  const { user } = route.params; // Destructure the user from route params

  // Set initial state with user data
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [email, setEmail] = useState(user.email);
  const [contactNumbers, setContactNumbers] = useState(user.contactNumbers);

  const handleSave = () => {
    console.log('Profile updated:', { name, surname, email, contactNumbers });
    navigation.goBack(); // Navigate back to the profile page
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.header}>Edit Profile</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Surname"
          value={surname}
          onChangeText={setSurname}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        {contactNumbers.map((number, index) => (
          <TextInput
            key={index}
            style={styles.input}
            placeholder={`Contact Number ${index + 1}`}
            value={number}
            onChangeText={(text) => {
              const updatedNumbers = [...contactNumbers];
              updatedNumbers[index] = text;
              setContactNumbers(updatedNumbers);
            }}
          />
        ))}
        <Button title="Save" onPress={handleSave} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});

export default EditPersonalScreen;
