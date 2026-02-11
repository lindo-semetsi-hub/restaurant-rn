import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { menu } from '@/data/menu';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ItemScreen() {
  const { id } = useLocalSearchParams();
  const { addToCart } = useCart();
  const { user } = useAuth();

  const item = menu.find((f) => f.id === id);

  if (!item) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Item not found.</Text>
      </View>
    );
  }

  const handleAddToCart = () => {
    if (!user) {
      Alert.alert('Login Required', 'You must login to add items to cart.');
      router.push('/login');
      return;
    }

    addToCart(item);
    Alert.alert('Success', 'Item added to cart.');
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>R {item.price}</Text>

        <Text style={styles.description}>
          {item.description}
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  content: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 250,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: '#1E90FF',
    marginBottom: 15,
  },
  description: {
    color: '#CCCCCC',
    fontSize: 16,
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 50,
  },
});