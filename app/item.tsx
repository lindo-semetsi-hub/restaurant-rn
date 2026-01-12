import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Button, Image, ScrollView, Text, View } from 'react-native';
import { useCart } from '../context/CartContext';
import { menu } from '../data/menu'; // mock data

export default function Item() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const item = menu.find((m) => m.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!item) return <Text>Item not found</Text>;

  return (
    <ScrollView style={{ padding: 20 }}>
      <Image
        source={{ uri: item.image }}
        style={{ width: '100%', height: 200, borderRadius: 10 }}
      />
      <Text style={{ fontSize: 26, fontWeight: 'bold', marginTop: 15 }}>
        {item.name}
      </Text>
      <Text style={{ marginVertical: 10 }}>{item.description}</Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
        Price: R{item.price}
      </Text>

      {/* Quantity */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
        <Button title="-" onPress={() => setQuantity(Math.max(1, quantity - 1))} />
        <Text style={{ marginHorizontal: 20, fontSize: 18 }}>{quantity}</Text>
        <Button title="+" onPress={() => setQuantity(quantity + 1)} />
      </View>

      <Button
        title="Add to Cart"
        onPress={() => {
          addToCart({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity,
          });
          router.push('/cart' as any);
        }}
      />
    </ScrollView>
  );
}