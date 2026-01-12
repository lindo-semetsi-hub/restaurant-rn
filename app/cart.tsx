import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Cart() {
  return (
<View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: 'bold' }}>
        Your Cart
      
      </Text>

      <Text style={{ marginTop: 20 }}>
        empty cart
      </Text>

      <Button
        title="Checkout"
        onPress={() => router.push('/checkout' as any)}
      />
    </View>
  );
}