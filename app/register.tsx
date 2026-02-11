import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function RegisterScreen() {
  const { register } = useAuth();

  const [name, setName] = useState(''); const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  const [error, setError] = useState('');

  const handleRegister = () => {
    setError('');

    if (!name ||
      !surname ||
      !email ||
      !password ||
      !contactNumber ||
      !address ||
      !cardNumber
    ) {
      setError('Please fill in all fields.');
      return;
    }

          if (cardNumber.length !== 16) {
    
      
      setError('Card number must be exactly 16 digits.');
      return;
    }

    const success = register({
      name,
          surname,
         email,
       password,
      contactNumber,

      address,

      cardNumber,
    });

    if (!success) {
      setError('Email already registered.');
      return;
    }

    router.replace('/login');
  };

  const handleCardChange = (text: string) => {

    //no numeric characters
    const numericText = text.replace(/[^0-9]/g, '');

          //limiting card numbers to 16 numbers
    if (numericText.length <= 16) {
      setCardNumber(numericText);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      {error ? <Text style={styles.error}>{error}</Text> : null}

            <TextInput
        placeholder="Name"
        placeholderTextColor="#aaa"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Surname"
        placeholderTextColor="#aaa"
        style={styles.input}
        value={surname}
        onChangeText={setSurname}
      />

      <TextInput
        placeholder="Email"
        placeholderTextColor="#aaa"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#aaa"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

        <TextInput placeholder="Contact Number"
           placeholderTextColor="#aaa"
          style={styles.input}
           value={contactNumber}
             onChangeText={setContactNumber}
            keyboardType="phone-pad"
      />

      <TextInput
        placeholder="Address"
        placeholderTextColor="#aaa"
        style={styles.input}
        value={address}
        onChangeText={setAddress}
      />

      <TextInput
        placeholder="Card Number (16 digits)"
        placeholderTextColor="#aaa"
        style={styles.input}
        value={cardNumber}
        onChangeText={handleCardChange}
        keyboardType="numeric"
        maxLength={16}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text> </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/login')}>
        <Text style={styles.link}>Already have an account? Login</Text> </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0D0D0D',
    padding: 24,
    justifyContent: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },


  input: {
    backgroundColor: '#1A1A1A',
    color: '#FFFFFF',
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#1E90FF',
  },
  button: {backgroundColor: '#1E90FF',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {color: '#1E90FF',
     marginTop: 15,
    textAlign: 'center',
  },
  error: { color: '#FF4C4C',
    marginBottom: 10,
    textAlign: 'center',
  },
});