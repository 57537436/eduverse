import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types'; // Adjust the path as needed

interface FooterProps {
  onSearchPress: () => void;
}

const Footer: React.FC<FooterProps> = ({ onSearchPress }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleHomeClick = () => {
    navigation.navigate('');
  };

  const handleProfileClick = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.footer}>
      {/* Search Button */}
      <TouchableOpacity onPress={onSearchPress} style={styles.iconButton}>
        <Ionicons name="search" size={24} color="#007bff" />
      </TouchableOpacity>

      {/* Home Button */}
      <TouchableOpacity onPress={handleHomeClick} style={styles.iconButton}>
        <Ionicons name="home" size={24} color="#007bff" />
      </TouchableOpacity>

      {/* Notifications Button */}
      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="notifications-outline" size={24} color="#007bff" />
      </TouchableOpacity>

      {/* Profile Button */}
      <TouchableOpacity onPress={handleProfileClick} style={styles.iconButton}>
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
