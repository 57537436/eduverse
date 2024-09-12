import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons'; // Make sure to install these packages

interface FooterProps {
  onSearchPress: () => void;
}

const Footer: React.FC<FooterProps> = ({ onSearchPress }) => {
  return (
    <View style={styles.footer}>
      {/* Search Button */}
      <TouchableOpacity onPress={onSearchPress} style={styles.iconButton}>
        <Ionicons name="search" size={24} color="#007bff" />
      </TouchableOpacity>
      
      {/* Home Button */}
      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="home" size={24} color="#007bff" />
      </TouchableOpacity>
      
      {/* Notifications Button */}
      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="notifications-outline" size={24} color="#007bff" />
      </TouchableOpacity>
      
      {/* Profile Button */}
      <TouchableOpacity style={styles.iconButton}>
        <FontAwesome name="user" size={24} color="#007bff" />
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
  },
});

export default Footer;
