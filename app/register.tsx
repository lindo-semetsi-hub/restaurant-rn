import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Register() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Register Screen</Text>

      <Link href="/login">
        <Text style={{ color: 'blue' }}>Back to Login</Text>
      </Link>
    </View>
  );
}