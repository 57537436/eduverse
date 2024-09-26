import * as React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Text, ProgressBar, MD3Colors } from 'react-native-paper';
import { RouteProp, NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '~/navigation/types'; // Adjust this path as needed
import { Container } from '~/components/Container';
import { Heading } from '@gluestack-ui/themed';

// Define route and navigation types
type EnrolledModulesScreenRouteProp = RouteProp<RootStackParamList, 'EnrolledModules'>;

const EnrolledModulesScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<EnrolledModulesScreenRouteProp>();

  // Retrieve the modules passed as a parameter
  const { modules } = route.params;

  return (
    <View style={styles.container}>
      <Container>
        {/* Heading */}
        <Heading style={styles.heading}>All Enrolled Modules</Heading>

        {/* Scrollable list of all modules */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.moduleColumn}>
            {modules.map((module) => (
              <View key={module.id} style={styles.moduleContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('CourseOverview', { course: module.name })}>
                  <Image
                    source={module.image}
                    style={styles.moduleImage}
                    accessibilityLabel={module.name}
                  />
                  <Text style={styles.moduleTitle}>{module.name}</Text>
                  <Text style={styles.moduleDescription}>{module.description}</Text>
                </TouchableOpacity>
                <ProgressBar progress={module.progress} color={MD3Colors.error50} style={styles.progressBar} />
              </View>
            ))}
          </View>
        </ScrollView>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  moduleColumn: {
    flexDirection: 'column',
  },
  moduleContainer: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    padding: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  moduleImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  moduleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  moduleDescription: {
    fontSize: 14,
    color: '#666',
  },
  progressBar: {
    marginTop: 10,
  },
});

export default EnrolledModulesScreen;
