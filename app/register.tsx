import { router } from 'expo-router';
import { useState } from 'react';
import { Button, ScrollView, Text, TextInput, View } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function Register() {
  const { register } = useAuth();




  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  const 
  handleRegister = () => {
    if (!name || !surname || !email || !password || !contactNumber || !address || !cardNumber) {
      alert('Please fill all fields');
      return;
    }

    const 
    success = register({ name, surname, email, password, contactNumber, address, cardNumber });
    if (success) router.push('/index' as any);
    else alert('Email already registered');
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 20 }}>Register</Text>

      <Text>Name:</Text>

      <TextInput value={name} onChangeText={setName} style={{ borderWidth: 1, padding: 10, marginVertical: 5 }} />

      <Text>Surname:</Text>

      <TextInput value={surname} onChangeText={setSurname} style={{ borderWidth: 1, padding: 10, marginVertical: 5 }} />

      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} keyboardType="email-address" style={{ borderWidth: 1, padding: 10, marginVertical: 5 }} />

      <Text>Password:</Text>


      <TextInput value={password} onChangeText={setPassword} secureTextEntry style={{ borderWidth: 1, padding: 10, marginVertical: 5 }} />

      <Text>Contact Number:</Text>

      
      <TextInput value={contactNumber} onChangeText={setContactNumber} style={{ borderWidth: 1, padding: 10, marginVertical: 5 }} />

      <Text>Address:</Text>
      <TextInput value={address} onChangeText={setAddress} style={{ borderWidth: 1, padding: 10, marginVertical: 5 }} />

      <Text>Card Number:</Text>
      <TextInput value={cardNumber} onChangeText={setCardNumber} keyboardType="numeric" style={{ borderWidth: 1, padding: 10, marginVertical: 5 }} />

      <Button title="Register" onPress={handleRegister} />
      <View style={{ marginTop: 10 }}>
        <Button title="Back to Login" onPress={() => router.push('/login' as any)} />
      </View>
    </ScrollView>
  );
}