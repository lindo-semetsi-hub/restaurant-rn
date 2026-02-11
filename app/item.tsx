import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { MenuItem, menu } from '@/data/menu';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default function MenuScreen() {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const router = useRouter();

  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const handleAddToCart = (item: MenuItem) => {
    if (!user) {
      Alert.alert('Login Required', 'You must login to add items to the cart.', [
        { text: 'OK', onPress: () => router.push('/login') },
      ]);
      return;
    }

    const quantity = quantities[item.id] || 1;

    addToCart({
      id: item.id,
      name: item.name,
      price: Number(item.price),
      quantity,
      image: item.image,
    });

    Alert.alert('Success', 'Item added to cart!');
  };

  const renderItem = ({ item }: { item: MenuItem}) => {
    const quantity = quantities[item.id] || 1;

    return (
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.desc}>{item.description}</Text>
          <Text style={styles.price}>R {item.price}</Text>

          {/* Quantity Selector */}
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.qtyButton}
              onPress={() =>
                setQuantities((prev) => ({
                  ...prev,
                  [item.id]: quantity > 1 ? quantity - 1 : 1,
                }))
              }
            >
              <Text style={styles.qtyText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.qtyValue}>{quantity}</Text>

            <TouchableOpacity
              style={styles.qtyButton}
              onPress={() =>
                setQuantities((prev) => ({
                  ...prev,
                  [item.id]: quantity + 1,
                }))
              }
            >
              <Text style={styles.qtyText}>+</Text>
            </TouchableOpacity>
          </View>

          {/* Add to cart*/}
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => handleAddToCart(item)}
          >
            <Text style={styles.addButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a', // black
    padding: 16,
  },
  title: {
    fontSize: 24,
    color: '#00bfff', // blue
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#121212',
    borderRadius: 12,
    marginBottom: 12,
    padding: 10,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  desc: {
    color: '#ccc',
    marginTop: 4,
    fontSize: 13,
  },
  price: {
    color: '#00bfff',
    fontWeight: 'bold',
    marginTop: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  qtyButton: {
    backgroundColor: '#00bfff',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 5,
  },
  qtyText: {
    color: '#fff',
    fontSize: 18,
  },
  qtyValue: {
    color: '#fff',
    marginHorizontal: 8,
    fontSize: 16,
  },
  addButton: {
    marginTop: 8,
    backgroundColor: '#00bfff',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});