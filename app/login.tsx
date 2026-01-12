import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Login() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Login Screen</Text>

      <Link href="/register">
        <Text style={{ color: 'blue' }}>Go to Register</Text>
      </Link>
    </View>
  );
}