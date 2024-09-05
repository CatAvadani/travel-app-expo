import {
  StyleSheet,
  View,
  FlatList,
  Pressable,
  Image,
  Text,
} from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

interface Destination {
  id: number;
  name: string;
  image: string;
  description: string;
  rating: number;
  price: string;
  duration: string;
  location: string;
  category: string;
}

interface CategoryItemsProps {
  destinations: Destination[];
}

const CategoryItems = ({ destinations }: CategoryItemsProps) => {
  const renderItem = ({ item }: { item: Destination }) => {
    return (
      <Pressable>
        <View style={styles.item}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.bookmark}>
            <Ionicons name="bookmark-outline" size={20} color={Colors.white} />
          </View>
          <Text style={styles.itemText}>{item.name}</Text>
        </View>
      </Pressable>
    );
  };
  return (
    <View>
      <FlatList
        data={destinations}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoryItems;

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.white,
    marginRight: 20,
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  bookmark: {
    position: 'absolute',
    top: 185,
    right: 20,
    backgroundColor: Colors.secondaryColor,
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: Colors.white,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 10,
  },
});

import category from '@/app/(tabs)/category';
import { create } from 'react-test-renderer';
