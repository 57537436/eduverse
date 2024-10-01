// app/Footer.tsx
import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

const Footer: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleHomeClick = () => {
    navigation.navigate('index');
  };

  const handleSkulClick = () => {
    navigation.navigate('place'); // Change 'place' to the actual screen name for the Skul button
  };

  const handleProfileClick = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={handleHomeClick} style={styles.iconButton}>
        <Ionicons name="home" size={24} color="#007bff" />
        <Text style={styles.iconLabel}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSkulClick} style={styles.iconButton}>
        <Ionicons name="school" size={24} color="#007bff" />
        <Text style={styles.iconLabel}>Skul</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="notifications-outline" size={24} color="#007bff" />
        <Text style={styles.iconLabel}>Notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleProfileClick} style={styles.iconButton}>
        <FontAwesome name="user" size={24} color="#007bff" />
        <Text style={styles.iconLabel}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconButton: {
    padding: 10,
    alignItems: 'center',
  },
  iconLabel: {
    fontSize: 12,
    color: '#007bff',
    marginTop: 5,
  },
});

export default Footer;
