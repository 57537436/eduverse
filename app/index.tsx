import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, Button, StyleSheet, Image } from "react-native";
import { useTheme } from "react-native-paper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Footer from './Footer'; // Import the Footer component

const Hero = () => {
  const { colors } = useTheme();

  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = (text: string) => {
    setSearchQuery(text);
  };

  const onSubmit = () => {
    console.log("submitted");
  };

  const features = [
    {
      name: "Trusted By Basotho and Internationals",
      icon: "check-circle",
    },
    {
      name: "Over 50+ Courses",
      icon: "book-open",
    },
    {
      name: "Outstanding Ratings",
      icon: "star",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Features Section */}
        <View style={{ marginBottom: 24 }}>
          <View 
            style={{ 
              flexDirection: 'row', 
              justifyContent: 'space-around', 
              alignItems: 'flex-start', 
              flexWrap: 'wrap', 
              width: '100%' 
            }}
          >
            {features.map((item, idx) => (
              <View 
                key={idx} 
                style={{ 
                  alignItems: 'center', 
                  marginHorizontal: 12, 
                  width: '30%',  // Ensure text wraps inside each feature
                }}
              >
                <MaterialCommunityIcons 
                  name={item.icon} 
                  size={28} 
                  color={colors.primary} 
                />
                <Text 
                  style={{ 
                    color: colors.onSurface, 
                    textAlign: 'center', 
                    fontSize: 12,
                    marginTop: 8,
                    flexWrap: 'wrap' // Ensure text wraps
                  }}
                >
                  {item.name}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Title Section */}
        <Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center', color: colors.onSurface }}>
          Explore in-demand courses and develop cutting edge skills
        </Text>

        {/* Description Section */}
        <Text style={{ fontSize: 16, textAlign: 'center', marginTop: 16, color: colors.onSurface }}>
          Unlock your potential and transform your career with our expertly crafted courses. Join
          thousands of learners who have gained valuable skills and real-world knowledge to stand
          out in today's competitive job market. Start your journey towards success today and
          invest in yourself for a brighter future!
        </Text>

        

               {/* Image Section */}
        <View style={{ alignItems: 'center', marginBottom: 24, paddingTop: 50 }}>
          <Image
            source={require('../assets/new.jpg')} // Use the relative path to your image
            style={{ width: 300, height: 300, borderRadius: 19 }} // Adjust the width and height as needed
          />
        </View>

      </ScrollView>
      {/* Footer Component */}
      <Footer /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the container take full height
  },
  scrollView: {
    paddingHorizontal: 16,
    paddingVertical: 28,
    flexGrow: 1, // Allows the ScrollView to grow
  },
});

export default Hero;
