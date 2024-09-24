import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, RadioButton, Button, Card, Title, Paragraph } from 'react-native-paper';

const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState('Mpesa');

  const getPaymentDetails = () => {
    switch (paymentMethod) {
      case 'Ecocash':
        return { name: 'Eduverse Academy', merchantNumber: '68944' };
      case 'Mpesa':
        return { name: 'Eduverse Academy', merchantNumber: '58914' };
      case 'Bank':
        return { name: 'Eduverse Academy', merchantNumber: '90800000000' }; 
      default:
        return { name: '', merchantNumber: '' };
    }
  };

  const { name, merchantNumber } = getPaymentDetails();

  return (
    <View style={styles.container}>
      {/* Course Header */}
      <View style={styles.courseHeader}>
        <Card style={styles.courseCard}>
          <Card.Cover source={{ uri: 'https://example.com/interior-design.jpg' }} style={styles.courseImage} />
        </Card>
        <View style={styles.courseInfo}>
          <Title style={styles.courseTitle}>C Programming</Title>
          <Paragraph style={styles.courseDescription}>
            Welcome to our C Programming course, a comprehensive journey into the fundamentals of programming.
          </Paragraph>
        </View>
      </View>

      {/* Payment Method Selection */}
      <View style={styles.paymentOptions}>
        <RadioButton.Group
          onValueChange={(newValue) => setPaymentMethod(newValue)}
          value={paymentMethod}
        >
          <View style={styles.radioButtonContainer}>
            <Text>Mpesa</Text>
            <RadioButton value="Mpesa" />
          </View>
          <View style={styles.radioButtonContainer}>
            <Text>Ecocash</Text>
            <RadioButton value="Ecocash" />
          </View>
          <View style={styles.radioButtonContainer}>
            <Text>Bank</Text>
            <RadioButton value="Bank" />
          </View>
        </RadioButton.Group>
      </View>

      {/* Payment Details */}
      <View style={styles.paymentDetails}>
        <View style={styles.paymentRow}>
          <Text>{paymentMethod}</Text>
          <Text>{name}</Text>
        </View>
        <View style={styles.paymentRow}>
          <Text>Merchant Number</Text>
          <Text>{merchantNumber}</Text>
        </View>
      </View>

      {/* Pay Button */}
      <Button mode="contained" icon="arrow-right" onPress={() => console.log('Payment initiated')} style={styles.payButton}>
        Pay R500
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  courseHeader: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  courseCard: {
    width: 100,
    height: 100,
    marginRight: 16,
  },
  courseImage: {
    width: 100,
    height: 100,
  },
  courseInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  courseDescription: {
    fontSize: 14,
    color: '#666',
  },
  paymentOptions: {
    marginBottom: 16,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  paymentDetails: {
    backgroundColor: '#f8f8f8',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  payButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
  },
});

export default PaymentScreen;
