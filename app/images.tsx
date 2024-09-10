// app/images.tsx
import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, Text, Image, ScrollView } from 'react-native';
import { RootStackParamList } from '../navigation/types'; // Adjust the import path

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;
type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;

interface Props {
  route: DetailsScreenRouteProp;
  navigation: DetailsScreenNavigationProp;
}

const images: React.FC<Props> = ({ route, navigation }) => {
  const { category } = route.params;

  return (
    <View>
      <Text>Category: {category}</Text>
      <ScrollView>
        {/* Your image rendering logic */}
      </ScrollView>
    </View>
  );
};

export default images;
