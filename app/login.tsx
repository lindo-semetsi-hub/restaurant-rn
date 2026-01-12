import { Link, router } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Login() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Login Screen</Text>

      <Button title="Login" onPress={() => router.push('/home')} />

      <Link href="/register">
        <Text style={{ color: 'blue', marginTop: 20 }}>Go to Register</Text>
      </Link>
    </View>
  );
}