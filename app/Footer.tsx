// app/Footer.tsx
import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, TextInput } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

interface FooterProps {
  data: string[]; // Ensure this is passed correctly
  onSearchPress: () => void;
}

const Footer: React.FC<FooterProps> = ({ data = [], onSearchPress }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [filteredData, setFilteredData] = useState<string[]>([]);

  const handleHomeClick = () => {
    navigation.navigate('index');
  };

  const handleProfileClick = () => {
    navigation.navigate('Profile');
  };

  const handleSearchClick = () => {
    setShowSearchBar(true);
  };

  const handleSearchBarClose = () => {
    setShowSearchBar(false);
    setSearchInput('');
    setFilteredData([]); // Clear filtered data when closing
  };

  const handleSearchInputChange = (text: string) => {
    console.log('Search Input Changed:', text);
    const trimmedText = text.trim();
    setSearchInput(trimmedText);

    // Filter the data based on the input
    if (trimmedText === '') {
      setFilteredData([]);
    } else {
      const filtered = data.filter(item =>
        item.toLowerCase().includes(trimmedText.toLowerCase())
      );
      setFilteredData(filtered);
      console.log('Filtered Data:', filtered); // Check filtered results
    }
  };

  return (
    <View>
      {showSearchBar && (
        <View style={styles.searchBarContainer}>
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
            value={searchInput}
            onChangeText={handleSearchInputChange}
          />
          <TouchableOpacity onPress={handleSearchBarClose}>
            <Ionicons name="close" size={24} color="#007bff" />
          </TouchableOpacity>
          {/* Display the filtered data */}
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <Text key={index} style={styles.filteredItem}>{item}</Text>
            ))
          ) : (
            searchInput.trim() !== '' && (
              <Text style={styles.noResults}>No results found</Text>
            )
          )}
        </View>
      )}
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleHomeClick} style={styles.iconButton}>
          <Ionicons name="home" size={24} color="#007bff" />
          <Text style={styles.iconLabel}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSearchClick} style={styles.iconButton}>
          <Ionicons name="search" size={24} color="#007bff" />
          <Text style={styles.iconLabel}>Search</Text>
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
  searchBarContainer: {
    backgroundColor: '#fff',
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
  },
  filteredItem: {
    padding: 5,
    fontSize: 16,
    color: '#333',
  },
  noResults: {
    color: 'red',
    marginTop: 5,
  },
});

export default Footer;
