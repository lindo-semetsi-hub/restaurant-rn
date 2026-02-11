import React from 'react';
import {
    Alert,
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { useAuth } from '@/context/AuthContext';
import { CartItem, useCart } from '@/context/CartContext';
import { useRouter } from 'expo-router';

export default function CartScreen() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const { user } = useAuth(); // logged in user
  const router = useRouter();

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You must be logged in to view the cart.</Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/login')}>
          <Text style={styles.buttonText}>Go to Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const renderItem = ({ item }: { item: CartItem }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>R {item.price}</Text>

        {/* quality controls*/}
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.qtyButton}
            onPress={() => {
              if (item.quantity > 1) updateQuantity(item.id, item.quantity - 1);
            }}
          >
            <Text style={styles.qtyText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.qtyValue}>{item.quantity}</Text>
          <TouchableOpacity
            style={styles.qtyButton}
            onPress={() => updateQuantity(item.id, item.quantity + 1)}
          >
            <Text style={styles.qtyText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* remove button */}
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => removeFromCart(item.id)}
      >
        <Text style={styles.removeText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  const handleCheckout = () => {
    if (cart.length === 0) {
      Alert.alert('Cart Empty', 'Add items to cart before checking out.');
      return;
    }
    router.push('/checkout'); //push to checkout
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>

      {cart.length === 0 ? (
        <Text style={styles.text}>Your cart is empty.</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      )}

      {/* Total & Actions */}
      {cart.length > 0 && (
        <View style={styles.footer}>
          <Text style={styles.totalText}>Total: R {total}</Text>
          <View style={styles.buttonsRow}>
            <TouchableOpacity style={styles.clearButton} onPress={clearCart}>
              <Text style={styles.buttonText}>Clear Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
              <Text style={styles.buttonText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a', 
    padding: 16,
  },
  title: {
    fontSize: 24,
    color: '#00bfff', 
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#121212',
    borderRadius: 10,
    marginBottom: 12,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 12,
  },
  details: {
    flex: 1,
  },
  itemName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    color: '#fff',
    marginTop: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    marginTop: 8,
    alignItems: 'center',
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
  removeButton: {
    marginLeft: 8,
    padding: 4,
  },
  removeText: {
    color: '#ff4d4d',
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  totalText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'right',
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clearButton: {
    backgroundColor: '#ff4d4d',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
    alignItems: 'center',
  },
  checkoutButton: {
    backgroundColor: '#00bfff',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginLeft: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  
  button: {
    backgroundColor: '#00bfff',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
});