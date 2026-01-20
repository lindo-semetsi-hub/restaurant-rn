import { menu } from '@/data/menu';
import { router } from 'expo-router';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen() {
  const categories = Array.from(new Set(menu.map(item => item.category)));

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Our Menu </Text>

      {categories.map(category => (
        <View key={category} style={styles.categorySection}>
          <Text style={styles.categoryTitle}>{category}</Text>

          {menu
            .filter(item => item.category === category)
            .map(item => (
              <TouchableOpacity
                key={item.id}
                style={styles.card}
                onPress={() =>
                  router.push(`/item?id=${item.id}` as any)
                }
              >
                <Image
                  source={{ uri: item.image }}
                  style={styles.image}
                />

                <View style={styles.cardContent}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.description} numberOfLines={2}>
                    {item.description}
                  </Text>
                  <Text style={styles.price}>R{item.price}</Text>
                </View>
              </TouchableOpacity>
            ))}
        </View>
      ))}
    </ScrollView>
  );
}

//styling 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F8F8F8',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#222',
  },
  categorySection: {
    marginBottom: 25,
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#C62828', 
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
  },
  cardContent: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
  },
  description: {
    fontSize: 13,
    color: '#666',
    marginVertical: 4,
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
});