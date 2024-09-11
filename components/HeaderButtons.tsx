// components/HeaderButtons.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useRouter } from 'expo-router'; // Use Expo Router's useRouter

const HeaderButtons: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.push('/SignUpScreen')} // Navigate to Sign Up screen
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.push('/LogInScreen')} // Navigate to Log In screen
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: Platform.OS === 'ios' ? 10 : 0, // Adjust margin for iOS
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007bff', // Border color matching the button color
    backgroundColor: '#fff', // White background for buttons
    alignItems: 'center',
  },
  buttonText: {
    color: '#007bff', // Button text color matching the border
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HeaderButtons;
