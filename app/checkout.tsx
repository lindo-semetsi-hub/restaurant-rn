import { useAuth } from '@/context/AuthContext';
import { router } from 'expo-router';
import { useState } from 'react';
import { Button, ScrollView, Text, TextInput, View } from 'react-native';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const [address, setAddress] = useState('Default Address');
  const [card, setCard] = useState('0000-0000-0000-0000');
const { user } = useAuth();
  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const placeOrder = () => {
    alert(`Order placed!\nTotal: R${total}\nAddress: ${address}\nCard: ${card}`);
    clearCart();
    router.push('/index' as any);
  };

  if (!user) {
  router.replace('/login');
  return null;
}

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 20 }}>
        Checkout 🛍️
      </Text>

      <Text>Delivery Address:</Text>
      <TextInput
        value={address}
        onChangeText={setAddress}
        style={{
          borderWidth: 1,
          padding: 10,
          marginVertical: 10,
          borderRadius: 8,
        }}
      />

      <Text>Card Number:</Text>
      <TextInput
        value={card}
        onChangeText={setCard}
        style={{
          borderWidth: 1,
          padding: 10,
          marginVertical: 10,
          borderRadius: 8,
        }}
        keyboardType="numeric"
      />

      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 15 }}>
        Total: R{total}
      </Text>

      <View style={{ marginTop: 20 }}>
        <Button title="Place Order" onPress={placeOrder} />
      </View>
    </ScrollView>
  );
}