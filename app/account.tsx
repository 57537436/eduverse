import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types'; // Adjust the path as needed
import { Alert } from 'react-native';

const AccountScreen = () => {
  const [currentPassword, setCurrentPassword] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [isCurrentPasswordVisible, setCurrentPasswordVisible] = React.useState(false);
  const [isPasswordVisible, setPasswordVisible] = React.useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = React.useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Toggle current password visibility
  const toggleCurrentPasswordVisibility = () => {
    setCurrentPasswordVisible(!isCurrentPasswordVisible);
  };

  // Toggle new password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  // Toggle confirm password visibility
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!isConfirmPasswordVisible);
  };
  
  return (
    <View style={styles.container}>
      {/* Enter Current Password */}
      <Text variant="titleMedium" style={styles.label}>Enter Current Password</Text>
      <TextInput
        label="Current Password"
        value={currentPassword}
        onChangeText={setCurrentPassword}
        secureTextEntry={!isCurrentPasswordVisible}
        right={
          <TextInput.Icon
            icon={isCurrentPasswordVisible ? 'eye-off' : 'eye'}
            onPress={toggleCurrentPasswordVisibility}
          />
        }
        style={styles.input}
      />

      {/* Enter Password */}
      <Text variant="titleMedium" style={styles.label}>Enter Password</Text>
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!isPasswordVisible}
        right={
          <TextInput.Icon
            icon={isPasswordVisible ? 'eye-off' : 'eye'}
            onPress={togglePasswordVisibility}
          />
        }
        style={styles.input}
      />

      {/* Confirm Password */}
      <Text variant="titleMedium" style={styles.label}>Confirm Password</Text>
      <TextInput
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={!isConfirmPasswordVisible}
        right={
          <TextInput.Icon
            icon={isConfirmPasswordVisible ? 'eye-off' : 'eye'}
            onPress={toggleConfirmPasswordVisibility}
          />
        }
        style={styles.input}
      />

      {/* Change Password Button */}
      <TouchableOpacity onPress={() => Alert.alert('Change password')} style={styles.button}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    marginBottom: 8,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default AccountScreen;
