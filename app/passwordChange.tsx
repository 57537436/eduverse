import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { NavigationProp, useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { RootStackParamList } from '~/navigation/types';

const ChangePasswordScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Handle account navigation
  const handleChangePasswordClick = () => {
    navigation.navigate('account'); // Navigate to the account screen
  };

  return (
    <View style={styles.container}>
      {/* Submit Button */}
      <Button mode="contained" style={styles.button} onPress={handleChangePasswordClick}>
        Change Password
      </Button>
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
    marginTop: 16,
  },
});

export default ChangePasswordScreen;
