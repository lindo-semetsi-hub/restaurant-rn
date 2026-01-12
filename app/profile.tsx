import { useEffect, useState } from 'react';
import { Button, ScrollView, Text, TextInput } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState('');

  const 
  [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name);
        setSurname(user.surname);
             setEmail(user.email);
      setContactNumber(user.contactNumber);
        setAddress(user.address);
         setCardNumber(user.cardNumber);
    }
  }, [user]);

  const handleUpdate = () => {
    if (!name || !surname || !email || !contactNumber || !address || !cardNumber) {
      alert('Please fill all fields');
      return;
    }
    updateProfile({ name, surname, email, contactNumber, address, cardNumber });
    alert('Profile updated!');
  };

  if (!user) return <Text>Please login to view profile</Text>;

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 20 }}>Profile</Text>

      <Text>Name:</Text>
      <TextInput value={name} onChangeText={setName} style={{ borderWidth: 1, padding: 10, marginVertical: 5 }} />

      <Text>Surname:</Text>
      <TextInput value={surname} onChangeText={setSurname} style={{ borderWidth: 1, padding: 10, marginVertical: 5 }} />

      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} keyboardType="email-address" style={{ borderWidth: 1, padding: 10, marginVertical: 5 }} />

      <Text>Contact Number:</Text>
      <TextInput value={contactNumber} onChangeText={setContactNumber} style={{ borderWidth: 1, padding: 10, marginVertical: 5 }} />

      <Text>Address:</Text>
      <TextInput value={address} onChangeText={setAddress} style={{ borderWidth: 1, padding: 10, marginVertical: 5 }} />

      <Text>Card Number:</Text>
      <TextInput value={cardNumber} onChangeText={setCardNumber} keyboardType="numeric" style={{ borderWidth: 1, padding: 10, marginVertical: 5 }} />

      <Button title="Update Profile" onPress={handleUpdate} />
    </ScrollView>
  );
}