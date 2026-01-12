import { router } from 'expo-router';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { menu } from '../data/menu';


export default function Home() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>
        Menu
      </Text>

      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 15,
              marginBottom: 15,
              backgroundColor: '#fff',
              borderRadius: 10,
              elevation: 2,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              {item.name}
            </Text>
            <Text>{item.description}</Text>
            <Text style={{ marginTop: 5 }}>R{item.price}</Text>

           <TouchableOpacity
  onPress={() => router.push(`/item?id=${item.id}` as any)}
>
  <Text style={{ color: 'red', marginTop: 10 }}>
    View Item →
  </Text>
</TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}