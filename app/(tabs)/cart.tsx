import { router } from 'expo-router';
import { Button, ScrollView, Text, View } from 'react-native';
import { useCart } from '../../context/CartContext';

import { useAuth } from '@/context/AuthContext';



export default function Cart() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
const { user } = useAuth();
  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

 if (!user)

  {
  return (
    <View style={{ padding: 20 }}>
      <Text>Please login to access your cart.</Text>
      <Button title="Go to Login" onPress={() => router.push('/login')} />
    </View>
  );
}



  return (

    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 10 }}>
        Your Cart 🛒
      </Text>

      {cart.length === 0 ? (
        <Text>Cart is empty</Text>
      ) : (
        cart.map((i) => (
          <View
            key={i.id}
            style={{
              marginBottom: 15,
              padding: 10,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#ccc',
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{i.name}</Text>
            <Text>Price: R{i.price}</Text>
            <Text>Quantity: {i.quantity}</Text>

            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <Button title="+" onPress={() => updateQuantity(i.id, i.quantity + 1)} />
              <View style={{ width: 10 }} />
              <Button title="-" onPress={() => updateQuantity(i.id, Math.max(1, i.quantity - 1))} />
              <View style={{ width: 10 }} />
              <Button title="Remove" onPress={() => removeFromCart(i.id)} />
            </View>
          </View>
        ))
      )}

      {cart.length > 0 && (
        <>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>
            Total: R{total}
          </Text>

          <View style={{ marginTop: 15 }}>
            <Button title="Clear Cart" onPress={clearCart} />
          </View>

          <View style={{ marginTop: 15 }}>
            <Button title="Go to Checkout" onPress={() => router.push('/checkout' as any)} />
          </View>
        </>
      )}
    </ScrollView>
  );
}