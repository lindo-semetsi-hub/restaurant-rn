import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Button, Image, Text, View } from 'react-native';
import { menu } from '../data/menu';

export default function Item() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const item = menu.find((m) => m.id === id);

  const [quantity, setQuantity] = useState(1);

  if (!item) {
    return <Text>Item not found</Text>;
  }

  return (
    <View style={{ padding: 20 }}>
      <Image
        source={{ uri: item.image }}
        style={{ width: '100%', height: 200, borderRadius: 10 }}
      />

      <Text style={{ fontSize: 26, fontWeight: 'bold', marginTop: 15 }}>
        {item.name}
      </Text>

      <Text style={{ marginVertical: 10 }}>
        {item.description}
      </Text>

      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
        Price: R{item.price}
      </Text>

      <Text style={{ marginTop: 20 }}>Quantity</Text>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
        <Button title="-" onPress={() => setQuantity(Math.max(1, quantity - 1))} />
        <Text style={{ marginHorizontal: 20 }}>{quantity}</Text>
        <Button title="+" onPress={() => setQuantity(quantity + 1)} />
      </View>

      <Button
        title="Add to Cart"
        onPress={() => {
          router.push('/cart' as any);
        }}
      />
    </View>
  );
}