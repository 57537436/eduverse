import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, Modal, TextInput, Alert } from 'react-native';
import { Text, RadioButton, Button, Card, Title, Paragraph } from 'react-native-paper';
import { RootStackParamList } from '~/navigation/types';

type PaymentScreenRouteProp = RouteProp<RootStackParamList, 'PaymentScreen'>;

const PaymentScreen: React.FC = () => {
  const route = useRoute<PaymentScreenRouteProp>();
  const { courseTitle, courseDescription, courseImg, coursePrice } = route.params;
  const [paymentMethod, setPaymentMethod] = useState('Mpesa');
  const [modalVisible, setModalVisible] = useState(false);
  const [pin, setPin] = useState('');

  const getPaymentDetails = () => {
    switch (paymentMethod) {
      case 'Ecocash':
        return { name: 'Eduverse Academy', detail: '68944' };
      case 'Mpesa':
        return { name: 'Eduverse Academy', detail: '58914' };
      case 'Bank':
        return { name: 'Eduverse Academy', detail: '9080000000' };
      default:
        return { name: '', detail: '' };
    }
  };

  const handlePayment = () => {
    setModalVisible(true);
  };

  const handleConfirmPayment = () => {
    setModalVisible(false);
    if (pin) {
      Alert.alert('Payment Successful', `Your payment with PIN: ${pin} was successful!`);
    } else {
      Alert.alert('Payment Failed', 'Please enter a valid PIN.');
    }
  };

  const { name, detail } = getPaymentDetails();
  //console.log({ courseTitle, courseDescription, courseImg, coursePrice }); 
  return (
    <View style={styles.container}>
      {/* Course Header */}
      <View style={styles.courseHeader}>
        <Card style={styles.courseCard}>
          {typeof courseImg === 'string' ? (
            <Card.Cover source={{ uri: courseImg }} style={styles.courseImage} />
          ) : (
            <Text>No Image Available</Text>
          )}
        </Card>
        <View style={styles.courseInfo}>
          <Title style={styles.courseTitle}>{courseTitle}</Title>
          {courseDescription ? (
            <Paragraph style={styles.courseDescription}>{courseDescription}</Paragraph>
          ) : (
            <Text>No Description Available</Text>
          )}
        </View>
      </View>

      {/* Payment Method Selection */}
      <View style={styles.paymentOptions}>
        <RadioButton.Group
          onValueChange={(newValue) => setPaymentMethod(newValue)}
          value={paymentMethod}
        >
          <View style={[styles.radioButtonContainer, styles.optionBorder]}>
            <Text>Mpesa</Text>
            <RadioButton value="Mpesa" />
          </View>

          <View style={[styles.radioButtonContainer, styles.optionBorder]}>
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
          <Text>{paymentMethod === 'Bank' ? 'Account Number' : 'Merchant Number'}</Text>
          <Text>{detail}</Text>
        </View>
      </View>

      {/* Pay Button */}
      <View style={styles.payButtonContainer}>
        <Button mode="contained" buttonColor="indigo" onPress={handlePayment}>
          Pay {coursePrice}
        </Button>
      </View>

      {/* Modal for entering PIN */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Enter Your PIN for {paymentMethod}</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter PIN"
              value={pin}
              onChangeText={setPin}
              keyboardType="numeric"
              secureTextEntry
            />
            <View style={styles.buttonRow}>
              <Button mode="contained" onPress={handleConfirmPayment}>
                Confirm
              </Button>
              <Button mode="text" onPress={() => setModalVisible(false)}>
                Cancel
              </Button>
            </View>
          </View>
        </View>
      </Modal>
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
    borderColor: 'grey',
  },
  optionBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
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
  payButtonContainer: {
    marginTop: 'auto',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default PaymentScreen;
