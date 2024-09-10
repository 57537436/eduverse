// Footer.tsx
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '~/navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the type for navigation prop
type FooterNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface FooterProps {
  onSearchPress: () => void;
}

const Footer: React.FC<FooterProps> = ({ onSearchPress }) => {
  // Use the navigation type here
  const navigation = useNavigation<FooterNavigationProp>();

  const goHome = () => {
    navigation.navigate('Home'); // Navigate to the Home screen
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.iconButton} onPress={goHome}>
        <Icon name="home" size={24} color="#007bff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton} onPress={onSearchPress}>
        <Icon name="search" size={24} color="#007bff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Icon name="save" size={24} color="#007bff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Icon name="person" size={24} color="#007bff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  iconButton: {
    padding: 10,
  },
});

export default Footer;
