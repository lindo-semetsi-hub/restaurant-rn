import { router } from 'expo-router';
import { useState } from 'react';
import { Button, ScrollView, Text, TextInput, View } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const success = login(email, password);
    if (success) router.push('/index' as any);
    else alert('Invalid credentials');
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 20 }}>Login</Text>

      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} keyboardType="email-address" style={{ borderWidth: 1, padding: 10, marginVertical: 5 }} />

      <Text>Password:</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry style={{ borderWidth: 1, padding: 10, marginVertical: 5 }} />

      <Button title="Login" onPress={handleLogin} />
      <View style={{ marginTop: 10 }}>
        <Button title="Go to Register" onPress={() => router.push('/register' as any)} />
      </View>
    </ScrollView>
  );
}