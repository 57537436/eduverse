// components/HeaderButtons.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; // Use Expo Router's useRouter

const HeaderButtons: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.push('/SignUpScreen')} // Adjust based on your routing setup
      >
        <Text style={styles.buttonText}>SignUp</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.push('/LogInScreen')} // Adjust based on your routing setup
      >
        <Text style={styles.buttonText}>LogIn</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#007bff',
    fontSize: 16,
  },
});

export default HeaderButtons;
