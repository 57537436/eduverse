import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Avatar, Button, Divider, List, IconButton, Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.section}>
        <View style={styles.profileContainer}>
        <Avatar.Image
            size={90}
            source={require('../assets/nu.jpg')} // Update the path to your local image
          />
          <View style={styles.profileInfo}>
            <Text variant="titleLarge">Henry Stan</Text>
            <Button mode="text" onPress={() => Alert.alert('Show Profile')}>
              Show Profile
            </Button>
          </View>
        </View>
        <Divider />
      </View>

      {/* Personal Info Section */}
      <View style={styles.section}>
        <List.Item
          title="Personal Info"
          left={() => <IconButton icon={() => <MaterialCommunityIcons name="account-outline" size={24} />} />}
          right={() => <IconButton icon={() => <MaterialCommunityIcons name="chevron-right" size={24} />} />}
        />
        <Divider />
        <List.Item
          title="Account"
          left={() => <IconButton icon={() => <MaterialCommunityIcons name="cogs" size={24} />} />}
          right={() => <IconButton icon={() => <MaterialCommunityIcons name="chevron-right" size={24} />} />}
        />
      </View>

      {/* Support Section */}
      <View style={styles.section}>
        <Text variant="headlineSmall">Support</Text>
        <List.Item
          title="Get Help"
          left={() => <IconButton icon={() => <MaterialCommunityIcons name="help-circle-outline" size={24} />} />}
          right={() => <IconButton icon={() => <MaterialCommunityIcons name="chevron-right" size={24} />} />}
        />
        <Divider />
        <List.Item
          title="Contact Support"
          left={() => <IconButton icon={() => <MaterialCommunityIcons name="account-cog" size={24} />} />}
          right={() => <IconButton icon={() => <MaterialCommunityIcons name="chevron-right" size={24} />} />}
        />
      </View>

      {/* Logout Button */}
      <View style={styles.logoutButtonContainer}>
        <Button mode="contained" buttonColor="red" onPress={() => Alert.alert('Logout')}>
          Logout
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  section: {
    marginBottom: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileInfo: {
    marginLeft: 16,
  },
  logoutButtonContainer: {
    marginTop: 'auto',
  },
});

export default ProfileScreen;
