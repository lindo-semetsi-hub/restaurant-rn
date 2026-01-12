import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCart } from '../context/CartContext';

export default function Cart() {

    const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 10 }}>
          your cart
        </Text>

        <Text>
         empty cart
        </Text>

        <View style={{ marginTop: 30 }}>
          <Button
            title="Go to Checkout"
            onPress={() => router.push('/checkout' as any)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}